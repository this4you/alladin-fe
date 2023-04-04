import { makeAutoObservable } from 'mobx';
import { MobXStepCategoryState } from '../state/MobXStepCategoryState';
import { StepCategory } from '../../application/models/StepCategory';
import { StepCategoryView } from '../../application/ports/StepCategoryView';
import { Question } from '../../application/models/Question';

export class MobXStepCategoryView implements StepCategoryView {
    constructor(
        private state: MobXStepCategoryState
    ) {
        makeAutoObservable(this)
    }

    addQuestion(question: Question): void {
        throw new Error('Method not implemented.');
    }
    removeQuestion(id: string): void {
        throw new Error('Method not implemented.');
    }

    setCategories(categories: StepCategory[]): void {
        this.state.categories = categories;
    }

    setLoading(value: boolean): void {
        this.state.loading = value;
    }

    addCategory(stepCategory: StepCategory): void {
        this.state.categories = [...this.state.categories, stepCategory];
    }

    removeCategory(id: string): void {
        this.state.categories = this.state.categories.filter(
            it => it.stepCategoryId !== id
        )
    }

    getCategories(): StepCategory[] {
        return this.state.categories;
    }

}