<template>
  <div>
    <div class="container-fluid bg-member">
      <div class=" container">
        <div class="row my-5 ml-5">
          <div class="col-6" v-for="pageimg in pageimgs" :key="pageimg.id">
            <div class="row">
              <div class="col-4">
                <img
                  src="images/132312312.png"
                  alt=""
                  class="d-block mx-auto"
                />
              </div>
              <div class="col-8"></div>
              <div class="col-4">
                <img src="images/aia.jpg" alt="" class="d-block mx-auto" />
              </div>
              <div class="col-8"></div>
              <div class="col-4">
                <img src="images/aia.jpg" alt="" class="d-block mx-auto" />
              </div>
              <div class="col-8"></div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-body text-center p-5">
                    <h2 class="text-left  mb-4">
                      สมัครสมาชิกสำหรับผู้สมัครงาน
                    </h2>
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
                        type="email"
                        class="form-control"
                        placeholder="นามสกุล"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="เลขบัตรประชาชน"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="อีเมล"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="เบอร์โทร"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="รหัสผ่าน"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="ยืนยันรหัสผ่าน"
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
                      <a class="txt-c" href=""> เข้าสู่ระบบ</a>
                    </div>
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
      pageimgs: [{ id: "1", url: "images/aia.jpg" }]
    };
  }
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
  max-height: 120px;
  max-width: 120;
  height: 80%;
  width: 80%;
  background-size: cover !important;
  top: 0;

  // position: absolute;
}
.bg-member {
  background-color: #ffffff;
}
</style>
