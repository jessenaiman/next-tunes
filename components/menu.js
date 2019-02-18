import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Menu = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Tickles and Tunes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/music">Music</Nav.Link>
        <Nav.Link href="/videos">Videos</Nav.Link>
        <Nav.Link href="/videos">ArtShow</Nav.Link>
        <Nav.Link href="/videos">Marketing</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu
