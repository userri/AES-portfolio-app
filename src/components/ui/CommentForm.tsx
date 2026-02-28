import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { supabase } from "../../api/supabase";

const CommentForm = ({ projectId }: { projectId: number }) => {
  const [form, setForm] = useState({ nickname: "", content: "" });
  // main.tsx에서 선언했던거 가져오기
  const queryClient = useQueryClient();

  // 핸들러 하나로 상태 관리
  // 그냥 e로만 해도 되긴 하지만 event 타입 명시
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // name에 맞는 value만 업데이트 됨
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 데이터 바뀔 때마다 상태도 최신화하게 요청
  const { mutate } = useMutation({
    // supabase의 insert 함수는 async로 감싸야함
    mutationFn: async (newComment: {
      user_nickname: string;
      content: string;
      project_id: number;
    }) => {
      const { data, error } = await supabase
        .from("comments")
        .insert([newComment]);
      if (error) {
        console.error("Supabase Error:", error.message);
        throw error;
      }
      return data;
    },
    onSuccess: () => {
      // 이전 데이터 무효화
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      setForm({ nickname: "", content: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.nickname.trim()) return alert("닉네임을 입력해주세요");
    if (!form.content.trim()) return alert("댓글 내용을 입력해주세요");

    // 서버로 데이터 보내기
    mutate({
      user_nickname: form.nickname,
      content: form.content,
      project_id: projectId,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nickname"
        value={form.nickname}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, nickname: e.target.value }))
        }
        placeholder="댓글 닉네임"
      />
      <input
        name="content"
        value={form.content}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, content: e.target.value }))
        }
        placeholder="댓글 내용을 작성해주세요"
      />
      <button type="submit">댓글 작성하기</button>
    </form>
  );
};

export default CommentForm;
