import { TemplatesConfigWrapper } from './styles';
import TemplatesList from '../templates-list/TemplatesList';
import TemplateContent from '../template-content/TemplateContent';
import { Provider } from 'modules/interview-template-module/config/context';
import { useEffect } from 'react';
import { interviewTemplateFactory } from 'modules/interview-template-module/config/interviewTemplateFactory';

const TemplatesConfigContainer: React.FC = () => {
    const context = interviewTemplateFactory.get({
        key: 'template-config-container'
    });

    useEffect(() => (): void => {
        interviewTemplateFactory.clear();
    });
    return (
        <Provider moduleContext={context}>
            <TemplatesConfigWrapper>
                <TemplatesList/>
                <TemplateContent/>
            </TemplatesConfigWrapper>
        </Provider>
    );
}

export default TemplatesConfigContainer;