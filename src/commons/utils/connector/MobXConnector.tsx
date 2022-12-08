import React, {
    Context,
    createContext,
    memo,
    useContext,
} from 'react';
import autoBind from 'auto-bind';
import { pick } from 'lodash';
import { observer } from 'mobx-react';
import { Connector } from './Connector';

export class MobXConnector<TUseCases extends object> implements Connector<TUseCases> {
    private context?: Context<TUseCases>;

    autoBindContext(useCases: TUseCases): void {
        Object.values(useCases).forEach(it => {
            if (typeof it === 'object') {
                autoBind(it);
            }
        });
    }

    Provider: React.FC<{ useCases: TUseCases } & {
        children?: React.ReactNode;
    }> = memo(({ children, useCases }) => {
        this.autoBindContext(useCases);

        if (!this.context) {
            this.context = createContext(useCases);
        }

        return (
            <this.context.Provider value={useCases}>
                {children}
            </this.context.Provider>
        );
    });

    connect = <TProps extends Partial<TUseCases>>(
        Component: React.ComponentType<TProps>,
        ...useCases: Extract<keyof TProps, keyof TUseCases>[]
    ): React.ComponentType<Omit<TProps, keyof TUseCases>> => {
        const ObserverComponent = observer(Component);

        return (
            ownProps: Omit<TProps, keyof TUseCases>,
        ): JSX.Element | null => {
            if (!this.context) {
                return null;
            }

            const props = pick(useContext(this.context!), ...useCases) as TProps;

            return (
                <ObserverComponent {...props} {...ownProps} />
            );
        };
    }
}

export type Connect<TUseCases> = <TProps extends Partial<TUseCases>>(
    Component: React.ComponentType<TProps>,
    ...useCases: Extract<keyof TProps, keyof TUseCases>[]
) => React.ComponentType<Omit<TProps, keyof TUseCases>>;
