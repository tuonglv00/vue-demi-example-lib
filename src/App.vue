<script setup lang="ts">
import { Counter } from "@/components/Counter";
import { VueVersion } from "@/components/VueVersion";
</script>

<template>
  <header>
    <h1>Demo vue-demi</h1>
  </header>

  <main>
    <Counter @counterUpdated="console.log" />
    <VueVersion />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
