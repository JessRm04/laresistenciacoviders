import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom';
import coronavirus from '../assets/images/coronavirus.png'
import '../components/NavbarLanding.css'

function NavbarLanding() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#"><img src={coronavirus} className="coronavirus" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"><h3 className='covimap'>COVIMAP</h3></Nav.Link>
            <NavDropdown title="Home" className='home' id='home'>
              <NavDropdown.Item href="#">Home One</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Two
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Home Three</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Four
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Five
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Dark One
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Dark Two
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Dark Three
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Dark Four
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Dark Five
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Onepage
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Home Onepage Dark
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Tracker
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" id='prevention'>Prevention</Nav.Link>
            <Nav.Link href="#" id='qurantine'>Qurantine</Nav.Link>
            <NavDropdown title="Pages" id="pages">
              <NavDropdown.Item href="#">Hand Wash</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Social Distance
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" id='about'>About</Nav.Link>
            <Nav.Link href="#" id='help'>Help</Nav.Link>
            <Button href="#" className='buttontracker'><h5>Tracker</h5></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;

