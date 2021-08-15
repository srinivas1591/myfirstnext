import React from 'react'

const Profile = props => {
    return (
        <div className='card'>
        <img src={props.img} className="imgun"/><br/>
        <font className="sma"><b>{props.role}</b></font><br/>
        <div><font className="lar"><b>{props.text}</b></font><button className="but">...</button></div>
        <font className="par">{props.subtext}</font>
        <center><button className="btn btn-success win" >Visit Website</button></center>
        <div className="thelas">
            <div> <img src={props.img} className="imggun"/>{props.name}</div>
            <div>1.4k views <button>Share</button></div>
        </div>
        </div>
    )
}

export default Profile


