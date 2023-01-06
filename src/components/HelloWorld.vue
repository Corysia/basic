<template>
  <div>
    <canvas></canvas>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
