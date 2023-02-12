import { setActiveTemplateItem } from 'modules/interview-template/template-list/application/use-cases/setActiveTemplateItem';
import { initTemplatesList } from 'modules/interview-template/template-list/application/use-cases/initTemplatesList';

export type TemplateItemsProps = {
    initTemplatesList: ReturnType<typeof initTemplatesList>;
    setActiveTemplateItem: ReturnType<typeof setActiveTemplateItem>;
}