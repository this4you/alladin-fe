import {ConfigContainer, TemplatesListContainer } from './styles';
import { TemplatesListProps } from './types';
import { TemplateItems } from './template-items';
import { AddNameButton } from '../add-name-button';

export const TemplatesList: React.FC<TemplatesListProps> = ({ createTemplate }) => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <ConfigContainer>
                <AddNameButton
                    style={{ width: '220px' }}
                    onCreate={createTemplate}
                    label={'Add template'}
                    inputPlaceholder={'What is template name?'}
                />
            </ConfigContainer>
            <TemplateItems/>
        </TemplatesListContainer>
    );
}