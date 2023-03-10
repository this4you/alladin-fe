import { makeAutoObservable } from 'mobx';
import { InterviewTemplateItem } from '../../application/models/InterviewTemplateItem';
import { LoadingState } from 'commons/state/LoadingState';

export class MobXInterviewTemplateState {
    constructor() {
        makeAutoObservable(this);
    }

    templateList: Array<InterviewTemplateItem> = [];

    loadingState: LoadingState = LoadingState.NotStarted;

    templateItem: InterviewTemplateItem | null = null;

    get displayNoItemsBlock() {
        return this.templateList.length === 0
    }

    setTemplates(templates: Array<InterviewTemplateItem>) {
        this.templateList = templates;
    }

    getLoadedTemplates() {
        return this.templateList;
    }

    addNewTemplate(template: InterviewTemplateItem) {
        this.templateList = [...this.templateList, template];
    }

    removeTemplate(id: string) {
        this.templateList = [
            ...this.templateList.filter(i => i.id !== id)
        ];
    }

    updateTemplate(templateItem: InterviewTemplateItem) {
        this.templateList = this.templateList.map((it) =>
            it.id === templateItem.id ? templateItem : it
        );

        this.templateItem = templateItem;
    }

    setTemplateItem(item: InterviewTemplateItem) {
        this.templateItem = item;
    }

    clearTemplateItem() {
        this.templateItem = null;
    }

    setIsProcess() {
        this.loadingState = LoadingState.InProcess;
    }

    setFinished() {
        this.loadingState = LoadingState.Finished;
    }
}