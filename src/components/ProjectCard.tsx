import React, { useState } from "react";
import { Modal, Card, Badge } from "react-bootstrap";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLink = () => {
    window.open(project.link, "_blank");
  };

  return (
    <>
      <Card className="m-2" style={{ width: "18rem" }} onClick={showModal}>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          {project.tags.map((tag, index) => (
            <Badge className="mx-2" key={index}>
              {tag}
            </Badge>
          ))}
        </Card.Body>
      </Card>
      <Modal
        show={isModalVisible}
        onHide={handleCancel}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{project.description}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleLink}>
            See More
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
