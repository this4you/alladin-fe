import { NoTemplates, TemplateItemsContainer } from './styles';
import { displayNoItemsBlock, interviewTemplateListState as state } from '../../../state/interviewTemplateListState';
import { TemplateItemsProps } from './types';
import { useEffect } from 'react';
import { TemplateItem } from '../template-item/TemplateItem';
import { useParams } from 'react-router-dom';

export const TemplateItems: React.FC<TemplateItemsProps> = ({ initTemplatesList, setActiveTemplateItem }) => {
    const { template } = useParams();

    useEffect(() => {
        initTemplatesList(template || null);
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
                state.templatesList.map((item) =>
                    <TemplateItem key={item.id} interviewTemplateItem={item} setActiveTemplateItem={setActiveTemplateItem}/>
                )
            }
        </TemplateItemsContainer>
    );
};
