import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const initialProjects = [
    {
      title: "Project 1",
      description: "This is project 1",
      tags: ["data", "machine-learning"],
    },
    { title: "Project 2", description: "This is project 2", tags: ["data"] },
    {
      title: "Project 3",
      description: "This is project 3",
      tags: ["web-development"],
    },
    { title: "Project 4", description: "This is project 4", tags: ["data"] },
    {
      title: "Project 5",
      description: "This is project 5",
      tags: ["web-development"],
    },
  ];

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
      <h2 className="text-center mb-4">Projects</h2>
      <div className="text-center mb-4">
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
          {/* Add more Dropdown.Item for other tags */}
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
