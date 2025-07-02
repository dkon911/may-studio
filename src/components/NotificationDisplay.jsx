import React from 'react';
import useNotificationStore from '@/stores/notificationStore';
import Notification from '@/components/Notification';

const NotificationDisplay = () => {
  const { isVisible, message, type, closeNotification } = useNotificationStore();

  // The Notification component itself handles the isVisible logic, 
  // so we can render it and let it decide whether to show itself.
  return (
    <Notification
      message={message}
      type={type}
      isVisible={isVisible}
      onClose={closeNotification}
    />
  );
};

export default NotificationDisplay;
