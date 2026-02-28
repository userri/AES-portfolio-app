import { useQuery } from "@tanstack/react-query";
import styles from "./ProjectDetail.module.css";
import type Comment from "../../types/Comment";
import { supabase } from "../../api/supabase";
// import { useState } from "react";
import CommentBox from "../../components/ui/CommentBox";
import CommentForm from "../../components/ui/CommentForm";
import icon from "../../assets/icon/오토에버스쿨 1.png";
import back from "../../assets/icon/calendar.png";

const ProjectDetail = () => {
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
        // .eq() 현재 포스트에 해당하는 댓글들을 가져와야 함. 근데 slug로할지? 연결된 project의 id로 할지?
        .order("created_at");

      if (error) throw error;
      return (data ?? []) as Comment[];
    },
  });

  // 댓글추가
  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerGroup}>
          <img src={icon} alt="" />
          <div className={styles.headerTitle}>IT 엘도라도</div>
          <div className={styles.headerSubtitle}>지식의 보물창고</div>
        </div>
        <img src={back} className={styles.back}></img>
      </div>
      <div className={styles.contents}>
        <div className={styles.mdBox}></div>
        <div className={styles.commentBox}>
          <div className={styles.commentsInfo}>
            <img alt="" />
            <div>댓글 0개</div>
            <img src={"하트아이콘"} alt="" />
            <div>좋아요 17개</div>
          </div>
          <div className={styles.writtenCommentBox}>
            {comments.map((comment, index) => (
              <div className={styles.writtenComments}>
                <CommentBox
                  key={comment.id}
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
          <div className={styles.newCommentBox}>
            <CommentForm projectId={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
