import { TemplateItemProps } from './types';
import { ActiveMarker, TemplateItemContainer, TemplateLink } from './styles';

export const TemplateItem: React.FC<TemplateItemProps> = ({ interviewTemplateItem }) => {
    const { name, id } = interviewTemplateItem;

    return (
        <TemplateItemContainer>
            <TemplateLink
                relative={'route'}
                replace={true} to={`${id}`}
            >
                {name}
                <ActiveMarker/>
            </TemplateLink>
        </TemplateItemContainer>
    );
}