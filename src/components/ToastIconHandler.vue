<template>
  <component :is="icon" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

export type TIconName = "toast-error" | "toast-warning" | "toast-success";

const props = defineProps<{ name: string }>();

const icon = defineAsyncComponent(
  () => import(`../assets/icons/toastIcons/${props.name}.svg` )
);
</script>
