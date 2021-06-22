<template>
  <v-row class="green darken-4 pa-16" id="contact" tag="section">
    <v-col class="content mt-12 mb-12">
      <v-card class="mx-auto" max-width="800">
        <v-card-text>
          <h1 class="head mb-8 black--text">ส่งข้อความถึงเรา</h1>
          <v-text-field label="ชื่อ-นามสกุล" outlined></v-text-field>
          <v-text-field label="Email" outlined></v-text-field>
          <v-textarea
            class="text12"
            height="220"
            outlined
            name="input-7-4"
            label="ข้อความของคุณ.."
          ></v-textarea>
          <v-btn class="success">Register</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "contact"
};
</script>
