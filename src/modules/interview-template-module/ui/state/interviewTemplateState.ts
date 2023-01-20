import { action, observable } from 'mobx';
import { InterviewTemplateItem } from '../../application/models/InterviewTemplateItem';

type InterviewTemplateState = {
    templatesList: Array<InterviewTemplateItem>;
    isCreateMode: boolean;
};

export const interviewTemplateState = observable.object<InterviewTemplateState>({
    templatesList: [],
    isCreateMode: false,
});

export const setTemplates = action((templates: []) => {
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