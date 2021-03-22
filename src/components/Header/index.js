import {
  Navbar, Nav, Form, InputGroup,
} from 'react-bootstrap';
import SquareLogo from '../Icons/SquareLogo';
import SearchIcon from '../Icons/SearchIcon';
import AddUserIcon from '../Icons/AddUserIcon';
import BellIcon from '../Icons/BellIcon';
import ChatIcon from '../Icons/ChatIcon';
import UserAvatar from '../Icons/UserAvatar';
import CaretIcon from '../Icons/CaretIcon';
import './styles.css';

const Header = () => (
  <Navbar expand="lg" className="header">
    <Navbar.Brand href="/"><SquareLogo /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mt-2 ml-5">
        <Form.Group controlId="validationFormikUsername2">
          <InputGroup>
            <Form.Control
              className="search"
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="username"
            />
            <InputGroup.Prepend>
              <InputGroup.Text className="search-icon" id="inputGroupPrepend"><SearchIcon /></InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form.Group>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link><AddUserIcon /></Nav.Link>
        <Nav.Link><ChatIcon /></Nav.Link>
        <Nav.Link><BellIcon /></Nav.Link>
        <Nav.Link><UserAvatar /></Nav.Link>
        <Nav.Link><CaretIcon /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
