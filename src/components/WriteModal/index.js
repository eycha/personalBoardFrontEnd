import React, {useState} from "react";
import styled from "styled-components";


const WriteModal = ({setModalOpen}) => {

  const [writeTitle,setWriteTitle] = useState("");
  const [writeContent,setContent] = useState("");

  return (
    <>
      <WriteModalTitleStyle>
        <span onClick={() => setModalOpen(false)} className="modal-close">
          X
        </span>
        <div className='title-container'>
          <h2>제목</h2>
          <input className="title-input" type="text" placeholder='제목'/>
        </div>
      </WriteModalTitleStyle>
      <WriteModaContentlStyle>
        <div className='content-container'>
          <h3>내용</h3>
          <textarea className='text-area' placeholder='내용'></textarea>
          <button className='submit-button'>입력</button>
        </div>
      </WriteModaContentlStyle> 
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



