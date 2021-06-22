<template>
  <v-footer class="footer-distributed black white--text">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
    />
    <v-card-text>
      <v-row>
        <v-col class="pa-2">
          <div class="tit1">
            <h1 class="mt-6 mb-4">ติดต่อเรา</h1>
            <p>
              ห้างหุ้นส่วนจำกัด ไอซีที อินทิเกรเตอร์ 299/139
              หมู่บ้านกาญจน์กนกวิลล์<br />หมู่ที่ 6 ต.สันผักหวาน อ.หางดง
              จ.เชียงใหม่ 50230
            </p>
          </div>
        </v-col>
        <v-col class="text-left ml-16" md="auto">
          <p>
            <i
              class="fas fa-phone-square-alt fa-2x"
              style="vertical-align: middle"
            ></i
            >&ensp;06-5265-9288
          </p>
          <p>
            <i class="far fa-envelope fa-2x" style="vertical-align: middle"></i
            >&ensp;ictintegrator.co@gmail.com
          </p>
          <p>
            <i class="fab fa-line fa-2x" style="vertical-align: middle"></i
            >&ensp; LineID : @icti
          </p>
        </v-col>
        <v-col md="auto" class="text-right">
        <div class="mt-6">
          <v-btn class="mb-2" color="#4CAF50" width="120"
            ><a href="/register"
              class="
                btn btn-success-outline
                mx-2
                text-decoration-none
                white--text
              "
              >สมัครใช้งาน</a
            ></v-btn
          ><br />
          <v-btn color="#FFFFFF" width="120"
            ><a href="/login"
              class="
                btn btn-success-outline
                mx-2
                text-decoration-none
                black--text
              "
            >
              เข้าสู่ระบบ
            </a></v-btn
          >
        </div>
        </v-col>
      </v-row>

      <hr width="100%" class="mt-3 mb-6" />

      <v-row>
        <v-col>
          <div class="footer-left">
            <div class="tit"></div>
            <p class="footer-company-name grey--text">
              © Government, Inc. 2021. Web Content Mangement System
            </p>
          </div> </v-col
        ><v-col class="text-right grey--text">
          <div class="follow">
            Follow us:&ensp;<a
              href="https://www.facebook.com/Spider-Gov-552060354858001/?ref=page_internal"
              target="https://www.facebook.com/Spider-Gov-552060354858001/?ref=page_internal"
              class="text-decoration-none"
              ><i
                class="fab fa-facebook-square fa-2x"
                style="vertical-align: middle"
              ></i
            ></a>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-footer>
</template>
<script>
export default {
  name: "footermain",
};
</script>