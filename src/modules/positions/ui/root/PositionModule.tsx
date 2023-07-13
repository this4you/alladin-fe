import { PositionModuleWrapper } from './styles';
import { PositionList } from '../components/position-list';

export const PositionModule = () => {
    return (
        <PositionModuleWrapper header={'Company positions'}>
            <PositionList/>
        </PositionModuleWrapper>
    )
}