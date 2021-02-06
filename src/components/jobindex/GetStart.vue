<template>
  <div>
    <div class="img-bg text-center ma">
      <div class="overlay mg-bt">
        <h1>หางานง่าย ๆ <code>คลิ๊ก</code> เลย JOBCT</h1>
        <p>เพื่องานที่เหมาะสมกับคุณ</p>
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
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  width: 100%;
  height: 600px;
  background-image: url("E:/project-01/newjob-UI/public/images/590016.jpg");
}
.overlay {
  background-color: rgba(0, 0, 0, 0.39);
  height: 600px;
}
.mg-bt {
  padding-top: 12rem;
  h1 {
    font-size: 45px;
    color: rgb(49, 48, 48);
  }
  p {
    font-size: 18px;
  }
}
code {
  font-size: 45px;
  color: rgb(254, 109, 67);
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
