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

    addQuestion(stepCategoryId: string, question: Question): void {
        this.state.categories = this.state.categories.map(it => {
            if (it.stepCategoryId === stepCategoryId) {
                it.questions = [...it.questions, question];
            }

            return it;
        })
    }
    removeQuestion(id: string, stepCategoryId: string): void {
        this.state.categories = this.state.categories.map(it => {
            if (it.stepCategoryId === stepCategoryId) {
                it.questions = it.questions.filter(it => it.id !== id);
            }

            return it;
        })
    }

    updateQuestion(stepCategoryId: string, question: Question): void {
        this.state.categories = this.state.categories.map(it => {
            if (it.stepCategoryId === stepCategoryId) {
                it.questions = it.questions.map(it => {
                    if (it.id === question.id) {
                        return question;
                    }

                    return it;
                });
            }

            return it;
        })
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