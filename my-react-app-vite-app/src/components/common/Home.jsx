import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import AllQuizes from './AllQuizes';


const Home = () => {
   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand><h2 style={{color: 'black'}} >QuizApp</h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                  </Nav>
                  <Nav>
                     <Link to={'/'}>Home</Link>
                     <Link to={'/login'}>Login</Link>
                     <Link to={'/register'}>SignUp</Link>
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div id='home-container' className='first-container'>
            <div className="content-home">
               {/* <p>Small App, Big Dreams: <br /> Elevating Your Education</p> */}
               {/* <Link to={'/register'}><Button variant='warning' className='m-2' size='md'>Explore Courses</Button></Link> */}
            </div>
         </div>

         <Container className="second-container">
            <h2 className="text-center my-4">All Quizes</h2>
            <AllQuizes />
         </Container>
      </>
   )
}

export default Home;