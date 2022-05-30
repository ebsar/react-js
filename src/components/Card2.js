function Card2 (props){
    return(
        <div className="card">
        <div className='card2'>
        <h5>3.1.0 (20/05/2015)</h5>
          <div className="box">
            <div className="box-1">
              <h6 className="text2">New</h6>
            </div>
            <div className="box-2">
              <img className="photo" src="https://i.pinimg.com/originals/39/6c/d8/396cd8e1d8557f73c786892cffa4f13c.png"alt=""/>
            </div>
            <div className="box-3">
              <h6>Kevin Joe</h6>
            </div>
    
          </div>
          <div className='text'>
          <h6> Files system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permission re-design and optimization</h6>
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