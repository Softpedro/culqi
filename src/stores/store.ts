import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || '',
  }),

  actions: {
    setAccessToken(accessToken: string) {
      this.accessToken = accessToken;
      localStorage.setItem('accessToken', accessToken);
    },

    logout() {
      this.accessToken = '';
      localStorage.removeItem('accessToken');
    },
  },
});
