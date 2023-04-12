const DetailPage = () => {
    return (
    <div className="App">
      <div className='title-container'>
        <h2>밍</h2>
        <input className="title-input" type="text" placeholder='제목'/>
      </div>
      <div className='content-container'>
        <h3>오잉</h3>
        <textarea className='text-area' placeholder='내용'></textarea>
        <button className='submit-button'>입력</button>
      </div>        
    </div>
    );
};

export default DetailPage;

