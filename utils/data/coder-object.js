import { skillsData } from './skills';
import { softSkillsData } from './softSkills';

// Merged top skills: Most impressive technical + soft skills for clients/HR
const mergedTopSkills = [
  // Core Technical Skills
  'Flutter',
  'Dart',
  'BloC Pattern',
  'Firebase',
  'Native Integration',
  'DevOps & CI/CD',
  'Clean Architecture',
  'Performance Optimization',
  // Impressive Soft Skills
  'Problem-solving',
  'Leadership',
  'Agile Methodologies',
  'Critical thinking'
];

export const coderObject = {
  name: 'Mostafa Alazhariy',
  designation: 'Mobile App Developer',
  topSkills: mergedTopSkills,
  hireable: true
};
