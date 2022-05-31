function Card2 (props){
    return(
        <div className="card">
        <div className='card2'>
        <h5>3.1.0 (20/05/2015)</h5>
          <div className="box">
            <div className="box-1-2">
              <h6 className="text-2">Fix</h6>
            </div>
            <div className="box-2">
              <img className="photo" src="https://i.pinimg.com/originals/39/6c/d8/396cd8e1d8557f73c786892cffa4f13c.png"alt=""/>
            </div>
            <div className="box-3">
              <h6>Kevin Joe</h6>
            </div>
    
          </div>
          <div className='description'>
          <h6>Introducing Host Cloud Driver - virtual driver functional <br/>New Share options and management <br/> New, more user friendly design sync <br/> optimizations Various performance <br/>improvements and bug fixes</h6>
        </div>
        <div className='actions'>
        <button className='btn'>
            Download
            </button>
        </div>
        </div>
        </div>
    )
}
export default Card2;