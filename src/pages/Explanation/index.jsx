import React, { useState } from "react";
import * as S from "./index.style";
import Header from "../../components/Header";

import redPikmin from "../../assets/redPikmin.jpeg";

const Explanation = () => {
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmitComment = () => {
    if (newComment.trim() && username.trim()){
      const commentObj = {
        id : Date.now(),
        text : newComment,
        author : username,
        timestamp : new Date().toLocaleString()
      };

      setComments([...comments, commentObj]);
      setNewComment('');
    }
  }

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  }

  return (
    <S.backgroundImg>
      <Header />
      <S.explainContainer>
        <S.redPikmin src={redPikmin}></S.redPikmin>
        <S.explain>
          <S.explainText>이름 : 빨간 피크민</S.explainText>
          <S.explainText>
            특징 : 피크민에서 처음 등장한 피크민. 특징으로는 색이 붉은색이고
            뾰족한 코와 같은 돌기가 달려 있다.
          </S.explainText>
          <S.explainText>크기 : 29mm</S.explainText>
          <S.explainText>전투력 : 15</S.explainText>
        </S.explain>
      </S.explainContainer>

      <S.CommentContainer>
        <S.Title>댓글</S.Title>
        <S.InputContainer>
          <S.StyledInput
            type="text"
            placeholder="이름을 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}>
          </S.StyledInput>
        </S.InputContainer>

        <S.InputContainer>
          <S.StyledInput
            type="text"
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></S.StyledInput>
          <S.StyledButton onClick={handleSubmitComment}>등록</S.StyledButton>
        </S.InputContainer>

        <S.CommentItem>
          {comments.map((comment) => (
            <S.CommentItem key={comment.id}>
              <S.CommentInfo>
                <S.AuthorName>{comment.author}</S.AuthorName>
                <S.CommentText>{comment.text}</S.CommentText>
                <S.CommentTimestamp>{comment.timestamp}</S.CommentTimestamp>
              </S.CommentInfo>
              <S.StyledButton variant = 'destructivw' size = 'sm' onClick={() => handleDeleteComment(comment.id)}>
                삭제
              </S.StyledButton>
            </S.CommentItem>
          ))}
        </S.CommentItem>
      </S.CommentContainer>
    </S.backgroundImg>
  );
};

export default Explanation;
