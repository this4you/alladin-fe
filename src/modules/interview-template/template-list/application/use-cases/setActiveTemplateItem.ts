import { InterviewTemplateItem } from '../models/InterviewTemplateItem';

export const setActiveTemplateItem = (
    setTemplateItem: (item: InterviewTemplateItem) => void,
    getTemplates: () => InterviewTemplateItem[]
) => (templateId: string) => {
        const activeTemplateItem = getTemplates().find(it => it.id === templateId);

        setTemplateItem(activeTemplateItem!!);
};