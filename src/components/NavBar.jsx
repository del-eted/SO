import { Navbar, Container, Nav } from 'react-bootstrap'

function Menu () {
  return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Navigation</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/quiz">Quizzes</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Menu