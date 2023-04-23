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

export class MobXConnector<TModuleContext extends object> implements Connector<TModuleContext> {
    private context?: Context<TModuleContext>;

    autoBindContext(useCases: TModuleContext): void {
        Object.values(useCases).forEach(it => {
            if (typeof it === 'object') {
                autoBind(it);
            }
        });
    }

    Provider: React.FC<{ moduleContext: TModuleContext } & {
        children?: React.ReactNode;
    }> = memo(({ children, moduleContext }) => {
        this.autoBindContext(moduleContext);

        if (!this.context) {
            this.context = createContext(moduleContext);
        }

        return (
            <this.context.Provider value={moduleContext}>
                {children}
            </this.context.Provider>
        );
    });

    connect = <TProps extends Partial<TModuleContext>>(
        Component: React.ComponentType<TProps>,
        ...useCases: Extract<keyof TProps, keyof TModuleContext>[]
    ): React.ComponentType<Omit<TProps, keyof TModuleContext>> => {
        const ObserverComponent = observer(Component);

        return (
            ownProps: Omit<TProps, keyof TModuleContext>,
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

export type Connect<TModuleContext> = <TProps extends Partial<TModuleContext>>(
    Component: React.ComponentType<TProps>,
    ...dependencies: Extract<keyof TProps, keyof TModuleContext>[]
) => React.ComponentType<Omit<TProps, keyof TModuleContext>>;
