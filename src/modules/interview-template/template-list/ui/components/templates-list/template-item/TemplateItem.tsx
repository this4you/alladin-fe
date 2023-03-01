import { TemplateItemProps } from './types';
import { ActiveMarker, TemplateItemContainer, TemplateLink } from './styles';
import { toSnakeCase } from 'commons/utils/cases';

export const TemplateItem: React.FC<TemplateItemProps> = ({ interviewTemplateItem, setActiveTemplateItem }) => {
    const { name } = interviewTemplateItem;

    return (
        <TemplateItemContainer>
            <TemplateLink
                onClick={() => {
                    setActiveTemplateItem(toSnakeCase(name));
                }}
                relative={'route'}
                replace={true} to={`${toSnakeCase(name)}`}
            >
                {name}
                <ActiveMarker/>
            </TemplateLink>
        </TemplateItemContainer>
    );
}