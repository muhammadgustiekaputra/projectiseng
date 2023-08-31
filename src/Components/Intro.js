import { Container, Col, Row, Button } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="Intro">
          <Container className="text d-flex justify-content-center align-items-center">
            <Row>
              <Col>
              <div className="title">TopMovies</div>
              <div className mt-4="introButton">
                <Button variant="success" mt-4>Check it Out!!</Button>
              </div>

              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro