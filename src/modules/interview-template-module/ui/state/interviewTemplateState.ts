import { action, observable } from 'mobx';
import { InterviewTemplateItem } from '../../application/models/InterviewTemplateItem';

export const interviewTemplateState = observable.object<{ templatesList: Array<InterviewTemplateItem> }>({
    templatesList: [],
});

export const setTemplates = action((templates: []) => {
    interviewTemplateState.templatesList = templates;
});

export const addNewTemplate = action((template: InterviewTemplateItem) => {
    interviewTemplateState.templatesList = [...interviewTemplateState.templatesList, template];
});