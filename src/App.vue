<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'board' }">Board</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>
