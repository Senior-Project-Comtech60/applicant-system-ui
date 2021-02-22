<template>
  <div>
    <div class="coutiner">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6">
          <img
            src="images/undraw_approve_qwp7.svg"
            alt=""
            class="d-block mx-auto"
          />
        </div>
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6 m-t">
          <div class="">
            <code> <h3>{{ $t("content.paragrap.paragrap1") }}</h3></code>
            <p>
              {{ $t("content.paragrap.paragrap2") }}
            </p>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6 m-t">
          <code><h3> {{ $t("content.paragrap.paragrap3") }}</h3></code
          ><P> {{ $t("content.paragrap.paragrap3") }}
          </P>
        </div>
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6">
          <img
            src="images/undraw_Team_chat_re_vbq1.svg"
            alt=""
            class="d-block mx-auto"
          />
        </div>
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6 ">
          <img
            src="images/undraw_stand_out_1oag.svg"
            alt=""
            class="d-block mx-auto"
          />
        </div>
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6 m-t">
          <code><h3> {{ $t("content.paragrap.paragrap3") }}</h3></code>
          <p>
          {{ $t("content.paragrap.paragrap4") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
img {
  height: 75%;
  width: 75%;
  background-size: cover !important;
  top: 0;
  margin-bottom: 150px;

  // position: absolute;
}
.mg-t {
  margin-top: px;
}
.mg-l {
  margin-bottom: 150px;
}
.test {
  max-width: 20px;
}
p {
  font-size: 20px;
}
.m-t {
  margin-top: 120px;
}
</style>
