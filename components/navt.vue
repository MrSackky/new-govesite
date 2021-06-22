<template>
  <v-app-bar fixed>
    <v-col class="col-4">
      <v-card-title>
        <div class="logo-btn d-none d-md-inline-flex">
          <a class="navbar-brand" href="/">
            <img
              class="mt-1"
              src="../assets/src/Logo-newgovesite.gif"
              alt=""
              height="65px"
              width="auto"
          /></a>
        </div>
      </v-card-title>
    </v-col>
    <v-col>
      <v-toolbar-items class="hidden-md-and-down">
        <v-col>
          <div class="btn text-center mt-2">
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
        <v-col>
          <div class="text-right">
            <a href="/login" class="text-decoration-none black--text mr-1">
              เข้าสู่ระบบ </a
            >|
            <v-btn to="/register" class="success mx-2"> สมัครใช้งาน </v-btn>
          </div>
        </v-col>
      </v-toolbar-items>
    </v-col>
    <div class="hidden-md-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list class="responsiveMenu">
          <v-list-item>
            <v-btn to="/" color="primary" style="width: 100%">
              หน้าหลัก
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text href="#spot" style="width: 100%"
              >คุณสมบัติ</v-btn
            >
          </v-list-item>
          <v-list-item>
            <v-btn text
              href="#pricing" style="width: 100%"
              >แพคเกจ</v-btn
            >
          </v-list-item>
          <v-list-item>
            <v-btn text
              href="#contact" style="width: 100%"
              >ติดต่อเรา</v-btn
            >
          </v-list-item>
          <v-list-item>
            <v-btn to="/login" color="green darken-4" class="white--text" style="width: 100%">
              เข้าสู่ระบบ
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn to="/register" class="success" style="width: 100%">
              สมัครใช้งาน
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "navt"
};
</script>

<style>
@import "../assets/css/navbar.css";
</style>
