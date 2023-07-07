import { defineStore } from "pinia";

export type TToastType = "success" | "warning" | "error";

interface IToast {
  text: string;
  type: TToastType;
  id: number;
}
type ToastPayload = { timeout?: number; text: string; button?: boolean; };

const defaultTimeout = 2000;

const createToast = (text: string, type: TToastType): IToast => ({
  text,
  type,
  id: Math.random() * 1000,
});

export default defineStore("toaster-store", {
  state: (): { toasts: IToast[] } => ({
    toasts: [],
  }),
  actions: {
    updateState(payload: ToastPayload, type: TToastType) {
      const { text, timeout } = payload;

      const toast = createToast(text, type);

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== toast.id);
      }, timeout ?? defaultTimeout);
    },
    success(payload: ToastPayload) {
      this.updateState(payload, "success");
    },

    warning(payload: ToastPayload) {
      this.updateState(payload, "warning");
    },

    error(payload: ToastPayload) {
      this.updateState(payload, "error");
    },
  },
});

export const useToasterStore = defineStore("toaster-store", {
  state: () => ({}),
  actions: {},
});