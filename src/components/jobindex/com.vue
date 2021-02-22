<template>
  <div>
    <div class="m-1 mb-5">
      <div class="row ">
        <div
          class="col-xl-3 col-lg-6 com-md-12  col-sm-6 col-12 my-2"
          v-for="companie in company"
          :key="companie.id"
        >
          <div class="card card-deck mx-1">
            <img
              :src="companie.url"
              class="card-img-top grid-center p-4"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">{{ companie.title }}</h5>
              <p class="card-text">
                {{ $i18n.locale === "en" ? companie.desc.en: companie.desc.th }}
              </p>
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
      return: {},
    },
  },
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
.grid-center {
  overflow: none;
  display: grid;
  align-items: center;
  background-size: cover;
  background-position: center;
  max-width: 700px;
  width: 100%;
}
</style>
