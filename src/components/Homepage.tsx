import React from 'react'
import "./Homepage.scss"
import { BsFillBookmarkHeartFill, BsArrowLeftShort, BsArrowRightShort, BsAwardFill, BsCalendar3Fill } from "react-icons/bs";

export const Homepage = () => {
  return (
    <div>
        <h1>Start <hr/></h1>
        <h1 ><hr />Center<hr /></h1>
        <h1><hr /> End</h1>
        <br></br>
        <h1 ><hr className='divider'/>Solid <hr className='divider'/></h1>
        <h1 ><hr className='divider divider--dashed'/>Dashed<hr className='divider divider--dashed'/></h1>
        <h1 ><hr className='divider divider--dotted'/>Dotted<hr className='divider divider--dotted'/></h1>
        <br></br>
        <h1 ><hr className='divider divider--light'/>Light<hr className='divider divider--light'/></h1>
        <h1 ><hr/>Regular<hr/></h1>
        <h1 ><hr className='divider divider--heavy'/>Heavy<hr className='divider divider--heavy'/></h1>
        <br></br>
        <h1 ><hr className='divider divider--dotted'/><BsFillBookmarkHeartFill className='primary'/><hr className='divider divider--dotted'/></h1>
        <h1 ><hr/><BsArrowLeftShort className='secondary'/><BsAwardFill className='secondary'/> <BsArrowRightShort className='secondary'/><hr/></h1>
        <h1><BsCalendar3Fill className='secondary'/> <hr className='divider divider--dashed'/></h1>

    </div>
  )
}
