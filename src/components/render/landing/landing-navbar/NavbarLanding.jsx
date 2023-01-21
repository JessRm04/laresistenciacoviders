import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import coronavirus from '../../../../assets/images/coronavirus.png';
import '../../landing/landing-navbar/NavbarLanding.css';


function NavbarLanding() {

  const [navBar, setNavBar] = useState(false);
  const [navText, setNavText] = useState(false);
  
  useEffect(() => {
    changeBackgroud();
    window.addEventListener("scroll", changeBackgroud)
  });

  const changeBackgroud = () =>{
    if (window.scrollY >= 800){
      setNavBar(true)
      setNavText(true)
    } else {
      setNavBar(false)
      setNavText(false)
  }};

  const location = useLocation();

    if (location.pathname === '/'){
      return(
        
        <Navbar variant="light" expand="lg" fixed="top" className={`nav-Bar ${navBar ? 'nav-Bar-Scroll' : ''}`} >
        <Container className='containerNav'>
          <Navbar.Brand as={Link} to="/"><img src={coronavirus} className="coronavirus" alt='coronavirus' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><h3 className={`covimap navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>COVIMAP</h3></Nav.Link>
              <NavDropdown title="Home" id='home' className={`home navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>
                <NavDropdown.Item href="/#">Home One</NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Two
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">Home Three</NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Four
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Five
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Dark One
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Dark Two
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Dark Three
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Dark Four
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Dark Five
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Onepage
                </NavDropdown.Item>
                <NavDropdown.Item href="/#">
                  Home Onepage Dark
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="Trackerdos">
                  Tracker
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="prevention" id='preventions' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>Prevention</Nav.Link>
              <Nav.Link as={Link} to="qurantine" id='qurantines' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>Qurantine</Nav.Link>
              <NavDropdown title="Pages" id="pages" className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>
                <NavDropdown.Item as={Link} to="hand-wash">Hand Wash</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="social-distance">Social Distance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog-details">
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="about" id='abouts' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>About</Nav.Link>
              <Nav.Link as={Link} to="help" id='helps' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>Help</Nav.Link>
            <Nav.Link as={Link} to="Trackerdos"><Button className='buttontracker'><h5>Tracker</h5></Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>     
      )
    } else {
      return null
  }
};
export default NavbarLanding;

/*function NavbarLanding() {

  const [navBar, setNavBar] = useState(false);
  const [navText, setNavText] = useState(false);
  
  useEffect(() => {
    changeBackgroud();
    window.addEventListener("scroll", changeBackgroud)
  });

  const changeBackgroud = () =>{
    if (window.scrollY >= 800){
      setNavBar(true)
      setNavText(true)
    } else {
      setNavBar(false)
      setNavText(false)
  }};

  function ubicationNavBar() {
    const location = useLocation();

    if (location.pathname === '/'){
      return(
        
      )
    }
  }

  return (
    <>
    <Navbar variant="light" expand="lg" fixed="top" className={`nav-Bar ${navBar ? 'nav-Bar-Scroll' : ''}`} >
      <Container className='containerNav'>
        <Navbar.Brand as={Link} to="/"><img src={coronavirus} className="coronavirus" alt='coronavirus' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><h3 className={`covimap navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>COVIMAP</h3></Nav.Link>
            <NavDropdown title="Home" id='home' className={`home navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>
              <NavDropdown.Item href="/#">Home One</NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Two
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">Home Three</NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Four
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Five
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Dark One
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Dark Two
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Dark Three
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Dark Four
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Dark Five
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Onepage
              </NavDropdown.Item>
              <NavDropdown.Item href="/#">
                Home Onepage Dark
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Trackerdos">
                Tracker
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="prevention" id='preventions' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>Prevention</Nav.Link>
            <Nav.Link as={Link} to="qurantine" id='qurantines' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>Qurantine</Nav.Link>
            <NavDropdown title="Pages" id="pages" className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>
              <NavDropdown.Item as={Link} to="hand-wash">Hand Wash</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="social-distance">Social Distance</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog-details">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="about" id='abouts' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>About</Nav.Link>
            <Nav.Link as={Link} to="help" id='helps' className={`navbar-text ${navText ? 'navbar-text-scrolled' : ''}`}>Help</Nav.Link>
           <Nav.Link as={Link} to="Trackerdos"><Button className='buttontracker'><h5>Tracker</h5></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarLanding;*/
