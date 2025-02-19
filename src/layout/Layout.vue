<script setup>
import FooterBar from "@/components/FooterBar.vue";
import HeaderBar from "@/components/HeaderBar.vue";
</script>
<template>
  <HeaderBar />

  <main class="w-full py-10 px-4 sm:px-8 min-h-screen">
    <slot></slot>
  </main>
  <FooterBar />
</template>
