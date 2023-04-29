import { defineStore } from 'pinia'
import type UserEmailState from '../types/UserEmailState'

export const useUserEmailStore = defineStore('userEmailStore', {
  state: (): UserEmailState => ({
    userEmail: ''
  }),
  actions: {
    addUserEmailAction(userEmail: string) {
      this.userEmail = userEmail
    }
  }
})