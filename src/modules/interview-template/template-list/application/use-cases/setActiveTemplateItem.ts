import { InterviewTemplateItem } from '../models/InterviewTemplateItem';
import { toSnakeCase } from 'commons/utils/cases';

export const setActiveTemplateItem = (
    setTemplateItem: (item: InterviewTemplateItem) => void,
    getTemplates: () => InterviewTemplateItem[]
) => (templateId: string) => {
        const activeTemplateItem = getTemplates().find(it => toSnakeCase(it.name) === templateId);

        setTemplateItem(activeTemplateItem!!);
};