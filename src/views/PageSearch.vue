<template>
  <div>
    <div class="container">
      <div class="row md-4">
        <div class="col-md-4 col-12 mt-4">
          <div class="card">
            <div class="card-body">
              <div class="title mb-1">สถาน์ที่คุณต้องการ</div>
              <div>
                <b-form-input list="my-list-id"></b-form-input>

                <datalist id="my-list-id">
                  <option v-for="size in sizes" :key="size"> {{ size }}</option>
                </datalist>
              </div>
              <div class="title mb-1">ประเภทงาน</div>
              <div>
                <b-form-input list="my-list-id2"></b-form-input>

                <datalist id="my-list-id2">
                  <option v-for="tests in test" :key="tests">
                    {{ tests }}
                  </option>
                </datalist>
              </div>
              <div class="title mt-2">คำที่คุณต้องการค้นหา</div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12 mt-4">
          <div
            class="row mb-4"
            v-for="jobsearch in jobsearchs"
            :key="jobsearch.id"
          >
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col text-left">{{ jobsearch.id }}</div>
                    <div class="col text-right">{{ jobsearch.time }}</div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <p>{{ jobsearch.company }}</p>
                      <p>{{ jobsearch.jobcompany }}</p>
                      <div class="row">
                        <div class="col-9">
                          <div class="row">
                            <div class="col-md-7 col-12 mb-1">
                              <i class="fas fa-search mr-3"></i
                              >{{ jobsearch.options.province }}
                            </div>
                            <div class="col-md-5 col-12 mb-1">
                              <i class="far fa-money-bill-alt mr-2"></i>
                              {{ jobsearch.options.salary }}
                            </div>
                            <div class="col-md-7 col-12 mb-1 ">
                              <i class="fas fa-home mr-2 "></i>
                              {{ jobsearch.options.atwork }}
                            </div>
                            <div class="col-md-5  col-12 mb-1">
                              <i class="fas fa-desktop mr-2"></i>
                              {{ jobsearch.options.interview }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-12 make-a-claim-img ">
                      <img
                        :src="jobsearch.url"
                        alt=""
                        class="d-block mx-auto"
                      />
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
  <!-- <div
            class="card"
            v-for="jobsearchs in jobsearch"
            :key="jobsearchs.id"
          > -->
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  component: {},
  data() {
    return {
      jobsearchs: [
        {
          id: "1",
          url: "images/NewFuture.jpg",
          company: "พรรคอนาคตใหม่",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "10:30",
          options: {
            province: "สุโขทัย",
            salary: "10000000",
            atwork: "บ้าน",
            interview: "ออลไลน์"
          }
        },
        {
          id: "2",
          url: "images/NewFuture.jpg",
          company: "พรรคอนาคตใหม่",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "10:30",
          options: {
            province: "สุโขทัย",
            salary: "10000",
            atwork: "บ้าน",
            interview: "ออลไลน์"
          }
        },
        {
          id: "3",
          url: "images/NewFuture.jpg",
          company: "พรรคอนาคตใหม่",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "10:30",
          options: {
            province: "สุโขทัย",
            salary: "10000",
            atwork: "บ้าน",
            interview: "ออลไลน์"
          }
        },
        {
          id: "3",
          url: "images/NewFuture.jpg",
          company: "พรรคอนาคตใหม่",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "10:30",
          options: {
            province: "สุโขทัย",
            salary: "10000",
            atwork: "บ้าน",
            interview: "ออลไลน์"
          }
        },
        {
          id: "3",
          url: "images/NewFuture.jpg",
          company: "พรรคอนาคตใหม่",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "10:30",
          options: {
            province: "สุโขทัย",
            salary: "10000",
            atwork: "บ้าน",
            interview: "ออลไลน์"
          }
        },
        {
          id: "3",
          url: "images/NewFuture.jpg",
          company: "พรรคอนาคตใหม่",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "10:30",
          options: {
            province: "สุโขทัย",
            salary: "10000",
            atwork: "บ้าน",
            interview: "ออลไลน์"
          }
        }
      ],
      sizes: ["Small", "Medium", "Large", "Extra Large", "din"],
      test: ["din", "shell", "oat", "nui", "tew"]
    };
  }
});
</script>

<style lang="scss" scoped>
// .make-a-claim-img {
//   // position: relative;
// }
img {
  max-height: 120px;
  max-width: 120px;
  height: 100%;
  width: 100%;
  background-size: cover !important;
  top: 0;

  // position: absolute;
}
</style>
