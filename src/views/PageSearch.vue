<template>
  <div>
    <div class="container">
      <div class="row md-4">
        <div class="col-md-4 col-12 mt-4">
          <div class="card">
            <div class="card-body">
              <div class="title mb-1">
                {{ $t("content.pagesearch.pagesearchpath1") }}
              </div>
              <div>
                <b-form-input list="my-list-id"></b-form-input>

                <datalist id="my-list-id">
                  <option v-for="size in sizes" :key="size"> {{ size }}</option>
                </datalist>
              </div>
              <div class="title mb-1">
                {{ $t("content.pagesearch.pagesearchpath2") }}
              </div>
              <div>
                <b-form-input list="my-list-id2"></b-form-input>

                <datalist id="my-list-id2">
                  <option v-for="tests in test" :key="tests">
                    {{ tests }}
                  </option>
                </datalist>
              </div>
              <div class="title mt-2">
                {{ $t("content.pagesearch.pagesearchpath3") }}
              </div>
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
              <div class="card hover" @click="push(jobsearch)">
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
          url: "images/aia.jpg",
          // seturl:"images/69223.jpeg",
          company: "บริษัทประกันภัยAIA",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "11.สค.64",
          options: {
            province: "กรุงเทพ ฯ",
            salary: "10000",
            atwork: "บ้าน",
            interview: "ออลไลน์",
            rate: "2",
            paragrap: "อาชีพที่คุณใฝ่ฝัน เป็นจริงได้ที่เอไอเอ",
            padparagrap:
              "พบประสบการณ์การทำงานที่แตกต่าง ที่เปิดให้คุณได้เติบโตไปกับบริษัทประกันชีวิตที่มีความเป็นเลิศในทุกๆ ด้าน กับตำแหน่งงานที่หลากหลาย ไม่ว่าจะเป็นงานด้านบริหาร การวางแผนกลยุทธ์ และงานด้านบริการลูกค้า พร้อมประตูสู่โอกาสสำคัญที่จะได้ร่วมงานกับเอไอเอ ในระดับภูมิภาคเอเชียแปซิฟิก "
          }
        },
        {
          id: "2",
          url: "images/sing.jpg",
          company: "บริษัทสิงห์ คอร์เปอเรชั่น จํากัด",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "10:30",
          options: {
            province: "ปทุมธานี",
            salary: "20000",
            atwork: "บ้าน",
            interview: "ออลไลน์",
            rate: "2",
            paragrap:
              "บริษัท สิงห์ คอร์เปอเรชั่น จำกัด เป็นบริษัทในเครือที่สำคัญของ บริษัท บุญรอดบริวเวอรี่ จำกัด ก่อตั้งขึ้นเมื่อปี 2544 เพื่อบริหารการดำเนินงานของบริษัทในเครือบุญรอดกว่า 150 บริษัท และรายงานต่อที่ประชุมคณะกรรมการของบริษัท บุญรอดบริวเวอรี่ จำกัด",
            padparagrap:
              "บริษัท บุญรอด บริวเวอรี่ จำกัด ได้จัดการเปลี่ยนแปลงบริษัทครั้งใหญ่เมื่อปี 2543 และได้ก่อตั้ง บริษัท สิงห์ คอร์เปอเรชั่น จำกัด ขึ้นในปีต่อมา โดยบริษัท บุญรอดฯ ปรับสภาพเป็นบริษัทโฮลดิ้ง มอบหมายให้การดำเนินธุรกิจประจำวันอยู่ภายใต้การดำเนินการของแต่ละบริษัท โดยรับนโยบายจาก สิงห์ คอร์เปอเรชั่น เป็นผลให้มีการเจริญเติบโตอย่างเร็ว ขยายธุรกิจไปในด้านอาหาร บรรจุภัณฑ์ อสังหาริมทรัพย์ และอื่นๆ"
          }
        },
        {
          id: "3",
          url: "images/Makro.jpg",
          company: "บริษัท สยามแม็คโคร จำกัด (มหาชน)",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "22.ธค.64",
          options: {
            province: "อุบลธานี",
            salary: "30000",
            atwork: "บ้าน",
            interview: "ออนไลน์",
            rate: "6",
            paragrap:
              "บริษัท สิงห์ คอร์เปอเรชั่น จำกัด เป็นบริษัทในเครือที่สำคัญของ บริษัท บุญรอดบริวเวอรี่ จำกัด ก่อตั้งขึ้นเมื่อปี 2544 เพื่อบริหารการดำเนินงานของบริษัทในเครือบุญรอดกว่า 150 บริษัท และรายงานต่อที่ประชุมคณะกรรมการของบริษัท บุญรอดบริวเวอรี่ จำกัด",
            padparagrap:
              "บริษัท บุญรอด บริวเวอรี่ จำกัด ได้จัดการเปลี่ยนแปลงบริษัทครั้งใหญ่เมื่อปี 2543 และได้ก่อตั้ง บริษัท สิงห์ คอร์เปอเรชั่น จำกัด ขึ้นในปีต่อมา โดยบริษัท บุญรอดฯ ปรับสภาพเป็นบริษัทโฮลดิ้ง มอบหมายให้การดำเนินธุรกิจประจำวันอยู่ภายใต้การดำเนินการของแต่ละบริษัท โดยรับนโยบายจาก สิงห์ คอร์เปอเรชั่น เป็นผลให้มีการเจริญเติบโตอย่างเร็ว ขยายธุรกิจไปในด้านอาหาร บรรจุภัณฑ์ อสังหาริมทรัพย์ และอื่นๆ"
          }
        },
        {
          id: "4",
          url: "images/gold-foil-logo-mockup_160403-97.jpg",
          company: "บริษัทโลโก จำกัด",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "21.กย.64",
          options: {
            province: "กรุงเทพฯ",
            salary: "40000",
            atwork: "บ้าน",
            interview: "ออนไลน์",
            rate: "3",
            paragrap:
              "ดูรายละเอียดงานเป็นบริษัทในเครือ A–Tech Solution (ประเทศเกาหลี)",
            padparagrap:
              "เปิดรับสมัครผู้ร่วมงานที่ต้องการความท้าทาย มีความมุ่งมั่นในการทำงาน มีความกล้าคิดอย่างสร้างสรรค์ และเติบโตไปพร้อมกับเรา"
          }
        },
        {
          id: "5",
          url: "images/golden-elegant-logo-with-frame_52683-13462.jpg",
          company: "เอมเดิลตี้ จำกัด",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "2.พย.64",
          options: {
            province: "สุโขทัย",
            salary: "35000",
            atwork: "บ้าน",
            interview: "ออลไลน์",
            rate: "5",
            paragrap:
              "ดูรายละเอียดงานบริษัทผลิตที่นอนและเครื่องนอนแบรนด์ชั้นนำของประเทศรามุ่งเน้นการนอนหลับที่เหนือระดับด้วยผลิตภัณฑ์เครื่องนอนคุณภาพสูง ที่ตอบสนองความต้องการสำหรับการนอนหลับที่ดีและผ่อนคลาย นอกจากนี้ยังมีการออกแบบที่หลากหลาย ดังนั้นการเลือกผลิตภัณฑ์เครื่องนอนที่ดีจะเป็นประโยชน์ต่อสุขภาพและคืนพลังให้กับทุกวันใหม่",
            padparagrap:
              "เวลาทำงาน 08:00 - 17:00 น.วันทำงาน จันทร์ - ศุกร์และ (เสาร์เว้นเสาร์) วันหยุดประจำปี 17 วัน"
          }
        },
        {
          id: "6",
          url: "images/yellowPages.png",
          company: "Yellow PAGES",
          jobcompany: "เปิดรับสมัครหลายอัตรา",
          time: "1.มก.64",
          options: {
            province: "สุโขทัย",
            salary: "10000",
            atwork: "บ้าน",
            interview: "ออลไลน์",
            rate: "1",
            paragrap:
              "แหล่งรวมข้อมูลธุรกิจออนไลน์ที่มากที่สุด สามารถค้นหาข้อมูลสินค้าและบริการ ข้อมูลแผนที่ธุรกิจได้ทันที รองรับทั้งภาษาไทยและภาษาอังกฤษ"
          }
        }
      ],
      sizes: ["กำลังอยู่ในช่วงทดสอบ"],
      test: ["กำลังอยู่ในช่วงทดสอบ"]
    };
  },
  methods: {
    push(data) {
      this.$router.push({
        name: "_id",
        params: { id: data.id, company: data }
      });
    }
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
.hover {
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
