import { create } from 'zustand';

const useNotificationStore = create((set) => ({
  isVisible: false,
  message: '',
  type: 'success',
  showNotification: (message, type = 'success') => set({ isVisible: true, message, type }),
  closeNotification: () => set({ isVisible: false }),
}));

export default useNotificationStore;
