import { InitUserInfoUseCase } from '../../../application/use-cases/InitUserInfoUseCase';
import { MobXAuthState } from '../../../../../commons/state/MobXAuthState';
import { PropsWithChildren } from 'react';

export type AuthContentProviderProps = {
    initUserInfoUseCase: InitUserInfoUseCase,
    authState: MobXAuthState
} & PropsWithChildren