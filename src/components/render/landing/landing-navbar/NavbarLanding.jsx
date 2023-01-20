import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import coronavirus from '../../../../assets/images/coronavirus.png';
import '../../landing/landing-navbar/NavbarLanding.css';


function NavbarLanding() {
  return (
    <Navbar className='bg-transparent fixed-top'>
      <Container>
        <Link exact to="/home"><Navbar.Brand><img src={coronavirus} className="coronavirus" alt='coronavirus' /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link exact to= "/home"><Nav.Link><h3 className='covimap'>COVIMAP</h3></Nav.Link></Link>
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
              <Link exact to="/tracker"><NavDropdown.Item>
                Tracker
              </NavDropdown.Item></Link>
            </NavDropdown>
            <Link exact to="/prevention" id='prevention'>Prevention</Link>
            <Link exact to="/qurantine" id='qurantine'>Qurantine</Link>
            <NavDropdown title="Pages" id="pages">
              <Link exact to="/hand-wash"><NavDropdown.Item>Hand Wash</NavDropdown.Item></Link>
              <Link exact to="/social-distance"><NavDropdown.Item>
                Social Distance
              </NavDropdown.Item></Link>
              <Link exact to="/blog"><NavDropdown.Item href="/blog">Blog</NavDropdown.Item></Link>
              <Link exact to="/blog-details"><NavDropdown.Item href="/blog-details">
                Blog Details
              </NavDropdown.Item></Link>
            </NavDropdown>
            <Link exact to="/about" id='about'>About</Link>
            <Link exact to="/help" id='help'>Help</Link>
           <Link exact to="/tracker"><Button className='buttontracker'><h5>Tracker</h5></Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;

