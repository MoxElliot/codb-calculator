
import { markRaw } from "vue";
import { defineStore } from "pinia";

export type Modal = {
  isOpen: boolean,
  view: object,
  actions?: ModalAction[],
};

export type ModalAction = {
  label: string,
  callback: (props?: any) => void,
};

export const useModalStore = defineStore("modalStore", {
  state: (): Modal => ({
    isOpen: true,
    view: {},
    actions: [],
  }),
  actions: {
    openModal(view: object, actions?: ModalAction[]) {
      this.isOpen = true;
      this.actions = actions;
      // using markRaw to avoid over performance as reactive is not required
      this.view = markRaw(view);
    },
    closeModal() {
      this.isOpen = false;
      this.view = {};
      this.actions = [];
    },
  },
});

export default useModalStore;