<script setup>
import HelloWorld from './components/HelloWorld.vue'

import { ref, onMounted } from 'vue';

const message = ref('');

onMounted(async () => {
  try {
    const response = await fetch('https://apitest-n6l3.onrender.com/api'); // Change the URL as needed
    if (response.ok) {
      message.value = await response.text();
    } else {
      console.error('Failed to fetch message:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching message:', error);
  }
});
</script>

<template>
  <HelloWorld :msg="message" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
