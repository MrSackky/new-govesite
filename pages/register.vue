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
                    <div class="form-group">
                      <label for="govename" class="grey--text"
                        >ชื่อหน่วยงาน</label
                      >
                      <v-text-field
                        outlined
                        type="text"
                        id="govename"
                        name="govename"
                        placeholder="ชื่อหน่วยงาน"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="usernames" class="grey--text"
                        >ชื่อผู้ติดต่อ</label
                      >
                      <v-text-field
                        outlined
                        type="text"
                        id="usernames"
                        name="usernames"
                        placeholder="ชื่อผู้ติดต่อ"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone" class="grey--text">เบอร์โทร</label>
                      <v-text-field
                        outlined
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="เบอร์โทร"
                        class="form-control"
                      />
                    </div>
                    <label for="" class="grey--text">URL ใช้งาน</label>
                    <div class="form-group">
                      <v-row class="text-left"
                        ><v-col class="mt-4 mr-4"> government.com/</v-col>
                        <v-text-field
                          outlined
                          type="text"
                          id="goveurl"
                          name="goveurl"
                          placeholder="ชื่อ url"
                          class="form-control text-left mt-3 mr-3"
                          style="width: 50%"
                      /></v-row>
                    </div>
                    <div class="form-group">
                      <label for="email" class="grey--text">อีเมลล์</label>
                      <v-text-field
                        outlined
                        type="text"
                        id="email"
                        name="email"
                        placeholder="อีเมล"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" class="grey--text">Password</label>
                      <v-text-field
                        outlined
                        type="password"
                        id="password"
                        name="password"
                        placeholder="รหัสผ่าน"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="confirmPassword" class="grey--text"
                        >ยืนยันรหัสผ่าน</label
                      >
                      <v-text-field
                        outlined
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="ยืนยันรหัสผ่าน"
                        class="form-control"
                      />
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-btn
                to="#"
                color="green darken-4"
                class="white--text mb-4 mt-4 mr-2"
                style="width: 100%"
              >
                สมัครสมาชิก
              </v-btn>
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
  name: "register"
};
</script>
