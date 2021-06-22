<template>
  <v-row class="green darken-4">
    <v-row class="text-center mt-16 mb-16">
      <v-col class="d-none d-md-flex">
          <v-layout justify-center align-center>
        <div class="img">
          <img
            width="550px"
            height="490px"
            src="../assets/src/feature.png"
          />
        </div>
          </v-layout>
      </v-col>
      <v-col class="ml-4 mr-4">
        <div class="head white--text text-left mt-6">
          <h2>กระดานข่าว คลังเอกสารราชการ</h2>
          <p class="mt-2 mb-4">
            ระบบกระดานเว็บบอร์ด สำหรับการสนทนาผ่านเว็บบอร์ด
            <br />และคลังเอกสารสำหรับประชาสัมพันธ์ และให้ประชาชนดาวนโหลด
          </p>
          <hr width="95%" class="mt-4 mb-8" />
          <h2>ประกาศประกวดราคา ข่าวประชาสัมพันธ์</h2>
          <p class="mt-3">
            ระบบเพิ่มเนื้อหาเว็บ เพื่อให้ประชาชนเข้าถึงข้อมูล ข่าวสารของหน่วยงาน
            เช่น<br />
            การประกวดราคา การประชาสัมพันธ์
          </p>
          <hr width="95%" class="mt-4 mb-8" />
          <h2>ระบบร้องทุกข์และสำรวจความคิดเห็น</h2>
          <p class="mt-3">
            ระบบรับข้อมูลต่างๆ จากประชาชนผู้เข้าชมเว็บไซต์ เช่น การร้องทุกข์<br />
            ระบบสำรวจความคิดเห็น
          </p>
          <hr width="95%" class="mt-4 mb-8" />
        </div>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "feaure",
};
</script>