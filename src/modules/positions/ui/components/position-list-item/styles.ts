import styled from 'styled-components';
export const PositionListItemWrapper = styled.div`
  box-sizing: border-box;
  margin: 10px 20px;
  border-radius: 12px;
  height: 60px;
  background-color: ${({ theme }) => theme.blockSecondary};
`;

export const PositionListItemContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 30% 20% repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  align-items: center;
`;

export const PositionCaption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    background-color: #485163; // move to theme
    width: fit-content;
    margin-left: 10px;
`;
