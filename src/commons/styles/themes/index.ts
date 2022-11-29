export interface ThemeProps {
    primary: string;
    background: string;
    blockColor: string;
    text: string;
    secondaryText: string;
}

export const darkTheme: ThemeProps = {
    primary: 'var(--dark-primary)',
    background: 'var(--dark-background)',
    text: 'var(--dark-text)',
    blockColor: 'var(--dark-block-color)',
    secondaryText: 'var(--dark-secondary-text-color)',
};

export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    text: 'var(--light-text)',
} as ThemeProps; // TODO add colors for light theme