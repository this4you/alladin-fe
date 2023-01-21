import { action, computed, observable } from 'mobx';
import { InterviewTemplateItem } from '../../application/models/InterviewTemplateItem';

type InterviewTemplateState = {
    templatesList: Array<InterviewTemplateItem>;
    isCreateMode: boolean;
};

//state
export const interviewTemplateState = observable.object<InterviewTemplateState>({
    templatesList: [],
    isCreateMode: false,
});

//computed
export const displayNoItemsBlock = computed(() => {
    return interviewTemplateState.templatesList.length == 0
})

//actions
export const setTemplates = action((templates: Array<InterviewTemplateItem>) => {
    interviewTemplateState.templatesList = templates;
    setCreateMode(false);
});

export const addNewTemplate = action((template: InterviewTemplateItem) => {
    interviewTemplateState.templatesList = [...interviewTemplateState.templatesList, template];
    setCreateMode(false);
});

export const setCreateMode = action((isCreateMode = true) => {
    interviewTemplateState.isCreateMode = isCreateMode;
});