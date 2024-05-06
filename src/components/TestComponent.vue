<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: [
        "page",
    ],
    setup(props, ctx) {
        function addPage() {
            ctx.emit("addPage", props.page + 1)
        }

        return {
            addPage
        }
    },
})
</script>

<template>
    <h5>{{ page }}</h5>
</template>