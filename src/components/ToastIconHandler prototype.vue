<template>
    <i v-html="svg" />
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    type TIconName = "toast-error" | "toast-warning" | "toast-success";

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
        src: {
            type: String,
            default: '',
        },
        name: <TIconName>{
            type: String,
            required: true,
        },
    });
    // const path = props.src ? props.src : '';
    // const file = `${path}${props.name}`;
    // const modules = import.meta.glob(`${file}.*`);
    // const svg = computed(() => {
    //     return modules[`./assets/icons/toastIcons/${props.name}.svg`]
    // })
</script>