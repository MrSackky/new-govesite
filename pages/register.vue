<template>
  <v-app>
    <div class="pa-16 mt-16">
      <v-card class="mx-auto mt-4 mb-16" style="width: 500px; height: 1150px">
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
                  มีบัญชีผู้ใช้แล้ว ?
                  <a
                    href="/login"
                    class="text-decoration-none green--text mr-2 ml-2"
                  >
                    <b>เข้าสู่ระบบ</b>
                  </a>
                  <a href="#" class="text-decoration-none grey--text mr-2 ml-2">
                    <b>ลืมรหัสผ่าน?</b>
                  </a>
                </p>
              </v-col></v-row
            >
          </div>
          <div class="ml-3 mr-3">
            <div class="card-body login-card-body">
              <h1 class="login-box-msg mb-3">สมัครสมาชิก</h1>
              <p class="login-box-msg grey--text">
                สมัครสมาชิกเพื่อใช้งานระบบเว็บไซต์หน่วยงานสำเร็จรูป
              </p>
            </div>
            <div class="container">
              <v-row>
                <v-col>
                  <div class="content">
                    <v-form v-model="invalid">
                      <div class="form-group">
                        <label for="govename" class="grey--text"
                          >ชื่อหน่วยงาน</label
                        >
                        <v-text-field
                          outlined
                          v-model="govename"
                          :rules="govenamerules"
                          label="ชื่อหน่วยงาน"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="usernames" class="grey--text"
                          >ชื่อผู้ติดต่อ</label
                        >
                        <v-text-field
                          outlined
                          v-model="username"
                          :rules="usernamerules"
                          label="ชื่อผู้ติดต่อ"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="phone" class="grey--text">เบอร์โทร</label>
                        <v-text-field
                          outlined
                          v-model="phone"
                          :rules="phonerules"
                          label="เบอร์โทร"
                          required
                        />
                      </div>
                      <label for="" class="grey--text">URL ใช้งาน</label>
                      <div class="form-group">
                        <v-row class="text-left"
                          ><v-col class="mt-4 mr-4"> government.com/</v-col>
                          <v-text-field
                            outlined
                            v-model="goveurl"
                            :rules="goveurlrules"
                            label="ชื่อ url"
                            class="form-control text-left mt-3 mr-3"
                            style="width: 50%"
                            required
                        /></v-row>
                      </div>
                      <div class="form-group">
                        <label for="email" class="grey--text">อีเมลล์</label>
                        <v-text-field
                          outlined
                          v-model="email"
                          :rules="emailrules"
                          label="อีเมล"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="password" class="grey--text"
                          >Password</label
                        >
                        <v-text-field
                          outlined
                          v-model="password"
                          :rules="passwordrules"
                          type="password"
                          label="รหัสผ่าน"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="confirmPassword" class="grey--text"
                          >ยืนยันรหัสผ่าน</label
                        >
                        <v-text-field
                          outlined
                          v-model="confirmpassword"
                          :rules="[passwordMatch,confirmpasswordrules]"
                          type="password"
                          label="ยืนยันรหัสผ่าน"
                          required
                        />
                      </div>
                      <v-btn
                        to="#"
                        color="green darken-4"
                        class="white--text mb-4 mt-4 mr-2"
                        style="width: 100%"
                        :disabled="!invalid"
                      >
                        สมัครสมาชิก
                      </v-btn>
                    </v-form>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <foot />
  </v-app>
</template>

<script>
import foot from "~/components/foot.vue";
export default {
  name: "register",
  components: {
    foot,
  },
  data: () => ({
    govename: "",
    username: "",
    phone: "",
    goveurl: "",
    email: "",
    password: "",
    confirmpassword: "",
    govenamerules: [(v) => !!v || "กรุณากรอกชื่อหน่วยงาน"],
    usernamerules: [(v) => !!v || "กรุณากรอกชื่อผู้ติดต่อ"],
    phonerules: [(v) => !!v || "กรุณากรอกเบอร์โทร"],
    goveurlrules: [(v) => !!v || "กรุณากรอก URL ใช้งาน"],
    emailrules: [(v) => !!v || "กรุณากรอกอีเมลล์",
        (v) => /.+@.+/.test(v) || 'กรุณากรอกอีเมลล์ให้ถูกต้อง',],
    passwordrules: [
      (v) => !!v || "กรุณากรอกรหัสผ่าน",
      (v) => (v && v.length >= 8) || "กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร",
    ],
    confirmpasswordrules: [
      (v) => !!v || "กรุณายืนยันรหัสผ่าน",
      (v) => (v && v.length >= 8) || "กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร",
    ],
  }),
  computed: {
    passwordMatch() {
      return () =>
        this.password === this.confirmpassword || "รหัสผ่านไม่ตรงกัน",
        this.confirmpassword === this.password || "รหัสผ่านไม่ตรงกัน";
    },
  },
};
</script>
