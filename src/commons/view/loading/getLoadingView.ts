import { MobXBoolState } from '../../state/MobXBoolState';
import { MobXLoadingView } from './MobXLoadingView';

export const getLoadingView = () => {
    const state = new MobXBoolState();
    const view = new MobXLoadingView(state);

    return {
        state, view
    };
}