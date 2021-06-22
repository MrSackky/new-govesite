<template>
  <v-app>
    <v-container fluid>
      <slide />
      <spot />
      <feaure />
      <pricing />
      <contact />
    </v-container>
    <footmain />
  </v-app>
</template>

<script>
import slide from "@/components/slide.vue";
import footmain from "~/components/footmain.vue";
import contact from "~/components/contact.vue";
import spot from "~/components/spot.vue";
import feaure from "~/components/feaure.vue";
import pricing from "~/components/pricing.vue";
export default {
  components: {
    slide,
    footmain,
    contact,
    spot,
    feaure,
    pricing
  }
};
</script>
