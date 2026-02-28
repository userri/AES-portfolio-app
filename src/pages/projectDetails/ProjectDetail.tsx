import { useQuery } from "@tanstack/react-query";
import styles from "./ProjectDetail.module.css";
import type Comment from "../../types/Comment";
import { supabase } from "../../api/supabase";
// import { useState } from "react";
import CommentBox from "../../components/ui/CommentBox";
import CommentForm from "../../components/ui/CommentForm";

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
      <div className={styles.mdBox}></div>
      <div className={styles.commentBox}>
        <div className={styles.commentsInto}>
          <img alt="" />
          <div>댓글 0개</div>
          <img src={"하트아이콘"} alt="" />
          <div>좋아요 17개</div>
        </div>
        <div className={styles.writtenComments}>
          {comments.map((comment) => (
            <CommentBox
              key={comment.id}
              userNickname={comment.user_nickname}
              createdAt={comment.created_at}
              content={comment.content}
            />
          ))}
        </div>
        <div className={styles.newCommentBox}>
          <CommentForm projectId={1} />
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
