import { action, computed, observable } from 'mobx';
import { InterviewTemplateItem } from '../../application/models/InterviewTemplateItem';
import { LoadingState } from '../../../../commons/state/LoadingState';

type InterviewTemplateListState = {
    templatesList: Array<InterviewTemplateItem>;
    isCreateMode: boolean;
    loadingState: LoadingState;
};

//state
export const interviewTemplateListState = observable.object<InterviewTemplateListState>({
    templatesList: [],
    isCreateMode: false,
    loadingState: LoadingState.NotStarted,
});

//computed
export const displayNoItemsBlock = computed(() => {
    return interviewTemplateListState.templatesList.length === 0
})

//actions
export const setTemplates = action((templates: Array<InterviewTemplateItem>) => {
    interviewTemplateListState.templatesList = templates;
    setCreateMode(false);
});

export const getLoadedTemplates = action(() => {
    return interviewTemplateListState.templatesList;
})

export const addNewTemplate = action((template: InterviewTemplateItem) => {
    interviewTemplateListState.templatesList = [...interviewTemplateListState.templatesList, template];
    setCreateMode(false);
});

export const setCreateMode = action((isCreateMode = true) => {
    interviewTemplateListState.isCreateMode = isCreateMode;
});

export const setIsProcess = action(() => interviewTemplateListState.loadingState = LoadingState.InProcess);
export const setFinished = action(() => interviewTemplateListState.loadingState = LoadingState.Finished);