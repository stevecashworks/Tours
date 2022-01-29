import './Mid-right.scss'
import data from './data'
import TourComponent from './tourComponent/TourComponent.jsx'
const MidRight=()=>{
    return(
        <div className='midright'>
          {data.map((t,index)=>{const {name,img, comment, commentBy,category}=t 
          return<TourComponent name={name} img={img} category={category}comment={comment} commentBy={commentBy}/>})}
        </div>
    )
}

export default MidRight