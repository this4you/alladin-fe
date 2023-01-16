import { TemplatesConfigWrapper } from './styles';
import TemplatesList from '../templates-list/TemplatesList';
import TemplateContent from '../template-content/TemplateContent';

const TemplatesConfigContainer: React.FC = () => {
    return (
        <TemplatesConfigWrapper>
            <TemplatesList/>
            <TemplateContent/>
        </TemplatesConfigWrapper>
    );
}

export default TemplatesConfigContainer;