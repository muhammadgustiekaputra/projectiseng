import { Card, Row, Col, Image, Container } from "react-bootstrap";
import conanImage from "../Assets/Images/superhero/conan.jpg";
import doraemonImage from "../Assets/Images/superhero/doraemon.jpg";
import goImage from "../Assets/Images/superhero/go.jpg";
import ninjaImage from "../Assets/Images/superhero/ninja.jpg";
import tsubasaImage from "../Assets/Images/superhero/tsubasa.jpg";
import hanamichiImage from "../Assets/Images/superhero/hanamichi.jpeg"


const Superhero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="title">Superhero TopMovies</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="bg-dark text-center">
              <Image src={conanImage} alt="conanImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Conan Edogawa</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieImage">
          <Card className="bg-dark text-center">
              <Image src={doraemonImage} alt="doraemon" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">doraemon</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieImage">
          <Card className="bg-dark text-center">
              <Image src={goImage} alt="goImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Go</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center">
              <Image src={ninjaImage} alt="ninjaimage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ninja</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center">
              <Image src={tsubasaImage} alt="tsubasaImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">tsubasa</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-center">
              <Image src={hanamichiImage} alt="hanamichiImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Bezita</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
