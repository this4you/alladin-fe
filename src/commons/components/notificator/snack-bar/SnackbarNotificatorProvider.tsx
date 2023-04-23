import { useSnackbar } from 'notistack';
import { SnackBarNotificatorProps } from './types';
import { useEffect } from 'react';
import { NotificationType } from 'commons/infrastructure/notificator/models/NotificationType';

export const SnackbarNotificatorProvider: React.FC<SnackBarNotificatorProps> = ({ notificatorState }) => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        notificatorState.notifications.forEach(({ message, key, type }) => {
            switch (type) {
                case NotificationType.ERROR:
                    enqueueSnackbar(message, { key, variant: 'error' });
                    break;
                case NotificationType.INFO:
                    enqueueSnackbar(message, { key, variant: 'info' });
                    break;
                case NotificationType.SUCCESS:
                    enqueueSnackbar(message, { key, variant: 'success' });
                    break;
            }

            notificatorState.notificationDisplayed(key);
        })
    }, [notificatorState.notifications, enqueueSnackbar]);

    return (<></>);
}