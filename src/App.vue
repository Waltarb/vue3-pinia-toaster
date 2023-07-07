<template>
  <ShowToasts />

  <button @click="successToast" style="background-color: #4caf50;">Success</button>
  <button @click="warningToast" style="background-color: #ff9800;">Warning</button>
  <button @click="errorToast" style="background-color: #f44336;">Error</button>
</template>

<script setup lang="ts">
import ShowToasts from "./components/ShowToasts.vue";
import useToasterStore from "./stores/useToasterStore";

const toasterStore = useToasterStore();

const successToast = () => toasterStore.success({ text: "Success!" });
const warningToast = () => toasterStore.warning({ text: "Something went wrong." });
const errorToast = () => toasterStore.error({ text: "An error occured!" });
</script>

<style scoped lang="scss">
button {
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
}

button:hover {
  opacity: 0.8;
}
</style>