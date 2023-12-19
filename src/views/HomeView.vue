<script setup>
import HomeChild from "@/components/HomeChild.vue";
import { ref } from "vue";

const name = ref("david");
const age = ref(10);
</script>

<template>
  <h1>HomeView</h1>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <HomeChild />
</template>
