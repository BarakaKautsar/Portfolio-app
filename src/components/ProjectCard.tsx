import React, { useState } from "react";
import { Modal, Card, Badge } from "react-bootstrap";

interface Project {
  title: string;
  description: string;
  tags: string[];
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
      <Modal show={isModalVisible} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{project.description}</Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
