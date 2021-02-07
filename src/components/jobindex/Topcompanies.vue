<template>
  <div>
    <div class="m-1 mb-5">
      <div class="row">
        <div class="col-3" v-for="companie in company" :key="companie.id">
          <div class="card">
            <img :src="companie.url" class="card-img-top " alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ companie.title }}</h5>
              <p class="card-text">{{ companie.desc }}</p>
            </div>
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

<style lang="scss" scoped>
.card {
  border-radius: 20px;
  box-shadow: 0px 4px 8px #84caf82a;
  border: 1px solid #e3eeee;
}
.card-img-top {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
