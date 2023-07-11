<template>
  <input
    ref="slider"
    :value="sliderValue"
    @input="updateTimeout"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    class="slider"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { Ref } from "vue";

const { min, max, step, modelValue } = defineProps({
  min: {
    type: Number,
    default: 1000,
  },
  max: {
    type: Number,
    default: 200000,
  },
  step: {
    type: Number,
    default: 1000,
  },
  modelValue: {
    type: Number,
    default: 2000,
  },
});



const emit = defineEmits(["update:modelValue"]);
const sliderValue: Ref<number> = ref(modelValue);
const slider = ref(null);

function updateTimeout(event: Event) {
const target = (event.target as HTMLInputElement | null)?.value
  const value = parseFloat(target || '0')
  sliderValue.value = value
}

watchEffect(() => {
  if (slider.value) {
    emit("update:modelValue", sliderValue.value);
  }
});
</script>

<style scoped lang="scss">
input[type="range"] {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #ddd;
  outline: none;
  margin: 10px 0;
}
</style>
