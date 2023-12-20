<script setup>
import HomeChild from "@/components/HomeChild.vue";
import { useUserStore } from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <h1>HomeView</h1>
  <p>{{ user.name }}</p>
  <p>{{ user.age }}</p>
  <p>두배의 나이: {{ user.doubleAge }}</p>
  <button @click="user.changeAge(user.age - 1)">나이를 줄이자</button>
  <HomeChild />
</template>
