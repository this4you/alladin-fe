import { action, computed, observable } from 'mobx';
import { InterviewTemplateItem } from '../../application/models/InterviewTemplateItem';
import { LoadingState } from '../../../../commons/state/LoadingState';

type InterviewTemplateListState = {
    templatesList: Array<InterviewTemplateItem>;
    loadingState: LoadingState;
};

//state
export const interviewTemplateListState = observable.object<InterviewTemplateListState>({
    templatesList: [],
    loadingState: LoadingState.NotStarted,
});

//computed
export const displayNoItemsBlock = computed(() => {
    return interviewTemplateListState.templatesList.length === 0
})

//actions
export const setTemplates = action((templates: Array<InterviewTemplateItem>) => {
    interviewTemplateListState.templatesList = templates;
});

export const getLoadedTemplates = action(() => {
    return interviewTemplateListState.templatesList;
})

export const addNewTemplate = action((template: InterviewTemplateItem) => {
    interviewTemplateListState.templatesList = [...interviewTemplateListState.templatesList, template];
});

export const removeTemplate = action((id: string) => {
    interviewTemplateListState.templatesList = [
        ...interviewTemplateListState.templatesList.filter(i => i.id !== id)
    ]
});

export const updateTemplate = action((templateItem: InterviewTemplateItem) => {
    interviewTemplateListState.templatesList = interviewTemplateListState.templatesList.map((it) =>
        it.id === templateItem.id ? templateItem : it
    )

});

export const setIsProcess = action(() => interviewTemplateListState.loadingState = LoadingState.InProcess);
export const setFinished = action(() => interviewTemplateListState.loadingState = LoadingState.Finished);