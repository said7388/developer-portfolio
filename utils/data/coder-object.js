import { skillsData } from './skills';
import { softSkillsData } from './softSkills';

export const coderObject = {
  name: 'Mostafa Alazhariy',
  designation: 'Mobile App Developer',
  topSkills: skillsData.slice(0, 6),
  softSkills: softSkillsData.slice(0, 3),
  hireable: true
};
