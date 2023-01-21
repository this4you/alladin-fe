import { TemplateItemProps } from './types';
import { TemplateItemContainer } from './styles';

export const TemplateItem: React.FC<TemplateItemProps> = ({ interviewTemplateItem }) => {
    return (
        <TemplateItemContainer>
            {interviewTemplateItem.name}
        </TemplateItemContainer>
    );
}