import React, {useState,useEffect} from "react";
import styled from "styled-components";
import requests from "../../api/requests";
import instance from "../../api/axios";


const WriteModal = ({setModalOpen}) => {

  const [writePost, setWritePost] = useState({
    title: "",
    content: "",
  });


  const handleWrite = (e) => {
    setWritePost({
      ...writePost,
      [e.target.name]:e.target.value
    });

  }

  const submitWrite = (e) => {
    instance.post(requests.fetchWrite, writePost).then(res=>{
      console.log(res.data);
    });
  }


  return (
    <>
      <WriteModalTitleStyle>
        <span onClick={() => setModalOpen(false)} className="modal-close">
          X
        </span>
        <div className='title-container'>
          <h2>제목</h2>
          <input type="text" placeholder='제목' name="title" onChange={handleWrite}></input>
        </div>
      </WriteModalTitleStyle>
      <WriteModaContentlStyle>
        <div className='content-container'>
          <h3>내용</h3>
          <textarea placeholder='내용' name='content' onChange={handleWrite}></textarea>
        </div>
      </WriteModaContentlStyle> 
      <button className='submit-button' onClick={submitWrite}>입력</button>
    </>      
    
    );
};

export default WriteModal;

const WriteModalTitleStyle = styled.div`
  margin-top: 30px;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
`

const WriteModaContentlStyle = styled.div`
  margin-top: 30px;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
`



