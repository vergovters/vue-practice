<script setup lang="ts">
import { inject } from 'vue'

    interface PageData {
        page: number;
    }

    const page = inject<PageData>("page")


</script>

<template>
    <h5>TestComponent2 {{ page }}</h5>
</template>