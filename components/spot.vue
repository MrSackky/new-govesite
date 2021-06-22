<template>
  <div class="spot pa-16" id="spot">
    <div class="content mb-8">
      <div class="head1 mt-5 text-center">
        <h1 class="head mt-8 mb-4">
          เว็บไซต์หน่วยงานสำเร็จรูป ใช้งานง่าย ไม่ยุ่งยาก
        </h1>
        <p class="mr-4 ml-4">
          GOVERNMENT icti เราเป็นเว็บไซต์หน่วยงานสำเร็จรูปสำหรับหน่วยงานราชการ
          เว็บไซต์ อปท เช่น เทศบาล องค์การบริหารส่วนตำบล
          โรงพยาบาลส่งเสริมสุขภาพตำบล เป็นต้น<br />สามารถสร้างไซต์หน่วยงานท่านได้ตัวเอง
          ง่าย เร็ว สวยงาม ไม่ยุ่งยาก ครบตามมาตราฐานเว็บไซต์หน่วยงานภาครัฐ
          เป็นระบบที่ถูกออกแบบขึ้นมาเพื่อเป็นเว็บไซต์หน่วยงานราชการต่างๆโดยเฉพาะ<br />
          ไม่ใช่เว็บไซต์ที่สร้างขึ้นมาด้วย WordPress หรือ แพลตฟอร์มอื่นๆ
          และมีการจัดเก็บข้อมูลบน Cloud ที่เป็นมาตราฐาน
        </p>
      </div>
      <div class="content mt-10">
        <v-row class="text-center">
          <v-col>
            <div class="d-none d-md-block">
              <img
                width="100px"
                height="100px"
                src="../assets/src/icon1.png"
              />
            </div>
            <div class="content-1 mt-4">
              <b>Responsive Website</b>
              <p class="mt-4">
                รองรับหน้าจออุปกรณ์ทุกชนิด
                <br />
                แสดงผลได้อย่าง "สมบูรณ์แบบ"
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="d-none d-md-block">
              <img
                width="100px"
                height="100px"
                src="../assets/src/icon2.png"
              />
            </div>
            <div class="content-2 mt-4">
              <b>แก้ไขข้อมูลง่าย</b>
              <p class="mt-4">
                แก้ไขข้อมูลด้วยตัวเอง
                <br />
                ไม่ต้องเขียนโปรแกรม
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="d-none d-md-block">
              <img
                width="100px"
                height="100px"
                src="../assets/src/icon3.png"
              />
            </div>
            <div class="content-3 mt-4">
              <b>เว็บไซต์สวย ทันสมัย</b>
              <p class="mt-4">
                TEMPLATE ที่ออกแบบมาอย่างลงตัว<br />มีความเป็นมืออาชีพ
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="d-none d-md-block">
              <img
                width="100px"
                height="100px"
                src="../assets/src/icon4.png"
              />
            </div>
            <div class="content-4 mt-4">
              <b>รองรับการทำ SEO</b>
              <p class="mt-4">ให้เว็บไซต์ติดอันดับการค้นหา</p>
            </div>
          </v-col>
          <v-col>
            <div class="d-none d-md-block">
              <img
                width="100px"
                height="100px"
                src="../assets/src/icon5.png"
              />
            </div>
            <div class="content-4 mt-4">
              <b>มีทีมงาน support</b>
              <p class="mt-4">
                มีทีมงานให้ความช่วยเหลือ
                <br />
                ตลอดการใช้งาน
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
      <br />
      <div class="container text-center">
        <v-btn type="button" class="success" to="/register"> ทดลองใช้งาน </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spot"
};
</script>
