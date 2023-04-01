import { makeAutoObservable } from 'mobx';
import { MobXStepCategoryState } from '../state/MobXStepCategoryState';
import { StepCategory } from '../../application/models/StepCategory';
import { StepCategoryView } from '../../application/ports/StepCategoryView';

export class MobXStepCategoryView implements StepCategoryView {
    constructor(
        private state: MobXStepCategoryState
    ) {
        makeAutoObservable(this)
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

    getCategories(): StepCategory[] {
        return this.state.categories;
    }

}