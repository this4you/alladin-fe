import { FieldValues } from 'react-hook-form/dist/types';
import { FormProvider, useForm } from 'react-hook-form';
import React, { ReactElement, useCallback } from 'react';
import { FormWrapperProps } from './types';

const recursiveMap = (children: React.ReactNode, fn: any): any => {
    return React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
            return child;
        }

        if (child.props.children) {
            child = React.cloneElement(child, {
                // @ts-ignore
                children: recursiveMap(child.props.children, fn)
            });
        }

        return fn(child);
    });
}
const isEmptyObject = (obj: object): boolean => Object.entries(obj).every(([key, value]) => {
    if (value instanceof Object) return isEmptyObject(value)

    return !value
})

export const AppForm = <T extends FieldValues>({ children, submit, formValidator }: FormWrapperProps<T>) => {
    const form = useForm<T>({
        resolver: async (data, context) => {
            if (!formValidator) {
                return {
                    values: data,
                    errors: {}
                };
            }

            const error = formValidator.validate(data);
            debugger
            if (isEmptyObject(error)) {
                return {
                    values: data,
                    errors: {}
                };
            } else {
                return {
                    values: {},
                    errors: error
                }
            }
        }
    });

    // const onSubmit = useCallback(() => form.handleSubmit(data => {
    //     console.log(data);
    //     submit(data);
    // }), [form.handleSubmit]);

    const onSubmit = form.handleSubmit((data, e) => {
        e?.preventDefault();
        console.log(data);
        submit(data);
    })

    return (
        <FormProvider {...form}>
            <form onSubmit={onSubmit}>
                {recursiveMap(children, (child: any) => {
                    const item = child as ReactElement<{ name: string }>;

                    return item.props.name
                        ? React.createElement(item.type, {
                            ...{
                                ...item.props,
                                register: form.register,
                                key: item.props.name
                            }
                        })
                        : child;
                })}
            </form>
        </FormProvider>
    )
}