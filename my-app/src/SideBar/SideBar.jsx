import React from 'react'
import { BiSolidDashboard, BiSupport } from "react-icons/bi";
import { FaAngleRight, FaPowerOff } from "react-icons/fa";
import { RiPlantFill, RiQuestionAnswerFill } from "react-icons/ri";
import { FaPuzzlePiece } from "react-icons/fa";
import { AiOutlineDown } from 'react-icons/ai';
import './SideBar.css'

function SideBar() {
  return (
    <div>
      {/* IMAGE PART................................................... */}
      <div>
        <span className='imgHead'>
          <img style={{ transform: 'translate(-20px,-45px)' }} src="https://media.licdn.com/dms/image/D560BAQFPvoYeqPTghg/company-logo_200_200/0/1683376258927?e=1702512000&v=beta&t=-iF5t1P1PJYeawUZKdzsgTRAsf_Huzbomrpf3EOpxrI" alt="" />
        </span>
        <span className='imgHead1'>
          <img className='headImage' src="https://images.unsplash.com/photo-1535210229443-10b07631ed3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='imageHeadPara'>XYZ Enterprises Pvt.Ltd</p>
        </span>
        <span className='imgHead2'>
          <p className='imageHeadIcon' ><AiOutlineDown /></p>
        </span>
        <div className='divider'></div>
      </div>



      {/* SIDEBAR PART....................................................... */}
      <div className='sideeBarContainer'>
        <ul className="nav flex-column  navUl">
          <div className='sidebar_maindiv'>
            <span>
              <img className='Sidebar_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndO3R2CXGEud6szR0hHdfHJz_v3FCwdQUHw&usqp=CAU" alt="" />
              <h4 style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Ronaldo &nbsp;<span style={{ color: 'blue' }}>&#10095;</span></h4>
              <p style={{ textAlign: 'center' }}>ronaldocr7gmail.com</p>
            </span>
          </div>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <div className='nav-link-div'>
                <BiSolidDashboard className='icon'  />
                <span className="ms-2 nav-link-div-span">Dashboard</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <div className='nav-link-div'>
                <RiPlantFill className='icon' />
                <span className="ms-2 nav-link-div-span">Perks</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <div className='nav-link-div'>
                <FaPuzzlePiece className='icon' />
                <span className="ms-2 nav-link-div-span">Addons</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <div className='nav-link-div'>
                <RiQuestionAnswerFill className='icon' />
                <span className="ms-2 nav-link-div-span">FAQ</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <div className='nav-link-div'>
                <BiSupport className='icon' />
                <span className="ms-2 nav-link-div-span">Support</span>
              </div>

            </a>
          </li>
          <div className='divLogout'>Logout <FaPowerOff size="12" /></div>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
