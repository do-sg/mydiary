import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const DiaryEdit = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diary Edit
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          다이어리 수정화면{param.pk} 글 수정
        </h2>
      </Main>
      <Footer>My Diary Edit</Footer>
    </>
  );
};

export default DiaryEdit;
