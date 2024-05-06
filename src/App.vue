<script lang="ts">
import { defineComponent , reactive, toRefs, computed, watch, ref, provide } from 'vue';
import TestComponent from './components/TestComponent.vue'
import TestComponentTwo from "./components/TestComponentTwo.vue";

      export default defineComponent({
        setup() {
          const data = reactive<{
            book: string,
            page: number
          }>({
            book: "vue",
            page: 3
          });
          provide("page", data.page)
          const heading = ref<HTMLHeadingElement | null>(null)
          const myInput = ref<HTMLInputElement | null>(null)
          const inputmodel = ref("")

          const computedValue = computed<number>(() => data.page*4)
          const addPage = (page: number):void =>  {
            data.page = page;
          }
          

           watch([() => data.page, computedValue], ([newPage, newComputedValue], [oldPage, oldComputedValue]) => {
            console.log("Page changed from", oldPage, "to", newPage);
            console.log("Computed value changed from", oldComputedValue, "to", newComputedValue);
          });

          return {
            ...toRefs(data),
            add: addPage,
            computedValue,
            heading,
            myInput,
            inputmodel
          }
        },
        components: {
          TestComponent,
          TestComponentTwo
        }
      })
</script>

<template>
  <h3 ref="heading">{{ page }}</h3>
  <h3>{{ computedValue }}</h3>
  <button @click="add"></button>
  <input type="text" ref="myInput">
  <h3>{{ inputmodel }}</h3>
  <input type="text" v-model="inputmodel">
  <test-component :page="page" @addPage="add"/>
  <test-component-two />
</template>

<style scoped>

</style>
