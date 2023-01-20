import { TemplatesConfigWrapper } from './styles';
import TemplateContent from '../template-content/TemplateContent';
import { Provider } from 'modules/interview-template-module/config/context';
import { useEffect } from 'react';
import { interviewTemplateFactory } from 'modules/interview-template-module/config/interviewTemplateFactory';
import { TemplatesList } from '../templates-list';

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