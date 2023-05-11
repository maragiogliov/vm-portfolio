import React, { useState } from 'react';
import './Projects.css';
import imageSrc from '../../assets/Frame 32.jpg';
import cvDesign from '../../assets/xvcwebsite.png'
import mothercode from '../../assets/mothercode.png'


const projects = [
  {
    name: 'LENGUAPP',
    description: 'I conducted a comprehensive UX research study for a language learning app. The study encompassed competitive analysis, user interviews, development of personas and user flow, wireframing, prototyping, and usability tests to validate the design and ensure optimal user experience.',
    image: imageSrc,
    technologies: [ 'UX Research'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/vmaragioglio'
      }
    ]
  },
  {
    name: 'CV DESSERTS',
    description: 'I designed a homemade dessert website for a Florida client, emphasizing visual appeal and ease of use. The site showcases appetizing dessert photos, a simple ordering system, and transparent company values. Its a delight for the eyes and taste buds!',
    image: cvDesign,
    technologies: [ 'Shopify', 'UI'],
    buttons: [
  
      {
        text: 'Behance',
        url: 'https://www.behance.net/gallery/139554081/Web-Design-for-CV-Desserts'
      }
    ]
  },
  {
    name: 'MOTHERCODE',
    description: 'Our Educational Management Application aids DCI Berlin School students in code visualization, learning tracking, and exercise management. Developed by a four-member team, it simplifies learning and empowers students to achieve educational goals effortlessly.',
    image: mothercode,
    technologies: [ 'React','Express', 'Full Stack'],
    buttons: [
      {
        text: 'Youtube',
        url: 'https://www.youtube.com/watch?v=PtlyAgL-d38&t=7s'
      },
      {
        text: 'GitHub',
        url: 'https://github.com/maragiogliov/mothercode-front-end'
      }
    ]
  }
];

export default function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const handleChipClick = (technology) => {
    setSelectedTechnology(technology);
  };

  const filteredProjects = selectedTechnology === 'All'
    ? projects
    : selectedTechnology
    ? projects.filter((project) =>
        project.technologies.includes(selectedTechnology)
      )
    : projects;

  const allTechnologies = projects.reduce(
    (acc, project) => [...acc, ...project.technologies],
    []
  );
  const uniqueTechnologies = ['All', ...Array.from(new Set(allTechnologies))];

  return (
    <div className='project-container'>

        <h4 className='projects-collaborations'>Collaborations</h4>
        <h1 className='projects-recent'>Recent Projects</h1>
        <div className='chips-container'>
          {uniqueTechnologies.map((technology, index) => (
            <div
              key={index}
              className={`chip ${
                technology === selectedTechnology ? 'active' : ''
              }`}
              onClick={() => handleChipClick(technology)}
            >
              {technology}
            </div>
          ))}
        </div>
      <div className='cards-container'>
        {filteredProjects.map((project, index) => (
          <div className='card' key={index}>
            <img src={project.image} alt={project.name} />
            <h2 className='projects-title '>{project.name}</h2>
            <div className='project-description-container'> 
              <p>{project.description}</p>
            </div>
            <div className='chips-container'>
              {project.technologies.map((technology, index) => (
                <div key={index} className='chip'>
                  {technology}
                </div>
              ))}
            </div>
            <div className='button-container'>
              {project.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.url}
                  className='button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
