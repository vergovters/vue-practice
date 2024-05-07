<script setup lang="ts">
import { inject, onBeforeMount, onMounted, onUnmounted, onUpdated } from 'vue'

    interface PageData {
        page: number;
    }
    console.log("created")
    const page = inject<PageData>("page")

    onBeforeMount(() => {
        console.log("onBeforeMount")
    })

    onMounted(() => {
        console.log("onMounted")
    })

</script>

<template>
    <h5>TestComponent2 {{ page }}</h5>
</template>