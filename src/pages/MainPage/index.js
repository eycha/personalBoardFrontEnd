const MainPage = () => {
    return (
    <div className="App">
      <div className='title-container'>
        <h2>제목</h2>
        <input className="title-input" type="text" placeholder='제목'/>
      </div>
      <div className='content-container'>
        <h3>내용</h3>
        <textarea className='text-area' placeholder='내용'></textarea>
        <button className='submit-button'>입력</button>
      </div>        
    </div>
    );
};

export default MainPage;

