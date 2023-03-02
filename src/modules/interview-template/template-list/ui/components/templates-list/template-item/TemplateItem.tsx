import { TemplateItemProps } from './types';
import { ActiveMarker, TemplateItemContainer, TemplateLink } from './styles';
import { toSnakeCase } from 'commons/utils/cases';
import { interviewTemplateState } from '../../../state/interviewTemplateState';

export const TemplateItem: React.FC<TemplateItemProps> = ({ interviewTemplateItem, setActiveTemplateItem }) => {
    const { name } = interviewTemplateItem;

    return (
        <TemplateItemContainer>
            <TemplateLink
                onClick={(e) => {
                    if (interviewTemplateItem.id == interviewTemplateState.templateItem?.id) {
                        e.preventDefault();

                        return;
                    }

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