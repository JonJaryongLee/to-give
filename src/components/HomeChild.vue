<script setup>
import GrandChild from "@/components/GrandChild.vue";

defineProps({
  name: String,
  age: Number,
});
</script>

<template>
  <h2>HomeChild</h2>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <GrandChild :name="name" :age="age" />
</template>
