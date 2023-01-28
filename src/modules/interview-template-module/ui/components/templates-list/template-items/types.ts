import { setActiveTemplateItem } from 'modules/interview-template-module/application/use-cases/template-list/setActiveTemplateItem';
import { initTemplatesList } from 'modules/interview-template-module/application/use-cases/template-list/initTemplatesList';

export type TemplateItemsProps = {
    initTemplatesList: ReturnType<typeof initTemplatesList>;
    setActiveTemplateItem: ReturnType<typeof setActiveTemplateItem>;
}