import { setActiveTemplateItem } from 'modules/interview-template/template/application/use-cases/setActiveTemplateItem';
import { initTemplatesList } from 'modules/interview-template/template/application/use-cases/initTemplatesList';
import { MobXInterviewTemplateState } from '../../../state/MobXInterviewTemplateState';

export type TemplateItemsProps = {
    initTemplatesList: ReturnType<typeof initTemplatesList>;
    setActiveTemplateItem: ReturnType<typeof setActiveTemplateItem>;
    state: MobXInterviewTemplateState;
}