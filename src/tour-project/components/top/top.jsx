import './top.scss';
//import {Android} from '@material-ui/icons'

const Top=()=>{
    return(
        <>
        <div className="topContainer">
<div className="topTopContainer">
              
        <div className="logo">Tours<span id='dot'>.</span>com</div>
        <div className="options">
<div className="bordered">

<p>app</p>
<p>help</p>
</div>
<p className='bordered'> CNY</p>
<p>Search Bookings</p>
<button>Sign in/Register</button>

        </div>
</div>
<div className="bottomTop">
    <div className='searchDiv'>
        <ul>
            <li><a href=''>trip</a></li>
            <li><a href=''>travel guides</a></li>            
            <li><a href=''>africa</a></li>            
            <li><a href=''>Lagos State</a></li>            
            <li><a href=''>Lagos</a> </li>            

        </ul>
        <input type="search" name="search" id="search" placeholder="Destination, attraction, hotel, etc" />
    </div>
    <p style={{textTransform:'capitalize', fontSize:'20px'}}> Top things to do in lagos 2021 </p>
    <h1 style={{textTransform:'capitalize'}}>Top things to do in lagos 2021</h1>
</div>
    </div>
        </>
    )
}
export default Top