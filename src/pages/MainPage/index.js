import React, {useCallback, useState, useEffect} from "react";
import WriteModal from "../../components/WriteModal"
import requests from "../../api/requests";
import instance from "../../api/axios";
import PostingList from "../../components/PostingList";


const MainPage = () => {

  const [posts,setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  
  const handleClick = () => {
    setModalOpen(true);
  } 

  const fetchPostingList = useCallback(async () => {
    const response = await instance.get(requests.fetchList);
    console.log(">>>>response :", response.data);
    setPosts(response.data);
  }, [requests.fetchList])

  useEffect(() => {
    fetchPostingList();
  }, [fetchPostingList]);

  return (
  <div className="App">
    <div className="list">
      {posts.map((post)=>(
        <PostingList key={post.id} post={post}/>
      ))}
      
    </div>
    <hr/>
    <button onClick={()=>handleClick()}>글쓰기</button>

    
    {modalOpen && (<WriteModal setModalOpen={setModalOpen} />
      )}    
  </div>  
  );
};

export default MainPage;

