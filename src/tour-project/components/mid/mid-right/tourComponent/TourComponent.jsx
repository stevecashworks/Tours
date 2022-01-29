import './tourComponent.scss';
function TourComponent({img,name,review, comment,commentBy,category}) {
    return ( 
        <div className='container'>
            <img src= {img} className='tourImg'/>
            <div>
                <h1 className='name'>{name}</h1>
                <p className="category">{category}</p>
                <h6 className='comment'>{commentBy}<span><p>{comment}</p></span></h6>
            </div>

            </div>
    );
}

export default TourComponent;