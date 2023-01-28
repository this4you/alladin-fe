import { ContentBlockProps } from './types';
import { ContentBlockContainer, ContentBlockHeader } from './styles';

export const ContentBlock: React.FC<ContentBlockProps> = ({ header, children, ...rest }) => {
    return (
        <ContentBlockContainer {...rest}>
            <ContentBlockHeader>
                {header}
            </ContentBlockHeader>
            {
                children
            }
        </ContentBlockContainer>
    );
};