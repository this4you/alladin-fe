import { InterviewTemplateModuleContainer } from './styles';
import { Provider } from 'modules/interview-template/template/config/interviewTemplateContext';
import { useEffect } from 'react';
import { interviewTemplateFactory } from 'modules/interview-template/template/config/interviewTemplateFactory';
import { TemplatesList } from '../../template/ui/components/templates-list';
import { TemplateContent } from '../../template/ui/components/template-content';

const InterviewTemplateModule: React.FC = () => {
    const context = interviewTemplateFactory.get({
        key: 'template'
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