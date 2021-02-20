<template>
  <div>
    <div class="container ct">
      <div class="card my-5 ">
        <div class="card-body">
          <div class="c my-5"><h4>ส่งไฟล์ประวัติ</h4></div>
          <div>
            <div class="">
              <div>อีเมลของคุณ(สำหรับติดต่อกลับ)</div>
              <div class="mt-2">
                <b-form-input
                  v-model="text"
                  placeholder="ระบุอีเมลของคุณ"
                ></b-form-input>
              </div>
              <div class="c mt-5">
                <b-form-file id="file-small" size="sm" class="o"></b-form-file>
              </div>
              <div class="text-center mt-2">
                <label for="range-2"
                  ><p class="g">เฉพาะไฟล์รูปเท่านั้น</p></label
                >
              </div>
              <div>
                <b-form-radio
                  class="text-left  mt-5 mb-2"
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="B"
                  >บันทึกข้อมูลนี้สำหรับสมัครงานครั้งต่อไป</b-form-radio
                >
              </div>
              <div>
                <b-form-radio
                  class="text-left  my-4 "
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="B"
                  >ยอมรับ เงื่อนไขข้อตกลงการใช้บริการ และ นโยบายความเป็นส่วนตัว
                </b-form-radio>
              </div>
              <div class="c">
                <b-button class="btn-sm my-5" variant="primary"
                  >สมัครงาน</b-button
                >
              </div>
            </div>
          </div>
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
.g {
  color: #80807f;
  font-size: 12px;
}
.btn-sm {
  width: 150px;
  height: 40px;
}
.c {
  text-align: center;
}
.card {
  //   border-color:#ffffff;
  max-width: 100%;
  width: 100%;
}
.ct {
  overflow: none;
  display: grid;
  align-items: center;
  background-size: cover;
  background-position: center;
  max-width: 700px;
  width: 100%;
}
.o {
  width: 100px;
  height: 100px;
  border-radius: 60px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
  color: #47d3fd;
  border-color: #47d3fd;
}
</style>
