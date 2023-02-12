export type EditableLabelProps = {
    label: string;
    labelChanged: (newCaption: string) => void | Promise<void>;
    hideButtons?: boolean;
};