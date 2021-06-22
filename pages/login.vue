<template>
  <v-app
    ><div class="pa-16 mt-6">
      <v-card class="mx-auto mt-16 mb-16" style="width: 500px; height: 640px">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />
        <div class="content mt-4 mr-4 ml-4 mb-4">
          <div class="menu-list">
            <v-row
              ><v-col class="text-left mt-6 mb-16">
                <a
                  href="/"
                  class="text-decoration-none black--text mr-2 ml-2 grey--text"
                  ><v-icon color="grey"> mdi-arrow-left </v-icon
                  ><span> กลับหน้าหลัก </span>
                </a></v-col
              ><v-col class="text-right mt-6 mb-16">
                <p class="grey--text">
                  ยังไม่บัญชีผู้ใช้ ?
                  <a
                    href="/register"
                    class="text-decoration-none green--text mr-2 ml-2"
                  >
                    <b>สมัครสมาชิก</b>
                  </a>
                  <a href="#" class="text-decoration-none grey--text mr-2 ml-2">
                    <b>ลืมรหัสผ่าน?</b>
                  </a>
                </p>
              </v-col></v-row
            >
          </div>
          <v-form v-model="valid">
            <div class="ml-3 mr-3">
              <div class="card-body login-card-body">
                <h1 class="login-box-msg mb-3">เข้าสู่ระบบ</h1>
                <p class="login-box-msg grey--text">
                  เข้าสู่ระบบเพื่อใช้งานระบบเว็บไซต์หน่วยงานสำเร็จรูป
                </p>
              </div>
              <v-text-field
                outlined
                v-model="username"
                :rules="usernamerules"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                outlined
                type="password"
                v-model="password"
                :rules="passwordrules"
                label="Password"
                required
              ></v-text-field>
              <v-checkbox label="จดจำฉัน" type="checkbox"></v-checkbox>

              <v-btn
                class="white--text mb-4 mt-4 mr-2"
                style="width: 100%"
                type="submit"
                to="#"
                color="green darken-4"
                :disabled="!valid"
              >
                เข้าสู่ระบบ
              </v-btn>
              <a href="#" class="text-decoration-none black--text">
                <p class="grey--text text-center">ลืมรหัสผ่าน?</p>
              </a>
            </div>
          </v-form>
        </div>
      </v-card>
    </div>
    <foot />
  </v-app>
</template>

<script>
import foot from "~/components/foot.vue";
export default {
  components: {
    foot,
  },
  data: () => ({
    username: "",
    password: "",
    usernamerules: [(v) => !!v || "กรุณากรอก Username"],
    passwordrules: [(v) => !!v || "กรุณากรอก Password"],
  }),
};
</script>
