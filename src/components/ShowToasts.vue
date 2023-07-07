<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="toastStore.toasts.length" class="toaster__wrapper">
        <TransitionGroup name="toast" tag="ul">
          <li
            v-for="toast in toastStore.toasts"
            :class="['toaster__inner', toastTypes[toast.type]]"
            :key="toast.text"
          >
            <ToastIconHandler
              :name="toastIcons[toast.type]"
              class="toaster__inner-icon"
            />

            <span class="toaster__inner-text">
              {{ toast.text }}
            </span>
          </li>
        </TransitionGroup>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import useToasterStore, { TToastType } from "../stores/useToasterStore.ts";

// krijg deze nog niet aan de praat had de svg's netzogoed direct kunnen importen
import ToastIconHandler from "./ToastIconHandler.vue";

const toastTypes: Record<TToastType, string> = {
  warning: "warning",
  error: "error",
  success: "success",
};

const toastIcons: Record<TToastType, string> = {
  error: "toast-error",
  warning: "toast-warning",
  success: "toast-success",
};

const toastStore = useToasterStore();
</script>

<style scoped lang="scss">
.toast-enter-from,
.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: 0.25s ease all;
}

.toaster {
  &__wrapper {
    position: fixed;
    bottom: 3%;
    right: 5%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid transparent;
    background-color: var(--color);
    padding: 2.2rem 1.6rem;
    border-color: var(--color);
    color: white;
    svg {
      fill: var(--color);
      stroke: var(--color);
    }

    &.success {
      --color: green;
    }

    &.warning {
      --color: orange;
    }

    &.error {
      --color: red;
    }

    &-icon {
      width: 1.8rem;
      aspect-ratio: 1/1;
    }

    &-text {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}
</style>
