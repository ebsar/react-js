function Card3 (props){
    return(
        <div className="card">
        <div className='card2'>
        <h5>3.1.0 (20/05/2015)</h5>
          <div className="box">
            <div className="box-1-2-3">
              <h6>Improvements</h6>
            </div>
            <div className="box-2">
              <img className="photo" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg"alt=""/>
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
export default Card3;