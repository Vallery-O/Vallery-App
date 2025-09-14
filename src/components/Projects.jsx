import React from "react";
import projectsData from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-white dark:bg-gray-900"
    >
      <h2 className="text-4xl font-heading mb-12 text-center text-gray-800 dark:text-gray-100 animate-slideIn">
        My Projects
      </h2>

      <div className="space-y-10 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slideIn"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover filter grayscale hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* Description + buttons */}
            <div className="p-6">
              <h3 className="font-heading text-2xl text-gray-800 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="font-body text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-pink-500 text-white font-body hover:bg-pink-600 transition rounded-lg"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 text-white font-body hover:bg-gray-800 transition rounded-lg"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
