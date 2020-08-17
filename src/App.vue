<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <div class="flex justify-center pt-10">
      <span>apples</span>
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>
