import React from 'react';

export interface Connector<TModuleContext> {
    Provider: React.FC<{ moduleContext: TModuleContext } & {
        children?: React.ReactNode;
    }>;
    connect<TProps extends Partial<TModuleContext>>(
        Component: React.ComponentType<TProps>,
        ...useCases: Extract<keyof TProps, keyof TModuleContext>[]
    ): React.ComponentType<Omit<TProps, keyof TModuleContext>>;
}
