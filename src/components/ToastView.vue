<template>
  <ShowToasts />

  <div class="buttons-container">
    <div class="button-wrapper">
      <div class="button-container">
        <button @click="successToast" class="success-button">Success</button>
        <div class="input-container">
          <input
            type="text"
            v-model="successText"
            placeholder="Enter text for toast"
          />
          <Slider v-model="successTimeout" />
          <span>{{ successTimeout }} milliseconds</span>
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <div class="button-container">
        <button @click="warningToast" class="warning-button">Warning</button>
        <div class="input-container">
          <input
            type="text"
            v-model="warningText"
            placeholder="Enter text for toast"
          />
            <Slider v-model="warningTimeout" />
          <span>{{ warningTimeout }} milliseconds</span>
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <div class="button-container">
        <button @click="errorToast" class="error-button">Error</button>
        <div class="input-container">
          <input
            type="text"
            v-model="errorText"
            placeholder="Enter text for toast"
          />
            <Slider v-model="errorTimeout" />
          <span>{{ errorTimeout }} milliseconds</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowToasts from "./ShowToasts.vue";
import Slider from "./Slider.vue";
import useToasterStore from "../stores/useToasterStore";
import { ref } from 'vue'
import type { Ref } from 'vue'

const toasterStore = useToasterStore();
const successTimeout:Ref<number> = ref(2000);
const warningTimeout:Ref<number> = ref(2000);
const errorTimeout:Ref<number> = ref(2000);
const successText:Ref<string> = ref("Success!");
const warningText:Ref<string> = ref("Warning!");
const errorText:Ref<string> = ref("Error!");


const successToast = () => {
  toasterStore.success({
    text: successText.value,
    timeout: successTimeout.value,
  });
};

const warningToast = () => {
  toasterStore.warning({
    text: warningText.value,
    timeout: warningTimeout.value,
  });
};

const errorToast = () => {
  toasterStore.error({ text: errorText.value, timeout: errorTimeout.value });
};
</script>

<style scoped lang="scss">
.buttons-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

.button-wrapper {
  margin: 0.5rem 0;
  width: 100%;

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    border-radius: 0.25rem;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border: 2px solid transparent;
      color: white;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: border-color 0.2s ease-in-out;

      &:hover {
        border-color: black;
      }
    }

    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      width: 100%;

      input[type="text"] {
        width: 100%;
        height: 100%;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
        font-size: 1rem;
      }

      input[type="range"] {
        width: 100%;
        margin-bottom: 0.5rem;
      }

      span {
        font-size: 0.8rem;
      }
    }
  }

  .success-button {
    background-color: #4caf50;
  }

  .warning-button {
    background-color: #ff9800;
  }

  .error-button {
    background-color: #f44336;
  }
}

@media screen and (min-width: 768px) {
  .buttons-container {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }

  .button-wrapper {
    margin: 0 1rem;
    width: auto;
  }
}
</style>
