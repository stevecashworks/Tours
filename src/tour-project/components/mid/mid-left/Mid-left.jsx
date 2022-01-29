import {useState} from 'react';
import './mid-left.scss'
const firstList=['Recommended' ,'Exhibition Halls','LifeStyle','Nature',
"Architecture",'Religous sites','Parks','Historic Sites']
const secondList=['Kid Friendly','Outdoor Adventure', 'Road trips']
const MidLeft=()=>{
    const First=({list,heading})=>{
        return<div>
            <div className='midrighttop'>
                <h3> {heading}</h3>
                <button className='btn'>clear</button>
            </div>
            <ul>
                {list.map(l=><li>{l}</li>)}
            </ul>
        </div>
    }
    const [showMore,setShowMore]= useState(false)
    return(
      
<div className='midleft'> 
      <First list={showMore?firstList: firstList.slice(0,4)} heading='Types of Attractions' />  
            <button className="btn" onClick={()=>{setShowMore(!showMore)}}>{showMore?'Show less':'Show more'}</button>
 <First list={secondList} heading='other'/>
                    
            

        </div>
    )
}
export default  MidLeft