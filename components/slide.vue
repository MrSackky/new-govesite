<template>
  <div class="slide mb-3 mt-16" id="slide">
    <!-- <navbars /> -->
    <navt/>
    <v-row class="col-right grey lighten-4">
      <v-col class="grey lighten-2 rounded-r-xl">
        <div class="text-right mt-16 mb-16 mr-8">
          <h1 class="head mb-4">ระบบเว็บไซต์หน่วยงานสำเร็จรูป</h1>
          <p>
            สร้างไซต์หน่วยงานท่านได้ตัวเอง ง่าย เร็ว สวยงาม<br />MANAGE YOUR
            ORGANIZATION , EASY , FAST , BEAUTIFUL
          </p>
          <v-btn class="success mt-4 mb-4" to="/register">ทดลองใช้งาน</v-btn>
          <p class="red--text">* สมัครใช้งานวันนี้ทดลองใช้ฟรี 30วัน</p>
        </div>
      </v-col>
      <v-col class="col-left d-none d-md-flex">
        <v-layout justify-center align-center>
          <img
            class="picleft"
            width="400px"
            height="320px"
            src="../assets/src/slidehome.png"
          />
        </v-layout>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import navbars from "~/components/navbars.vue";
import navt from "~/components/navt.vue";

export default {
  name: "slide",
  components: {
    // navbars,
    navt
  },
};
</script>