<script lang="ts">
import { defineComponent , reactive, toRefs } from 'vue';

      export default defineComponent({
        setup() {
          const data = reactive<{
            book: string,
            page: number
          }>({
            book: "vue",
            page: 3
          });

          const addPage = () =>  {
            data.page++;
          }

          return {
            ...toRefs(data),
            add: addPage,
          }
        }
      })
</script>

<template>
  <h3>{{ page }}</h3>
  <button @click="add"></button>
</template>

<style scoped>

</style>
