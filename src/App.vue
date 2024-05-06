<script lang="ts">
import { defineComponent , ref, Ref } from 'vue';

      export default defineComponent({
        setup() {
          const data: Ref<{
            book: string,
            page: number
          }> = ref({
            book: "vue",
            page: 3
          });

          return {
            data: data.value,
          }
        }
      })
</script>

<template>
  <h3>{{ data.book }}</h3>
</template>

<style scoped>

</style>
