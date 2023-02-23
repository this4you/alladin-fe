import { TemplateItemProps } from './types';
import { ActiveMarker, TemplateItemContainer, TemplateLink } from './styles';
import { toSnakeCase } from 'commons/utils/cases';

export const TemplateItem: React.FC<TemplateItemProps> = ({ interviewTemplateItem }) => {
    const { name } = interviewTemplateItem;

    return (
        <TemplateItemContainer>
            <TemplateLink
                relative={'route'}
                replace={true} to={`${toSnakeCase(name)}`}
            >
                {name}
                <ActiveMarker/>
            </TemplateLink>
        </TemplateItemContainer>
    );
}