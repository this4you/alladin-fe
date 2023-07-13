import React from 'react';
import { IPropsPositionListItem } from './types';
import { PositionCaption, PositionListItemContent, PositionListItemWrapper } from './styles';

export const PositionListItem:React.FC<IPropsPositionListItem> = () => {
    return (
        <PositionListItemWrapper>
            <PositionListItemContent>
                <PositionCaption>
                    Junior frontent developer
                </PositionCaption>
            </PositionListItemContent>
        </PositionListItemWrapper>
    );
}
