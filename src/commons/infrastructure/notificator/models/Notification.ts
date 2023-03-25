import { NotificationType } from './NotificationType';

export type Notification = {
    key: number;
    type: NotificationType;
    message: string;
};