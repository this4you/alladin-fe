
import { QuestionCategoryModalProps } from './types';
import { QuestionCategories, QuestionCategoriesColumn, QuestionCategoryLabel, QuestionCategoryModalDescription, QuestionCategoryModalHeader, QuestionCategoryModalWrapper, QuestionCategorySearch, QuestionCategorySearchIcon, SearchField } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

export const QuestionCategoryModal:React.FC<QuestionCategoryModalProps> = () => {
    return (
        <QuestionCategoryModalWrapper>
             <QuestionCategoryModalHeader>
                 New question category in step
             </QuestionCategoryModalHeader>
            <QuestionCategoryModalDescription>
                You can choose a new category from the list, or add your own (do not create duplicates with existing categories, this will help in the future when adding questions)
            </QuestionCategoryModalDescription>
            <QuestionCategorySearch>
                <QuestionCategorySearchIcon>
                    <AiOutlineSearch/>
                </QuestionCategorySearchIcon>
                <SearchField placeholder={'Search ...'} variant="standard"/>
            </QuestionCategorySearch>
            <QuestionCategories>
                <QuestionCategoriesColumn>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                </QuestionCategoriesColumn>
                <QuestionCategoriesColumn>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                </QuestionCategoriesColumn>
                <QuestionCategoriesColumn>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                </QuestionCategoriesColumn>
                <QuestionCategoriesColumn>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                </QuestionCategoriesColumn>
                <QuestionCategoriesColumn>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                    <QuestionCategoryLabel/>
                </QuestionCategoriesColumn>
            </QuestionCategories>
        </QuestionCategoryModalWrapper>
    );
}
