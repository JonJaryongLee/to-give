<script setup>
import { useUserStore } from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <h3>GrandChild</h3>
  <p>{{ user.name }}</p>
  <p>{{ user.age }}</p>
  <button @click="user.changeAge(1)">나이를 한살로!</button>
</template>
