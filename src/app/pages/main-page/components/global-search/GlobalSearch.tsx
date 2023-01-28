import { GlobalSearchContainer, SearchField, SearchIconContainer } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

export const GlobalSearch: React.FC = () => (
    <GlobalSearchContainer>
        <SearchIconContainer>
            <AiOutlineSearch/>
        </SearchIconContainer>
        <SearchField placeholder={'Search ...'} variant="standard" />
    </GlobalSearchContainer>
);