import {ConfigContainer, TemplatesListContainer } from './styles';
import { TemplatesListProps } from './types';
import { TemplateItems } from './template-items';
import { AddFieldButton } from '../../../../../../commons/components/add-field-button';

export const TemplatesList: React.FC<TemplatesListProps> = ({ createTemplate }) => {
    return (
        <TemplatesListContainer header={'Templates'}>
            <ConfigContainer>
                <AddFieldButton
                    style={{ width: '220px' }}
                    onCreate={createTemplate}
                    label={'Add template-list'}
                    inputPlaceholder={'What is template-list name?'}
                />
            </ConfigContainer>
            <TemplateItems/>
        </TemplatesListContainer>
    );
}