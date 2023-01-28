import { action, observable } from 'mobx';
import { InterviewTemplateItem } from '../../application/models/InterviewTemplateItem';

type InterviewTemplateState = {
    templateItem: InterviewTemplateItem | null
};

//state
export const interviewTemplateState = observable.object<InterviewTemplateState>({
    templateItem: null
});

//computed

//actions
export const setTemplateItem = action((item: InterviewTemplateItem) => {
    interviewTemplateState.templateItem = item;
});

export const clearTemplateItem = action(() => {
    interviewTemplateState.templateItem = null;
});