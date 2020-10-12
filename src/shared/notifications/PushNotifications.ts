import Fetch from 'node-fetch';
import User from '@modules/users/infra/typeorm/entities/User';

interface ISendPushNotification {
  users: User[];
  message: string;
  data?: any;
  title: string;
}

interface IMessage {
  to: string;
  title: string;
  body: string;
  data?: any;
  badge: number;
  sound: string;
}

export const sendPushNotification = ({
  users,
  message,
  title,
  data,
}: ISendPushNotification): void => {
  const messages: IMessage[] = [];

  users.forEach(element => {
    messages.push({
      to: element.useDeviceID,
      title,
      body: message,
      badge: 1,
      sound: 'default',
      data,
    });
  });

  console.log(JSON.stringify(messages));

  Fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messages),
  }).then(res => console.log(res));
};
