import {
  faAws,
  faCss3,
  faDocker,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';
import {
  faBolt,
  faBoxesStacked,
  faCloud,
  faCode,
  faComments,
  faDatabase,
  faDiagramProject,
  faFlask,
  faGaugeHigh,
  faGem,
  faLayerGroup,
  faLink,
  faMobile,
  faPalette,
  faRobot,
  faRocket,
  faServer,
  faShuffle,
  faTools,
  faWind
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: faCode,
    groups: [
      {
        label: 'Languages',
        skills: [
          { icon: faJsSquare, color: '#EFD81D', label: 'JavaScript (ES6+)' },
          { icon: faCode, color: '#3178C6', label: 'TypeScript' },
          { icon: faHtml5, color: '#F06529', label: 'HTML5' },
          { icon: faCss3, color: '#28A4D9', label: 'CSS3/SCSS' }
        ]
      },
      {
        label: 'Frameworks',
        skills: [
          { icon: faReact, color: '#5ED4F4', label: 'React.js' },
          { icon: faRocket, color: '#EDEDED', label: 'Next.js' },
          { icon: faVuejs, color: '#4FC08D', label: 'Vue.js' }
        ]
      },
      {
        label: 'State Management',
        skills: [
          { icon: faShuffle, color: '#764ABC', label: 'Redux Toolkit' },
          { icon: faDiagramProject, color: '#61DAFB', label: 'Context API' }
        ]
      },
      {
        label: 'Styling',
        skills: [
          { icon: faPalette, color: '#DB7093', label: 'Styled Components' },
          { icon: faWind, color: '#38BDF8', label: 'Tailwind CSS' },
          { icon: faMobile, color: '#FFD700', label: 'Mobile-First' }
        ]
      },
      {
        label: 'Performance',
        skills: [
          { icon: faGaugeHigh, color: '#4CAF50', label: 'Core Web Vitals' },
          { icon: faBolt, color: '#646CFF', label: 'Vite' },
          { icon: faBoxesStacked, color: '#8DD6F9', label: 'Webpack' }
        ]
      }
    ]
  },
  {
    title: 'Backend & DevOps',
    icon: faServer,
    skills: [
      { icon: faGem, color: '#CC342D', label: 'Ruby on Rails' },
      { icon: faPython, color: '#3776AB', label: 'Python & FastAPI' },
      { icon: faDatabase, color: '#47A248', label: 'MongoDB' },
      { icon: faAws, color: '#FF9900', label: 'AWS' },
      { icon: faLayerGroup, color: '#7B42BC', label: 'Terraform' },
      { icon: faCloud, color: '#0078D4', label: 'Bicep (Azure)' },
      { icon: faGithub, color: '#6E5494', label: 'GitHub Actions' },
      { icon: faDocker, color: '#2496ED', label: 'Docker' }
    ]
  },
  {
    title: 'CMS & Tools',
    icon: faTools,
    skills: [
      { icon: faDatabase, color: '#FF269E', label: 'Statamic CMS' },
      { icon: faGitAlt, color: '#EC4D28', label: 'Git/GitHub' },
      { icon: faFigma, color: '#F24E1E', label: 'Figma' },
      { icon: faFlask, color: '#3F98EF', label: 'Launchdarkly' },
      { icon: faRocket, color: '#00D4AA', label: 'Commerce Layer' }
    ]
  },
  {
    title: 'AI & LLM Tooling',
    icon: faRobot,
    skills: [
      { icon: faLink, color: '#1C3C3C', label: 'LangChain' },
      { icon: faComments, color: '#FFD700', label: 'Prompt Engineering' },
      { icon: faGaugeHigh, color: '#25C2A0', label: 'LangSmith' },
      { icon: faCloud, color: '#0078D4', label: 'Azure AI Foundry' }
    ]
  }
];

const SkillItem = ({ icon, color, label }) => (
  <div className='skill-item'>
    <FontAwesomeIcon icon={icon} color={color} />
    <span>{label}</span>
  </div>
);

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a front-end developer looking for a role in an established
            company with the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p align='LEFT'>
            I'm enthusiastic, curious, and reliable. My dedication allows me to
            keep working on developing my various skills related to web
            development.
          </p>
          <p>
            I would describe myself as an ultimate sports and music aficionado
            who is also obsessed with technology!!!
          </p>
        </div>

        <div className='skills-showcase'>
          {skillCategories.map(({ title, icon, groups, skills }) => (
            <div className='skills-category' key={title}>
              <h3>
                <FontAwesomeIcon icon={icon} />
                {title}
              </h3>
              {groups ? (
                groups.map(({ label, skills: groupSkills }) => (
                  <div className='skills-group' key={label}>
                    <h4>{label}</h4>
                    <div className='skills-grid'>
                      {groupSkills.map((skill) => (
                        <SkillItem key={skill.label} {...skill} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className='skills-grid'>
                  {skills.map((skill) => (
                    <SkillItem key={skill.label} {...skill} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default About;
