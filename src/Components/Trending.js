import { Card, Row, Col, Image, Container } from "react-bootstrap";
import bezitaImage from "../Assets/Images/trending/bezita.jpeg";
import gokuImage from "../Assets/Images/trending/goku.jpg";
import narutoImage from "../Assets/Images/trending/naruto.jpg";
import dragonballzImage from "../Assets/Images/trending/dragonballz.jpg";
import shinchanImage from "../Assets/Images/trending/shincan.jpeg";
import shounenImage from "../Assets/Images/trending/shounen.jpeg"


const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="title">Trending TopMovies</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="bg-dark text-center">
              <Image src={bezitaImage} alt="bezitaImage" className="movieImage"/>
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
          <Col md={4} className="movieImage">
          <Card className="bg-dark text-center">
              <Image src={gokuImage} alt="gokuImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Goku</Card.Title>
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
              <Image src={narutoImage} alt="narutoImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">naruto</Card.Title>
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
              <Image src={dragonballzImage} alt="dragonballzImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">dragonballz</Card.Title>
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
              <Image src={shinchanImage} alt="shinchanImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Shinchan</Card.Title>
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
              <Image src={shounenImage} alt="shounenImage" className="movieImage"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">shounen</Card.Title>
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

export default Trending;
