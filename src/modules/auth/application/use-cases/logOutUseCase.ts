export const logOutUseCase = (
    clearToken: () => void,
    setIsAuth: (value: boolean) => void
) => () => {
    clearToken();
    setIsAuth(false);
};