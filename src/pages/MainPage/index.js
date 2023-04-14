import React, {useState} from "react";
import WriteModal from "../../components/WriteModal"
import axios from "../../api/axios";

const MainPage = () => {

  
  const [post,setPost] = useState({
    id:"",
    title:"",
    content:"",

  });

  const [posts, setPosts] = useState([
    {id:1, title:'제목1',content:'내용1'},
    {id:2, title:'제목2',content:'내용2'},
    {id:3, title:'제목3',content:'내용3'},



  ])
  const [modalOpen, setModalOpen] = useState(false)
  
  const handleClick = () => {
    setModalOpen(true);
  } 

  return (
  <div className="App">
    <div className="list">
      <h3>{post.title}</h3>
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

