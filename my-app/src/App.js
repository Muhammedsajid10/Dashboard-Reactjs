import './App.css';
import Data from './Data/Data';
import SideBar from './SideBar/SideBar';


function App() {
  return (
    <div>
     <SideBar/>
     <Data/>
    </div>
  );
}

export default App;























// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Data from './Data/Data';
// import SideBar from './SideBar/SideBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col xs={12} sm={4} md={3} lg={2}>
//           <SideBar />
//         </Col>
//         <Col xs={12} sm={8} md={9} lg={10}>
//           <Data />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;