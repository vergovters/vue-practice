<script lang="ts">
import { defineComponent , reactive, toRefs, computed, watch } from 'vue';

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
          const computedValue = computed<number>(() => data.page*4)

           watch([() => data.page, computedValue], ([newPage, newComputedValue], [oldPage, oldComputedValue]) => {
            console.log("Page changed from", oldPage, "to", newPage);
            console.log("Computed value changed from", oldComputedValue, "to", newComputedValue);
          });

          return {
            ...toRefs(data),
            add: addPage,
            computedValue,
          }
        }
      })
</script>

<template>
  <h3>{{ page }}</h3>
   <h3>{{ computedValue }}</h3>
  <button @click="add"></button>
</template>

<style scoped>

</style>
