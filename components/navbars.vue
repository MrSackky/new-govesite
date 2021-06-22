<template>
  <v-app-bar flat fixed>
    <v-row>
      <v-col>
        <div class="logo-btn">
          <a class="navbar-brand" href="/">
            <img
              class="mt-1"
              src="../assets/src/Logo-newgovesite.gif"
              alt=""
              height="65px"
              width="auto"
          /></a>
        </div>
      </v-col>
      <v-card-actions class="mx-auto">
        <v-col class="">
          <div class="btn">
            <a class="text-decoration-none black--text mr-2 ml-2" href="#spot"
              >คุณสมบัติ</a
            >
            <a
              class="text-decoration-none black--text mr-2 ml-2"
              href="#pricing"
              >แพคเกจ</a
            >
            <a
              class="text-decoration-none black--text mr-2 ml-2"
              href="#contact"
              >ติดต่อเรา</a
            >
          </div>
        </v-col>
      </v-card-actions>
      <v-col class="mt-6">
        <div class="text-right">
          <NuxtLink to="../login" class="text-decoration-none black--text mr-1">
            เข้าสู่ระบบ </NuxtLink
          >|
          <v-btn to="/register" class="success mx-2"> สมัครใช้งาน </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
@import "../assets/css/navbar.css";
</style>
