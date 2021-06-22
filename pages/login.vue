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
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <div class="ml-3 mr-3">
                <div class="card-body login-card-body">
                  <h1 class="login-box-msg mb-3">เข้าสู่ระบบ</h1>
                  <p class="login-box-msg grey--text">
                    เข้าสู่ระบบเพื่อใช้งานระบบเว็บไซต์หน่วยงานสำเร็จรูป
                  </p>
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required|max:10"
                >
                  <v-text-field
                    outlined
                    v-model="username"
                    :error-messages="errors"
                    label="Username"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Password"
                  rules="required|max:10"
                >
                  <v-text-field
                    outlined
                    type="password"
                    v-model="password"
                    :error-messages="errors"
                    label="Password"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider name="checkbox">
                  <v-checkbox label="จดจำฉัน" type="checkbox"></v-checkbox>
                </validation-provider>

                <v-btn
                  class="white--text mb-4 mt-4 mr-2"
                  style="width: 100%"
                  type="submit"
                  to="#"
                  color="green darken-4"
                  :disabled="invalid"
                >
                  เข้าสู่ระบบ
                </v-btn>
                <a href="#" class="text-decoration-none black--text">
                  <p class="grey--text text-center">ลืมรหัสผ่าน?</p>
                </a>
              </div>
            </form>
          </validation-observer>
        </div>
      </v-card>
    </div>
    <foot />
  </v-app>
</template>

<script>
import foot from "~/components/foot.vue";
import { required, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}"
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    foot
  },
  data: () => ({
    username: "",
    password: ""
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    }
  }
};
</script>
