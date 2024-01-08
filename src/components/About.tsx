import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import myPic from "../assets/mypic.jpg";
import Image from "react-bootstrap/Image";

function About() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1duvShvHlHIa_fHHG9P4yT8Qjx0U-J263/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Hey There! I'm Raka</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src={myPic}
              alt="Baraka Kautsar Sofiuddin"
              className="roundedCircle"
              style={{ maxWidth: "50%", height: "auto", borderRadius: "10%" }}
            />
          </Col>
          <Col md={6} className="text-start align-items-center">
            <p>
              I'm a senior year undergraduate student studying Information
              System and Technology at Bandung Institute of Technology (ITB).
              I'm an aspiring Data Scientist and have previously worked as a
              Data Analyst Intern at PT. BNI Life Insurance. I've also worked on
              a lot of different projects involving data analysis, machine
              learning, web development, and more!.
            </p>

            <p>
              I'm based in both Jakarta and Bandung here in Indonesia but I am
              very much open for opportunities worldwide to learn and grow!. I
              am naturally a very curious person and I think that is what drove
              my passionate regarding data and technology. Aside from that, I
              also enjoy travelling, swimming, diving, and exploring museums,
              among other things.
            </p>

            <Button variant="primary" onClick={handleDownload}>
              Take a look at my CV!
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
