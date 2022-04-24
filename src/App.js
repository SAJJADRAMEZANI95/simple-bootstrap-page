import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav,NavDropdown, Row, Col, Image, Button, Card} from 'react-bootstrap';
import w1 from '../src/w1.jpg';
import w2 from '../src/w2.jpg';
import w3 from '../src/w3.jpg';
import w4 from '../src/w4.jpg';


function App() {
return(
  <div className='App'>
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
    <main>
      <Container>
        <Row className=" my-5">
          <Col sm={7}>
            <Image fluid rounded src={w1} alt='wallpaper1'/>
          </Col>
          <Col sm={5}>
            <h1>hello</h1>
            <p className='my-2'>Windows is a popular Operating system owned and launched by Microsoft in the year 1985. There has been a lot of improvisation done on Windows as an Operating system and finally, its popularity can be ascertained from the fact that most of the computers for personal use have Windows as the Operating system.

This Operating system provides a smooth and compatible environment for running a variety of applications and software. It also has robust flexibility and high hardware versatility. The latest version of Windows is Windows 10 however, Windows 7 and Windows Pro have been the most successful versions.

There are a lot of advantages and disadvantages of the Windows Operating system as listed below.</p>
<Button variant="outline-dark" className='my-2'>call to action</Button>
          </Col>
        </Row>
        <Row>
          <Card className='text-center bg-dark text-white my-5 py-4'>
            <Card.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={w2} />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
           </Col>
           <Col>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={w2} />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
           </Col>
           <Col>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={w2} />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
           </Col>
        </Row>
      </Container>
    </main>
    <footer  className='py-4 my-5 bg-dark text-center text-white rounded'>
      this is footer
    </footer>
    

  </div>
)
}

export default App;
