<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import navbar from "../src/components/layout/navbar";
import Footer from "../src/components/layout/Footer";
export default Vue.extend({
  components: {
    navbar,
    Footer
  }
});
</script>
