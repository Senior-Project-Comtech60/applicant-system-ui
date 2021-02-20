<template>
  <div>
    <GetStart></GetStart>
    <div class="container">
      <div class="row">
        <div class="col-12 txt-mg">
          <h3>TOP COMPANIES</h3>
        </div>
        <div class="col-12">
          <TopCompanies class="mx-1" :company="company"></TopCompanies>
        </div>
        <div class="col-12 ">
          <Adrertise :adrertise="adrertise"></Adrertise>
        </div>
        <div class="col-12"><Document></Document></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TopCompanies from "../components/jobindex/com.vue";
import Adrertise from "../components/jobindex/Adrertise.vue";
import GetStart from "../components/jobindex/GetStart.vue";
import Document from "../components/jobindex/Document.vue";
export default Vue.extend({
  components: {
    TopCompanies,
    Adrertise,
    GetStart,
    Document
  },
  data() {
    const company = [
      {
        id: "1",
        url: "images/NewFuture.jpg",
        title: "พรรคอนาคตใหม่",
        desc: "เปิดรับสมัครหลายอัตรา"
      },
      {
        id: "2",
        url: "images/Aia.jpg",
        title: "บริษัทเอไอเอประกันภัย",
        desc: "เปิดรับสมัครหลายอัตรา"
      },
      {
        id: "3",
        url: "images/Sing.jpg",
        title: "บริษัทน้ำสิง",
        desc: "เปิดรับสมัครหลายอัตรา"
      },
      {
        id: "4",
        url: "images/Makro.jpg",
        title: "บริษัทแม็คโคร จำกัด",
        desc: "เปิดรับสมัครหลายอัตรา"
      }
    ];
    const adrertise = [
      {
        id: "1",
        url: "images/275953.jpeg"
      },
      {
        id: "2",
        url: "images/69223.jpeg"
      }
    ];
    return {
      company,
      adrertise
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
.font-size-index-header {
  font-size: 24px;
  font-weight: 800;
}
.txt-mg {
  margin-top: 6rem;
  margin-bottom: 2rem;
}
</style>
