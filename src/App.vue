<script setup lang="ts">
import { Ref, computed, watch, ref, provide, inject } from 'vue';
import TestComponent from './components/TestComponent.vue';
import TestComponentTwo from "./components/TestComponentTwo.vue";

const data: Ref<{
  book: string,
  page: number
}> = ref({
  book: "vue",
  page: 3
});

provide("page", data.value.page);

const heading = ref<HTMLHeadingElement | null>(null);
const myInput = ref<HTMLInputElement | null>(null);
const inputmodel = ref("");

const computedValue = computed<number>(() => data.value.page * 4);

const addPage = (page: number): void => {
  data.value.page = page;
}

watch(data, (newData, oldData) => {
  console.log("Data changed from", oldData, "to", newData);
});

</script>

<template>
  <h3 ref="heading">{{ data.page }}</h3>
  <h3>{{ computedValue }}</h3>
  <button @click="addPage(4)">Add 4 to Page</button>
  <input type="text" ref="myInput">
  <!-- Directly displaying inputmodel might not be necessary -->
  <!-- <h3>{{ inputmodel }}</h3> -->
  <input type="text" v-model="inputmodel">
  <test-component :page="data.page" @addPage="addPage"/>
  <test-component-two />
</template>

<style scoped>

</style>
