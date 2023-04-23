import { Question } from './Question';

export type StepCategory = {
    stepCategoryId: string;
    categoryName: string;
    position: number;
    questions: Question[];
}