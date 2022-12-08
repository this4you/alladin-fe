import React from 'react';

export interface Connector<TUseCases> {
    Provider: React.FC<{ useCases: TUseCases } & {
        children?: React.ReactNode;
    }>;
    connect<TProps extends Partial<TUseCases>>(
        Component: React.ComponentType<TProps>,
        ...useCases: Extract<keyof TProps, keyof TUseCases>[]
    ): React.ComponentType<Omit<TProps, keyof TUseCases>>;
}
