import React from 'react';
import { IPropsPositionList } from './types';
import { PositionListWrapper } from './styles';
import { PositionListItem } from '../position-list-item';

export const PositionList:React.FC<IPropsPositionList> = () => {
    return (
        <PositionListWrapper>
            <PositionListItem/>
            <PositionListItem/>
            <PositionListItem/>
        </PositionListWrapper>
    );
}
