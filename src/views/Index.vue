<template>
  <div>
    <div class="container">
      <Topcompanies :company="company"></Topcompanies>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Topcompanies from "../components/jobindex/Topcompanies.vue";
export default Vue.extend({
  components: {
    Topcompanies
  },
  data() {
    const company = [
      {
        id: "1",
        url: "images/xxx.jpg",
        title: "CP",
        desc: "Casdasdaaaaaaland"
      },
      {
        id: "2",
        url: "images/xxx.jpg",
        title: "CP",
        desc: "Casdasdaaaaaaland"
      },
      {
        id: "3",
        url: "images/xxx.jpg",
        title: "CP",
        desc: "Casdasdaaaaaaland"
      },
      {
        id: "4",
        url: "images/xxx.jpg",
        title: "CP",
        desc: "Casdasdaaaaaaland"
      },
      {
        id: "5",
        url: "images/xxx.jpg",
        title: "CP",
        desc: "Casdasdaaaaaaland"
      },
      {
        id: "6",
        url: "images/xxx.jpg",
        title: "CP",
        desc: "Casdasdaaaaaaland"
      }
    ];
    return {
      company
    };
  }
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
