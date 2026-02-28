import { useQuery } from "@tanstack/react-query";
import styles from "./ProjectDetail.module.css";
import type Comment from "../../types/Comment";
import { supabase } from "../../api/supabase";
// import { useState } from "react";
import CommentBox from "../../components/ui/CommentBox";
import CommentForm from "../../components/ui/CommentForm";
import icon from "../../assets/icon/오토에버스쿨 1.png";
import back from "../../assets/icon/calendar.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [projectId, setProjectId] = useState<number | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) {
        setContent("");
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("id, slug")
          .eq("slug", slug)
          .single();

        if (error || !data?.slug) throw new Error("Not Found");

        setProjectId(data.id);

        const response = await fetch(
          `https://jownbnfgeguvahsmpwsb.supabase.co/storage/v1/object/public/md/${slug}.md`,
        );
        if (!response.ok) throw new Error("Not Found");
        const text = await response.text();
        setContent(text);
      } catch {
        setContent("");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);
  const {
    data: comments = [],
    isLoading,
    error,
  } = useQuery<Comment[]>({
    queryKey: ["comments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at");

      if (error) throw error;
      return (data ?? []) as Comment[];
    },
    enabled: !!projectId, // projectId 있을 때만 쿼리 실행
  });

  if (isLoading || loading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.headerGroup}>
          <img src={icon} alt="" />
          <div className={styles.headerTitle}>IT 엘도라도</div>
          <div className={styles.headerSubtitle}>지식의 보물창고</div>
        </div>
        <img src={back} className={styles.back}></img>
      </div>
      <div className={styles.contents}>
        <div className={styles.mdBox}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className={styles.commentBox}>
          <div className={styles.commentsInfo}>
            <img alt="" />
            <div>댓글 0개</div>
            <img src={"하트아이콘"} alt="" />
            <div>좋아요 17개</div>
          </div>
          <div className={styles.writtenCommentBox}>
            {comments.map((comment, index) => (
              <div key={comment.id} className={styles.writtenComments}>
                <CommentBox
                  userNickname={comment.user_nickname}
                  createdAt={comment.created_at}
                  content={comment.content}
                />
                {index !== comments.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>
            ))}
          </div>
          <CommentForm projectId={projectId || 0} />
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
