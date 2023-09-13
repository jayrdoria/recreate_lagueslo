<template>
  <div class="row">
    <div class="col-xs-12 col-sm-7 col-md-7">
      <q-img src="../assets/lagueslo_logo.jpg" class="lagueslo_logo" />
      <div class="text-h3 text-weight-bold h1_toprated">
        {{ title }}
      </div>
      <p class="sub_toprated">{{ subtitle }}</p>
      <q-btn
        rounded
        flat
        no-caps
        class="contact_us_button q-pa-md text-weight-bold"
        label="Contact Us"
        @click="$emit('scroll-to-form')"
      />
    </div>
    <div class="col-xs-12 col-sm-5 col-md-5">
      <q-img src="../assets/comp_humans.png" class="comp_humans" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../css/HomePage.scss";
</style>

<script src="../script/HomePage.js"></script>
