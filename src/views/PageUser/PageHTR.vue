<template>
  <div class="bg">
    <div class="container grid-center ">
      <center class="mt-5"><h1>กรอกประวัติส่วนตัว</h1></center>
      <div class="card p-5 grid-center mg-tb">
        <div class="card-body text-center">
          <h2 class=" mb-5 text-left g">
            ประวัติส่วนตัว
          </h2>
          <div></div>
          <div class="form-group">
            <div class="logoContainer">
              <img
                src="http://img1.wikia.nocookie.net/__cb20130901213905/battlebears/images/9/98/Team-icon-placeholder.png"
              />
            </div>
            <div class="fileContainer sprite">
              <span>choose file</span>
              <input type="file" value="Choose File" />
            </div>
          </div>
          <div class="form-group">
            <input
              type="name"
              placeholder="ชื่อ"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <input
              type="name"
              class="form-control"
              placeholder="นามสกุล"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-grou">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio
                class="text-left g"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="MAN"
                >ชาย</b-form-radio
              >
              <b-form-radio
                class="text-left g"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="MEN"
                >หญิง</b-form-radio
              >
            </b-form-group>
          </div>
          <div class="form-group">
            <div>
              <b-form-datepicker
                class="g text-left"
                v-model="value"
                placeholder="วันเกิด"
                :date-disabled-fn="dateDisabled"
                locale="en"
              ></b-form-datepicker>
            </div>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="เบอร์โทรติดต่อ"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="อีเมลติดต่อ"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group my-5">
            <b-form-textarea
              id="textarea-rows"
              placeholder="ที่อยู่"
              rows="8"
            ></b-form-textarea>
          </div>
          <div class="form-group">
            <b-form-textarea
              id="textarea-rows"
              placeholder="เกี่ยวกับตัวเอง"
              rows="8"
            ></b-form-textarea>
          </div>
          <div class="form-group">
            <div>
              <b-form-radio
                class="text-left g"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                >ยอมรับ</b-form-radio
              >
            </div>
          </div>
          <div class="col-12">
            <b-button class="btn-sm" variant="primary">สมัครงาน</b-button>
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
.pd-m {
  padding-right: 500px;
}
.pd-n {
  padding-right: 490px;
}
.grid-center {
  overflow: none;
  display: grid;
  align-items: center;
  background-size: cover;
  background-position: center;
  max-width: 700px;
  width: 100%;
  text-align: center;
}
.img-bg {
  background-size: 40% 40%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  width: 40%;
  height: 40px;
}
.logoContainer {
  width: 140px;
  height: 151px;
  margin: 15px auto 0 auto;
  /*background: url(http://img1.wikia.nocookie.net/__cb20130901213905/battlebears/images/9/98/Team-icon-placeholder.png) no-repeat 0 0;*/
  padding: 11px 10px 21px 10px;
  text-align: center;
  line-height: 120px;
}
.logoContainer img {
  max-width: 100%;
}
.fileContainer {
  background: #ccc; /* you can give it background img as well or any style you want*/
  width: 202px;
  height: 31px;
  overflow: hidden;
  position: relative;
  font-size: 16px;
  line-height: 31px;
  color: #434343;
  padding: 0px 41px 0 53px;
  margin: 0 auto 60px auto;
  cursor: pointer !important;
}
.fileContainer span {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
.fileContainer input[type="file"] {
  opacity: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  cursor: pointer;
}
.txt-c {
  color: rgb(250, 130, 17);
}
img {
  height: 100%;
  width: 100%;
  background-size: cover !important;
  top: 0;

  // position: absolute;
}
.bg-member {
  background-color: #ffffff;
}
.custom-m {
  margin-top: 6rem;
  margin-bottom: 10rem;
}
.mg-l {
  margin-top: 3px;
  margin-left: 150px;
}
.bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  // background-image: url("E:/project-01/newjob-UI/public/images/162.svg");
  background-color: rgb(243, 245, 245);
  width: 100%;
}
.mg-tb {
  margin: 0rem 0 10rem 0;
}
.tl {
  text-align: center !important;
}
// @media (max-width: 768px) {
//   .grid-center {
//     max-width: 400px;
//   }
// }
.g {
  color: #80807f;
}
.btn-sm {
  width: 150px;
  height: 40px;
}
</style>
