
import { markRaw } from "vue";
import { defineStore } from "pinia";

export type Modal = {
  isOpen: boolean,
  view: string,
};


export const useModalStore = defineStore("modalStore", {
  state: (): Modal => ({
    isOpen: false,
    view: ''
  }),
  actions: {
    openModal(view: string) {
      this.isOpen = true;
      this.view = view
    },
    closeModal() {
      this.isOpen = false;
      this.view = '';
    },
  },
});

export default useModalStore;