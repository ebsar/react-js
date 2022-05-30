
function Card(props){
    
   return(
    <div className='card'>
    <h5>3.3.0 (15.05.2018)</h5>
      <div className="box">
        <div className="box-1">
          <h6 className="text1">New</h6>
       </div> 
        <div className="box-2">
        <img className="photo" src="https://i.pinimg.com/originals/39/6c/d8/396cd8e1d8557f73c786892cffa4f13c.png" alt="" />
        </div>
        <div className="box-3">
          <h6>Kevin Joe</h6>
        </div>
      </div>
      <div className='text'>
      <h6>
        Houston Hosk cloud driver the usual driver functionality. <br/>
      New share options and management New more user friendly design sync optimizations Various performance improvements and bug fixes
      </h6>
    </div>
    <div className='actions'>
    <button className='btn'>
        Download
        </button>
    </div>
    </div>
  );
}

export default Card; 