import { action, makeAutoObservable, observable } from 'mobx';
import { QuestionCategory } from '../../application/models/QuestionCategory';

export class MobXQuestionCategoryState {
    constructor() {
        makeAutoObservable(this)
    }

    @observable
    categories: QuestionCategory[] = []

    @observable
    loading = false

    @observable
    isModalOpen = false;
}
