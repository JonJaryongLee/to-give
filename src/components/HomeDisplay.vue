<script setup>
import { useMessengerStore } from "@/stores/messenger";

const messenger = useMessengerStore();
</script>

<template>
  <h2>형제2</h2>
  <p>{{ messenger.message }}</p>
</template>