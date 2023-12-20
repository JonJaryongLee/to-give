<script setup>
import HomeChild from "@/components/HomeChild.vue";
import { ref } from "vue";

const name = ref("david");
const age = ref(10);

function changeAge(newAge) {
  age.value = newAge;
}
</script>

<template>
  <h1>HomeView</h1>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <button @click="changeAge(age - 1)">나이를 줄이자</button>
  <HomeChild :name="name" :age="age" />
</template>
