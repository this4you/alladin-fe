import { MobXConnector } from './MobXConnector';

export const createConnector = <T extends object>() => {
    return new MobXConnector<T>();
}