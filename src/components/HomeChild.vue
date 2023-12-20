<script setup>
import GrandChild from "@/components/GrandChild.vue";
import { useUserStore } from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <h2>HomeChild</h2>
  <p>{{ user.name }}</p>
  <p>{{ user.age }}</p>
  <button @click="user.changeName('tom')">이름변경</button>
  <GrandChild />
</template>
