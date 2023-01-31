export type AddMenuButtonProps = {
    label: string;
    inputPlaceholder: string;
    onCreate: (name: string) => void | Promise<void>
} & React.HTMLAttributes<HTMLDivElement>;