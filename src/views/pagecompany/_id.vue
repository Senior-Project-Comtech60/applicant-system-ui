<template>
  <div>
    <div class="container">
      <div>
        <img
          :src="`/${$route.params.company.seturl}`"
          alt=""
          class=" mt-4 mx-auto "
        />
      </div>
      <h3 class="ml-3 mt-5 mb-5">{{ $route.params.company.company }}</h3>
      <div class="bg-c">
        <div class="row">
          <div class="col-12">
            <p class="text-right t">{{ $route.params.company.time }}</p>
          </div>
          <div class="col-12">
            <h3 class="ml-3">{{ $route.params.company.company }}</h3>
          </div>

          <!-- <div class="col-12 ml-3"><h5><i class="fas fa-map-marker-alt mr-3 ml-3"></i>   สถาน์ที่สมัครงาน</h5>       <p>สถาน์ที่สมัครงาน</p></div>

          <div class="col-3 ml-3"><h5><i class="far fa-money-bill-alt  mr-2 ml-3"></i>   เงินเดือน</h5></div>
          <div class="col-8"><p>5000000</p></div>
          <div class="col-3 ml-3"><h5><i class="fas fa-user  mr-3 ml-3"></i> อัตรา</h5></div>
          <div class="col-7">1</div> -->
          <div class="col-7">
            <p>
              <i class="fas fa-map-marker-alt ml-4 mr-1" />
              สถาน์ที่สมัครงาน
            </p>
          </div>
          <div class="col-5">
            <p>{{ $route.params.company.options.province }}</p>
          </div>
          <div class="col-7 ">
            <p>
              <i class="far fa-money-bill-alt ml-4 mr-1" />
              เงินเดือน
            </p>
          </div>
          <div class="col-5">
            <p>{{ $route.params.company.options.salary }}</p>
          </div>
          <div class="col-7">
            <p>
              <i class="fas fa-user  ml-4 mr-1" />
              อัตรา
            </p>
          </div>
          <div class="col-5">
            <p class="tb">{{ $route.params.company.options.rate }}</p>
          </div>
          <div class="col-12  text-right">
            <router-link
              to="#companyDetail"
              type="button"
              class="btn btn-warning btn-lg mr-3 mb-3"
            >
              สมัครงาน
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-4">
          <p>
            {{ $route.params.company.options.paragrap }}
          </p>
        </div>
        <div class="col mb-3 mt-4">
          <p>
            {{ $route.params.company.options.padparagrap }}
          </p>
        </div>
      </div>
      <div class="">
        <h4>สวัสดิการ</h4>
        <li>ประกันสังคม</li>
      </div>
      <div class="mt-4 ">
        <h4>ติดต่อเรา</h4>
        <p>ฝ่ายบุคคล</p>
        <p>
          JMAX RECRUITMENT Co.,Ltd. 50 GMM Grammy Place, Unit 1306, Sukhumvit 21
          Rd. (Asoke)
        </p>
        <p>
          แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 โทรศัพท์ : 02-262-0763-5
          แฟกซ์ : 02-262-0766
        </p>
        <p>เว็บไซต์ : http://www.jmax.co.th</p>
      </div>
      <div class="mb-4 "></div>
      <h4>วิธีสมัครงาน</h4>
      <div>
        <button type="button" class="btn btn-ct ">
          <i class="far fa-id-card"></i> สมัครงานด่วน
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-ct ">
          <i class="far fa-id-card"></i> ส่งไฟล์ประวัติ
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-ct ">
          <i class="far fa-id-card"></i> ส่งอีเมล
        </button>
      </div>
      <div id="companyDetail">
        <button type="button" class="btn btn-ct mb-5">
          <i class="far fa-id-card"></i> กรอกประวัติแบบย่อ
        </button>
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
  width: auto;
  height: 280px;
}
.pt1-fix {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  transform: translate3d(-50%, -50%, 0px);
  top: 50%;
  left: 50%;
  border-radius: 8px;
}
.bg-c {
  background-color: rgb(227, 231, 233);
  border-radius: px;
  width: px;
}
.tm {
  border-radius: 9px;
  margin-top: 50px;
  margin-bottom: 40px;
}
.t {
  margin-top: 20px;
  margin-right: 20px;
}

.mg-t {
  margin-bottom: 140px;
}
.mg-bl {
  margin-bottom: 14;
}
.btn-ct {
  background-color: rgb(255, 190, 15);
  width: 250px;
  text-align: left;
  font-family: Superstore;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 8px;
  &:hover {
    color: #fff;
    background-color: rgb(246, 70, 70);
  }
}
</style>
