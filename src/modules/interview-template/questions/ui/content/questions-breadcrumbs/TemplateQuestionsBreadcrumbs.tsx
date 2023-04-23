import { TemplateQuestionsBreadcrumbsProps } from './types';
import { TemplateQuestionsBreadcrumbsContainer } from './styles';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const TemplateQuestionsBreadcrumbs: React.FC<TemplateQuestionsBreadcrumbsProps> = ({
    template,
    activeStepName,
    clearActiveStep
}) => {
    return (
        <TemplateQuestionsBreadcrumbsContainer>
            <Breadcrumbs aria-label="breadcrumb">
                <Link relative={'route'} replace={true} to={`/templates/${template}`} onClick={() => clearActiveStep()}>
                    Steps
                </Link>
                <Typography color="text.primary">
                    {activeStepName}
                </Typography>
            </Breadcrumbs>
        </TemplateQuestionsBreadcrumbsContainer>
    );
}