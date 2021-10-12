import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { NotificationRequestInput } from 'expo-notifications/build/Notifications.types';

type NotificationContextValue = {
  schedulePushNotification: (
    request: NotificationRequestInput,
  ) => Promise<void>;
  expoPushToken: string;
};

const NotificationContext = createContext<NotificationContextValue>(
  {} as NotificationContextValue,
);

const NotificationsProvider: React.FC = ({ children }) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef<any>(null);
  const responseListener = useRef<any>(null);

  async function schedulePushNotification(request: NotificationRequestInput) {
    await Notifications.scheduleNotificationAsync(request);
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token),
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(!!notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current,
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{ schedulePushNotification, expoPushToken }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

const useNotifications = () => useContext(NotificationContext);

export { useNotifications, NotificationsProvider };
