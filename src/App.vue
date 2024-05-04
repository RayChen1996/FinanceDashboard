<script setup>
import Nav from "./components/Layouts/Basic/Nav.vue";
import TopBar from "./components/Layouts/Basic/TopBar.vue";
</script>

<template>
  <div class="flex container">
    <Nav />

    <div class="flex-1">
      <TopBar />
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
