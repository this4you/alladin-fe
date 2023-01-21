import { NoTemplates, TemplateItemsContainer } from './styles';
import { displayNoItemsBlock, interviewTemplateState } from '../../../state/interviewTemplateState';
import { TemplateItemsProps } from './types';
import { useEffect } from 'react';
import { TemplateItem } from '../template-item/TemplateItem';

export const TemplateItems: React.FC<TemplateItemsProps> = ({ initTemplatesList }) => {

    useEffect(() => {
        initTemplatesList();
    }, [initTemplatesList]);

    return (
        <TemplateItemsContainer>
            {
                displayNoItemsBlock.get() && (
                    <NoTemplates>
                        Add new template
                    </NoTemplates>
                )
            }
            {
                interviewTemplateState.templatesList.map((item) =>
                    <TemplateItem key={item.id} interviewTemplateItem={item}/>
                )
            }
        </TemplateItemsContainer>
    );
};
