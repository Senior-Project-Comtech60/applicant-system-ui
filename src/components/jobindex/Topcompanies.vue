<template>
  <div>
    <div class="row">
      <div class="col-3" v-for="companie in company" :key="companie.id">
        <div class="card">
          <img :src="companie.url" class="card-img-top " alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ companie.title }}</h5>
            <p class="card-text">{{ companie.desc }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    company: {
      type: [Array],
      return: {}
    }
  }
});
</script>

<style lang="scss" scoped></style>
