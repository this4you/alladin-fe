import { InterviewTemplateModuleContainer } from './styles';
import { Provider } from 'modules/interview-template/template-list/config/interviewTemplateContext';
import { useEffect } from 'react';
import { interviewTemplateFactory } from 'modules/interview-template/template-list/config/interviewTemplateFactory';
import { TemplatesList } from '../../template-list/ui/components/templates-list';
import { TemplateContent } from '../../widgets/template-content';

const InterviewTemplateModule: React.FC = () => {
    const context = interviewTemplateFactory.get({
        key: 'template-list'
    });

    useEffect(() => (): void => {
        interviewTemplateFactory.clear();
    });

    return (
        <Provider moduleContext={context}>
            <InterviewTemplateModuleContainer>
                <TemplatesList/>
                <TemplateContent/>
            </InterviewTemplateModuleContainer>
        </Provider>
    );
}

export default InterviewTemplateModule;