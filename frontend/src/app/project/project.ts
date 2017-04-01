import { IStory } from '../shared/story/story';

export interface IProject extends IStory {
  shortDescription: string;
  technologies: string[];
  languages: string[];
}
