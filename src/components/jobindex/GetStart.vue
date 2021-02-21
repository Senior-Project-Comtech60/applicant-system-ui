<template>
  <div>
    <div class="img-bg text-center ma">
      <div class="overlay mg-bt">
        <div class="mb-3">
          <h1 class="txt-color">หางานง่าย ๆ <code>คลิ๊ก</code> เลย JOBCT</h1>
        </div>
        <div class="mb-5"><p>เพื่องานที่เหมาะสมกับคุณ</p></div>
        <router-link to="/PageSearch">
          <button type="button" class="btn btn-warnings btn-lg">
            Get start
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.img-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  width: 100%;
  height: 600px;
  background-image: url("/images/590016.jpg");
}
.overlay {
  background-color: rgba(0, 0, 0, 0.39);
  height: 600px;
}
.mg-bt {
  padding-top: 12rem;
  h1 {
    font-size: 65px;
    color: rgb(255, 255, 255);
  }
  p {
    font-size: 25px;
    color: rgba(241, 241, 241, 0.876);
  }
}
code {
  font-size: 65px;
  color: #fd8e4e;
  font-weight: bold;
}
.btn-warnings {
  color: rgb(253, 253, 253);
  background-color: rgb(254, 109, 67);
  border-radius: 25px;
  padding-left: 60px;
  padding-right: 60px;
  &:hover {
    color: #fff;
    background-color: rgb(246, 70, 70);
  }
}
</style>
