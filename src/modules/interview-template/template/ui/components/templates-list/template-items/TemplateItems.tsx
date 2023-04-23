import { NoTemplates, TemplateItemsContainer } from './styles';
import { TemplateItemsProps } from './types';
import { useEffect } from 'react';
import { TemplateItem } from '../template-item';
import { useParams } from 'react-router-dom';

export const TemplateItems: React.FC<TemplateItemsProps> = ({ initTemplatesList, state }) => {
    const { template } = useParams();

    useEffect(() => {
        initTemplatesList(template || null);
    }, [initTemplatesList]);

    return (
        <TemplateItemsContainer>
            {
                state.displayNoItemsBlock && (
                    <NoTemplates>
                        Add new template
                    </NoTemplates>
                )
            }
            {
                state.templateList.map((item) =>
                    <TemplateItem key={item.id} interviewTemplateItem={item}/>
                )
            }
        </TemplateItemsContainer>
    );
};
