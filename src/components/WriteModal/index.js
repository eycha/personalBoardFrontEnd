import React, { useState, useEffect } from "react";
import styled from "styled-components";
import requests from "../../api/requests";
import instance from "../../api/axios";

const WriteModal = ({ setModalOpen }) => {
  const [writePost, setWritePost] = useState({
    title: "",
    content: "",
  });

  const handleWrite = (e) => {
    setWritePost({
      ...writePost,
      [e.target.name]: e.target.value,
    });
  };

  const submitWrite = (e) => {
    instance.post(requests.fetchWrite, writePost).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <Modal>
        <WriteModalTitleStyle>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <div className="title-container">
            <h2>제목</h2>
            <input
              type="text"
              placeholder="제목"
              name="title"
              onChange={handleWrite}
            ></input>
          </div>
        </WriteModalTitleStyle>
        <WriteModaContentlStyle>
          <div className="content-container">
            <h3>내용</h3>
            <textarea
              placeholder="내용"
              name="content"
              onChange={handleWrite}
            ></textarea>
          </div>
        </WriteModaContentlStyle>

        <button className="submit-button" onClick={submitWrite}>
          입력
        </button>
      </Modal>
    </>
  );
};

export default WriteModal;

const WriteModalTitleStyle = styled.div`
  margin-top: 30px;
  text-align: right;
  padding-left: 20px;
  padding-right: 20px;
`;

const WriteModaContentlStyle = styled.div`
  margin-top: 30px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Modal = styled.div`
  position: absolute;
  left: 1000px;
  top: 200px;
  padding-left: 200px;
  padding-right: 200px;

  max-width: 1000px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border-radius: 8px;
`;
