<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Susunaja1" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  components: { HelloWorld }
});
</script>

<style lang="scss" scoped>
.home01 {
  font-size: 5rem;
  color: red;
}
#home-id {
  font-size: 5rem;
  color: #7bd12e;
}
</style>
