<template>
  <div>
    <div class=" container">
      <h1 class="my-5">มาเป็นส่วนหนึ่งของเรา JOBCT</h1>
      <div class="row  ">
        <div class="col-xl-6 col-md-6 col-sm-12">
          <div class="">
            <!-- <img
              src="@/assets/images/2152021.svg"
              alt=""
              class="d-block mx-auto mb-4"
            /> -->
            <img src="" alt="" class="d-block mx-auto mb-4" />
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12 mb-5">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body text-center p-5">
                  <h2 class="text-left  mb-4">
                    สมัครสมาชิกสำหรับบริษัท
                  </h2>
                  <div class="form-group">
                    <input
                      type="name"
                      placeholder="ชื่อสมาชิค"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="Password"
                      class="form-control"
                      placeholder="รหัสผ่าน"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group mb-5">
                    <input
                      type="Password"
                      class="form-control"
                      placeholder="ป้อนรหัสผ่านอีกครั้ง"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="ชื่อบริษัท"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="ธุรกิจเกี่ยวกับ"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="ชื่อผู้ติดต่อ"
                      id="exampleInputPassword1"
                    />
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
                  <div class="form-group form-check text-left ml-1">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      placeholder="Recipient's username"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label " for="exampleCheck1"
                      >ยอมรับ</label
                    >
                  </div>
                  <div class="col-12">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg mb-3 text-left"
                    >
                      สมัครสมาชิก
                    </button>
                  </div>
                  <div class="text-lift text-center">
                    เป็นสมาชิคอยู่แล้ว ?
                    <router-link to="/PageLogin"> เข้าสู่ระบบ</router-link>
                  </div>
                </div>
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
export default Vue.extend({
  data() {
    return {
      pageimgs: [{ id: "1", url: "images/aia.jpg" }],
    };
  },
});
</script>

<style lang="scss" scoped>
.img-bg {
  background-size: 40% 40%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  width: 40%;
  height: 40px;
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
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  margin-top: 6rem;
  margin-bottom: 10rem;
}
</style>
