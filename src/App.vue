<template>
  <HelloWorld/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
head, body, div, canvas {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
</style>
