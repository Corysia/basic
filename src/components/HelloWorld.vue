<template>
  <div>
    <canvas id="bjsCanvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BasicScene } from '@/HelloWorld/BasicScene';

export default defineComponent({
  name: 'HelloWorld',
  mounted() {
    const canvas = document.querySelector('canvas');
    if (!canvas) {
      throw new Error('No canvas found');
    }
    new BasicScene(canvas);
  }
});
</script>

<style>
#bjsCanvas {
  width: 100%;
  height: 100%;
}
</style>