export type EditableLabelProps = {
    label: string;
    labelChanged: (newCaption: string) => Promise<boolean>;
    hideButtons?: boolean;
};