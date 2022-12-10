import { NotificationType } from 'commons/utils/notificator/SnackbarNotificator';
import { useSnackbar } from 'notistack';
import { SnackBarNotificatorProps } from './types';
import { useEffect } from 'react';

export const SnackbarNotificatorProvider: React.FC<SnackBarNotificatorProps> = ({ notificatorState }) => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        notificatorState.notifications.forEach(({ message, key, type }) => {
            switch (type) {
                case NotificationType.ERROR:
                    enqueueSnackbar(message, { key, variant: 'error',  })
            }

            notificatorState.notificationDisplayed(key);
        })
    }, [notificatorState.notifications, enqueueSnackbar]);

    return (<></>);
}