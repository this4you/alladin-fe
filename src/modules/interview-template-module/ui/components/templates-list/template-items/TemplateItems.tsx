import { NoTemplates } from './styles';
import { displayNoItemsBlock, interviewTemplateState } from '../../../state/interviewTemplateState';
import { TemplateItemsProps } from './types';
import { useEffect } from 'react';

export const TemplateItems: React.FC<TemplateItemsProps> = ({initTemplatesList}) => {

    useEffect(() => {
        initTemplatesList();
    }, [initTemplatesList]);

    return (
        <>
            {
                displayNoItemsBlock.get() && (
                    <NoTemplates>
                        Add new template
                    </NoTemplates>
                )
            }
        </>
    );
};
