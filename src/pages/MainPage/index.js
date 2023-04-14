import React, {useState} from "react";
import WriteModal from "../../components/WriteModal"
import axios from "../../api/axios";

const MainPage = () => {

  
  // const [posts,setPosts] = useState({
  //   id:"",
  //   title:"",
  //   content:"",

  // });
  const [modalOpen, setModalOpen] = useState(false)
  
  const handleClick = () => {
    setModalOpen(true);
  } 

  return (
  <div className="App">
    <div className="list">
      <h3>제목</h3>
      <p>리스트 내용</p>
      <hr/>
    </div>
    <button onClick={()=>handleClick()}>글쓰기</button>

    
    {modalOpen && (<WriteModal setModalOpen={setModalOpen} />
      )}    
  </div>  
  );
};

export default MainPage;

