<template>
  <div id="app">
    <Product />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Product from './components/Product.vue';

export default defineComponent({
  name: 'App',
  components: {
    Product
  }
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-image: url("../public/images/Background_Dots.png");
  background-size: cover;
  background-position: center;
  padding: 2rem; */
}
</style>

