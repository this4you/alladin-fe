import { makeAutoObservable, observable } from 'mobx';
import { StepCategory } from '../../application/models/StepCategory';

export class MobXStepCategoryState {
    constructor() {
        makeAutoObservable(this)
    }

    @observable
    categories: StepCategory[] = []

    @observable
    loading = false
}
