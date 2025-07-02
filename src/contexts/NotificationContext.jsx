import React, { createContext, useState, useContext } from 'react';
import Notification from '@/components/Notification';

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success',
  });

  const showNotification = (message, type = 'success') => {
    setNotification({
      isVisible: true,
      message,
      type,
    });
  };

  const closeNotification = () => {
    setNotification((prevState) => ({ ...prevState, isVisible: false }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification.isVisible && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
    </NotificationContext.Provider>
  );
};
