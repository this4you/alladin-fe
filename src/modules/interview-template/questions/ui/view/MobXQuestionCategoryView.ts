import { QuestionCategoryView } from '../../application/ports/QuestionCategoryView';
import { MobXQuestionCategoryState } from '../state/MobXQuestionCategoryState';
import { action, makeAutoObservable } from 'mobx';
import { QuestionCategory } from '../../application/models/QuestionCategory';

export class MobXQuestionCategoryView implements QuestionCategoryView {
    constructor(
        private state: MobXQuestionCategoryState
    ) {
        makeAutoObservable(this)
    }

    @action
    setCategories(categories: QuestionCategory[]): void {
        this.state.categories = categories;
    }

    setLoading(value: boolean): void {
        this.state.loading = value;
    }
}