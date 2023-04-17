import React, {useState} from "react";
import { json } from "react-router-dom";
import styled from "styled-components";


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
    fetch("http://localhost:8090/api/boards", {
      method: "POST",
      headers: {
        "Content-Type":"application/json; charset=utf-8"
      },
      body:JSON.stringify(writePost)
    }).then(res => res.json()).then(res=>{
      console.log(res);
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
          <input type="text" placeholder='제목' name="title"
          onChange={handleWrite}></input>
        
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



