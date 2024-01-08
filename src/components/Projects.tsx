import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projects as initialProjects } from "../assets/projects.json";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagFilter = (tag: string | null) => {
    if (tag) {
      const filteredProjects = initialProjects.filter((project) =>
        project.tags.includes(tag)
      );
      setProjects(filteredProjects);
    } else {
      setProjects(initialProjects);
    }
    setSelectedTag(tag);
  };

  return (
    <section id="projects" className="py-5 mx-5 justify-content-center">
      <div className="d-flex text-center mb-4">
        <h2>here's a few project that I've done</h2>
        <DropdownButton title={selectedTag || "All"} variant="outline-primary">
          <Dropdown.Item onClick={() => handleTagFilter(null)}>
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleTagFilter("data")}>
            Data
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleTagFilter("machine-learning")}>
            Machine Learning
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleTagFilter("web-development")}>
            Web Development
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="d-flex flex-wrap justify-content-space-between">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
