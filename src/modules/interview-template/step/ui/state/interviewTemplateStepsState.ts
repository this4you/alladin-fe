import { LoadingState } from 'commons/state/LoadingState';
import { InterviewTemplateStep } from '../../application/models/InterviewTemplateStep';
import { action } from 'mobx';

type InterviewTemplateStepsState = {
    stepsList: Array<InterviewTemplateStep>;
    loadingState: LoadingState;
};

//state
export const interviewTemplateStepsState = {
    stepList: [ {
        id: '1',
        position: 1,
        name: 'HR'
    },
        {
            id: '2',
            position: 2,
            name: 'English'
        },
        {
            id: '3',
            position: 3,
            name: 'Technical'
        },
        {
            id: '4',
            position: 4,
            name: 'Project manager'
        },
        {
            id: '5',
            position: 5,
            name: 'Owner'
        },
        {
            id: '6',
            position: 6,
            name: 'Salary discussion session'
        },
        {
            id: '7',
            position: 7,
            name: 'On boarding'
        },
        {
            id: '7',
            position: 7,
            name: 'On boarding'
        },
        {
            id: '7',
            position: 7,
            name: 'On boarding'
        },
        {
            id: '7',
            position: 7,
            name: 'On boarding'
        },{
            id: '7',
            position: 7,
            name: 'On boarding'
        },
        {
            id: '7',
            position: 7,
            name: 'On boarding'
        },
        {
            id: '7',
            position: 7,
            name: 'On boarding'
        },
        {
            id: '7',
            position: 7,
            name: 'On boarding'
        },


    ],
    loadingState: LoadingState.NotStarted,
};

//computed

//actions
export const setIsProcess = action(() => interviewTemplateStepsState.loadingState = LoadingState.InProcess);
export const setFinished = action(() => interviewTemplateStepsState.loadingState = LoadingState.Finished);

