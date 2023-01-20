import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import coronavirus from '../../../../assets/images/coronavirus.png';
import '../../landing/landing-navbar/NavbarLanding.css';


function NavbarLanding() {
  return (
    <>
    <Navbar variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={coronavirus} className="coronavirus" alt='coronavirus' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><h3 className='covimap'>COVIMAP</h3></Nav.Link>
            <NavDropdown title="Home" className='home' id='home'>
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
            <Nav.Link as={Link} to="prevention" id='preventions'>Prevention</Nav.Link>
            <Nav.Link as={Link} to="qurantine" id='qurantines'>Qurantine</Nav.Link>
            <NavDropdown title="Pages" id="pages">
              <NavDropdown.Item as={Link} to="hand-wash">Hand Wash</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="social-distance">Social Distance</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog-details">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="about" id='abouts'>About</Nav.Link>
            <Nav.Link as={Link} to="help" id='helps'>Help</Nav.Link>
           <Nav.Link as={Link} to="Trackerdos"><Button className='buttontracker'><h5>Tracker</h5></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  );
}

export default NavbarLanding;

