<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
        setup() {
        const page = inject("page")
        return {
            page
        }
    },
})
</script>

<template>
    <h5>TestComponent2 {{ page }}</h5>
</template>