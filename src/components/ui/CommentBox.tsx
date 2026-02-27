import styles from "./style/CommentBox.module.css";

interface CommentBoxProps {
  userNickname: string;
  createdAt: string;
  content: string;
}
const CommentBox = ({ userNickname, createdAt, content }: CommentBoxProps) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userNickname}>{userNickname}</div>
      <div className={styles.commentCreatedDate}>{createdAt}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
export default CommentBox;
