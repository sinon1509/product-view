<template>
<main>
    <header>
      <h1>ONETECH</h1>
    </header>
    <section>
      <canvas></canvas>
      <div id="productDetails">
        <h3>馬像置物-樹脂立ち戦闘馬彫刻の装飾卓上装飾品 </h3>
        <p id="price">12,345円</p>

        <div id="description">
          <h4>詳細情報</h4>

          <p>
            - 高品質の樹脂材料、非毒性、、、細かい細工アートワーク。

          </p>
          <button>ADD TO CART</button>
        </div>

      </div>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Product3D } from '@/BabylonJS/Product3D';
export default defineComponent({
    name: 'Product3D',
    mounted(){
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        let product = new Product3D(canvas);

        window.addEventListener("resize", function() {
          product.WindowsResize();
        })
    }
})
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&family=Raleway:wght@300&family=Roboto+Condensed&display=swap");
main {
  background: white;
  width: 100%;
  height: 100%;


  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

header {
  width: 100%;
  height: 4rem;
  background: white;
  font-family: "Roboto Condensed";
  font-weight: 400;
  color: rgb(73, 142, 252);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  border-bottom: 1px solid rgb(175, 175, 175);
}

h1 {
  font-size: 2rem;
  letter-spacing: 10px;
}

h3,
h4 {
  font-family: "PT Serif";
  width: 100;
}

#price {
  font-family: "Raleway";
  font-size: 1rem;
}

section {
  width: 80%;
  height: 70%;
  background: white;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 4px;
  box-shadow: 1px 8px 5px -7px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 8px 5px -7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 8px 5px -7px rgba(0, 0, 0, 0.5);
}

canvas {
  width: 70%;
  height: 100%;
  background: none;
  border-radius: 4px;
  border: none;
  outline: none;
}

#productDetails {
  width: 30%;
  height: 100%;
  background: white;
  font-family: "Raleway";
  padding: 1rem;
}

#description {
  width: 100%;
  height: 70%;
  background: none;
  margin-top: 2rem;
}

button {
  width: 100%;
  height: 2rem;
  background: black;
  font-family: "Roboto Condensed";
  font-size: 1rem;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
