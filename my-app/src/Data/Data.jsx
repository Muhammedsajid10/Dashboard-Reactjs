import React from 'react'
import { AiOutlineCloudDownload, AiOutlineMail, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { BsBellFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import './Data.css'
import DownDetail from '../DownDetails/DownDetail';


function Data() {


    return (
        <div>
            <div className='Div1'>
                <span >
                    <h2 className='headh2'>Choose a Plan that's just right for you !</h2>
                    <ol className='Div1Plan'>
                        <Button className='Div1Planbutton'>Monthly</Button>&nbsp;
                        <Button className='Div1Planbutton'>Annually <sup style={{ color: 'green', fontWeight: '400' }}>-10%</sup></Button>
                    </ol>
                </span>
                <div className='d-flex datadivsub'>
                    <div className='pricedetail Price1'>
                        <div className='divType1' >
                            <p className='divTypeSub1 ' style={{ fontSize: '22px' }} >Basic</p>
                            <p className='divTypePrise'><del>$89.9/mo</del></p>
                            <p className='divTypeSub1 sub1' style={{ fontSize: '20px' }} >$9.99/mo</p>
                            <button className='getStartedBtn' style={{ backgroundColor: 'rgb(218 150 23)' }}>Get Started &#10141;</button>
                            <hr className='horizontal' />
                        </div>

                        <ol className='divType2'>
                            <li className='listpara'>What you'll get :</li>
                            <li className='listpara'><AiOutlineUser /> &nbsp;Upto 25 Users</li>
                            <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 25gb Storage</li>
                            <li className='listpara'><AiOutlineMail /> &nbsp;Email Support</li>
                            <li className='listpara'><a className='explore' href="">EXPLORE FEATURES &#10151;</a></li>
                        </ol>
                    </div>

                    <div className='pricedetail Price2'>
                        <ol className='divType1' >
                            <p className='divTypeSub1 ' style={{ fontSize: '22px' }} >Standard</p>
                            <p className='divTypePrise'><del>$189.99/mo</del></p>
                            <p className='divTypeSub1 sub1' style={{ fontSize: '20px' }}>$99.99/mo</p>
                            <button className='getStartedBtn' style={{ backgroundColor: 'rgb(230 67 33)' }}>Get Started &#10141;</button>
                            <hr className='horizontal' />
                        </ol>
                        <ol className='divType2'>
                            <li className='listpara'>What you'll get :</li>
                            <li className='listpara'><AiOutlineUser /> &nbsp;Upto 50 Users</li>
                            <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 60gb Storage</li>
                            <li className='listpara'><AiOutlineMail /> &nbsp;Email + Chat Support</li>
                            <li className='listpara'><a className='explore' href="">EXPLORE FEATURES &#10151;</a></li>
                        </ol>
                    </div>

                    <div className='pricedetail Price3'>
                        <ol className='divType1' >
                            <p className='divTypeSub1 ' style={{ fontSize: '22px' }} >Premium</p>
                            <p className='divTypePrise'><del>$389.9/mo</del></p>
                            <p className='divTypeSub1 sub1' style={{ fontSize: '20px' }}>$199.99/mo</p>
                            <button className='getStartedBtn' style={{ backgroundColor: 'rgb(195 48 239)' }}>Get Started &#10141;</button>
                            <hr className='horizontal' />
                        </ol>
                        <ol className='divType2'>
                            <li className='listpara'>What you'll get :</li>
                            <li className='listpara'><AiOutlineUser /> &nbsp;Upto 75 Users</li>
                            <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 100gb Storage</li>
                            <li className='listpara'><AiOutlineMail /> &nbsp;Email + Chat + Whatsapp Support</li>
                            <li className='listpara'><a className='explore' href="">EXPLORE FEATURES &#10151;</a></li>
                        </ol>
                    </div>
                </div>
                <DownDetail />
            </div>
            <div className='Div2'>
                <span className='BellSymbolSpan'>
                    <BsBellFill size='17' className='BellSymbolSYmbol' /><sup className='sup'>3</sup>
                </span>
                <span >
                    <section className="whiteSpace"></section>
                </span>
                <span >
                    <section className="addbutton"><AiOutlinePlus className='addbtnIcon' /></section>
                </span>
            </div>
        </div>
    )
}

export default Data
































// import React from 'react'
// import { AiOutlineCloudDownload, AiOutlineMail, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
// import { BsBellFill } from 'react-icons/bs';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// // import './Data.css'
// import DownDetail from '../DownDetails/DownDetail';

// function Data() {
//     return (
//         <Container fluid>
//             <Row className="Div1">
//                 <span >
//                     <h2 className='headh2'>Choose a Plan that's just right for you !</h2>
//                     <ol className='Div1Plan'>
//                         <Button className='Div1Planbutton'>Monthly</Button>&nbsp;
//                         <Button className='Div1Planbutton'>Annually <sup style={{ color: 'green', fontWeight: '400' }}>-10%</sup></Button>
//                     </ol>
//                 </span>

//                 <div className='d-flex datadivsub'>
//                     <div className='pricedetail Price1'>
//                         <div className='divType1' >
//                             <p className='divTypeSub1 ' style={{ fontSize: '22px' }} >Basic</p>
//                             <p className='divTypePrise'><del>$89.9/mo</del></p>
//                             <p className='divTypeSub1 sub1' style={{ fontSize: '20px' }} >$9.99/mo</p>
//                             <button className='getStartedBtn' style={{ backgroundColor: 'rgb(218 150 23)' }}>Get Started &#10141;</button>
//                             <hr className='horizontal' />
//                         </div>

//                         <ol className='divType2'>
//                             <li className='listpara'>What you'll get :</li>
//                             <li className='listpara'><AiOutlineUser /> &nbsp;Upto 25 Users</li>
//                             <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 25gb Storage</li>
//                             <li className='listpara'><AiOutlineMail /> &nbsp;Email Support</li>
//                             <li className='listpara'><a className='explore' href="">EXPLORE FEATURES &#10151;</a></li>
//                         </ol>
//                     </div>

//                     <div className='pricedetail Price2'>
//                         <ol className='divType1' >
//                             <p className='divTypeSub1 ' style={{ fontSize: '22px' }} >Standard</p>
//                             <p className='divTypePrise'><del>$189.99/mo</del></p>
//                             <p className='divTypeSub1 sub1' style={{ fontSize: '20px' }}>$99.99/mo</p>
//                             <button className='getStartedBtn' style={{ backgroundColor: 'rgb(230 67 33)' }}>Get Started &#10141;</button>
//                             <hr className='horizontal' />
//                         </ol>
//                         <ol className='divType2'>
//                             <li className='listpara'>What you'll get :</li>
//                             <li className='listpara'><AiOutlineUser /> &nbsp;Upto 50 Users</li>
//                             <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 60gb Storage</li>
//                             <li className='listpara'><AiOutlineMail /> &nbsp;Email + Chat Support</li>
//                             <li className='listpara'><a className='explore' href="">EXPLORE FEATURES &#10151;</a></li>
//                         </ol>
//                     </div>

//                     <div className='pricedetail Price3'>
//                         <ol className='divType1' >
//                             <p className='divTypeSub1 ' style={{ fontSize: '22px' }} >Premium</p>
//                             <p className='divTypePrise'><del>$389.9/mo</del></p>
//                             <p className='divTypeSub1 sub1' style={{ fontSize: '20px' }}>$199.99/mo</p>
//                             <button className='getStartedBtn' style={{ backgroundColor: 'rgb(195 48 239)' }}>Get Started &#10141;</button>
//                             <hr className='horizontal' />
//                         </ol>
//                         <ol className='divType2'>
//                             <li className='listpara'>What you'll get :</li>
//                             <li className='listpara'><AiOutlineUser /> &nbsp;Upto 75 Users</li>
//                             <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 100gb Storage</li>
//                             <li className='listpara'><AiOutlineMail /> &nbsp;Email + Chat + Whatsapp Support</li>
//                             <li className='listpara'><a className='explore' href="">EXPLORE FEATURES &#10151;</a></li>
//                         </ol>
//                     </div>
//                 </div>
//                 <DownDetail />
//             </Row>
//             <Row className="Div2">
//             <span className='BellSymbolSpan'>
//                     <BsBellFill size='17' className='BellSymbolSYmbol' /><sup className='sup'>3</sup>
//                 </span>
//                 <span >
//                     <section className="whiteSpace"></section>
//                 </span>
//                 <span >
//                     <section className="addbutton"><AiOutlinePlus className='addbtnIcon' /></section>
//                 </span>
//             </Row>
//         </Container>
//     );
// }

// export default Data;