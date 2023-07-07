<template>
  <ShowToasts />

  <div class="buttons-container">
    <div class="toast">
      <button @click="successToast" style="background-color: #4caf50;">
        Success
        <input type="text" v-model="successText" placeholder="Enter text for toast" @click.stop />
        <input type="number" v-model="successTimeout" min="1000" max="20000" step="1000" />
        <span>milliseconds</span>
      </button>
    </div>

    <div class="toast">
      <button @click="warningToast" style="background-color: #ff9800;">
        Warning
        <input type="text" v-model="warningText" placeholder="Enter text for toast" @click.stop />
        <input type="number" v-model="warningTimout" min="1000" max="20000" step="1000" />
        <span>milliseconds</span>
      </button>
    </div>

    <div class="toast">
      <button @click="errorToast" style="background-color: #f44336;">
        Error
        <input type="text" v-model="errorText" placeholder="Enter text for toast" @click.stop />
        <input type="number" v-model="errorTimeout" min="1000" max="20000" step="1000" />
        <span>milliseconds</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowToasts from "./components/ShowToasts.vue";
import useToasterStore from "./stores/useToasterStore";

const toasterStore = useToasterStore();
let successText = "";
let warningText = "";
let errorText = "";
let successTimeout = 2000;
let warningTimout = 2000;
let errorTimeout = 2000;

const successToast = () => {
  const text = successText || "Success!";
  toasterStore.success({ text, timeout: successTimeout });
  successText = "";
};

const warningToast = () => {
  const text = warningText || "Something went wrong.";
  toasterStore.warning({ text, timeout: warningTimout });
  warningText = "";
};

const errorToast = () => {
  const text = errorText || "An error occurred!";
  toasterStore.error({ text, timeout: errorTimeout });
  errorText = "";
};
</script>

<style scoped>

.toast {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
}

.toast__text {
  margin-left: 1rem;
}

.success {
  background-color: green;
}

.warning {
  background-color: orange;
}

.error {
  background-color: red;
}
</style>