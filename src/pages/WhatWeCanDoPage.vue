<template>
  <div class="row margin_bottom flex_container">
    <div class="col-md-4">
      <div class="title text-weight-bold">
        {{ title }}
      </div>
      <div class="info">
        {{ info }}
      </div>
      <q-btn
        rounded
        flat
        no-caps
        class="contact_us_button q-pa-md text-weight-bold"
        label="Contact Us"
        @click="$emit('scroll-to-form')"
      />
    </div>
    <div class="col-md-4">
      <q-img src="../assets/wcwd_1.png" class="photo" />
      <div class="subtitle text-weight-bold">
        {{ subtitle_1 }}
      </div>
      <div class="sub_info">
        {{ sub_info_1 }}
      </div>
      <q-img src="../assets/wcwd_2.png" class="photo margin_top all_mt" />
      <div class="subtitle text-weight-bold">
        {{ subtitle_2 }}
      </div>
      <div class="sub_info">
        {{ sub_info_2 }}
      </div>
    </div>
    <div class="col-md-4">
      <q-img src="../assets/wcwd_3.png" class="photo margin_left all_mt" />
      <div class="subtitle subtitle_3 text-weight-bold">
        {{ subtitle_3 }}
      </div>
      <div class="sub_info sub_info_3">
        {{ sub_info_3 }}
      </div>
      <q-img
        src="../assets/wcwd_4.png"
        class="photo margin_left mt_photo all_mt"
      />
      <div class="subtitle subtitle_3 text-weight-bold">
        {{ subtitle_4 }}
      </div>
      <div class="sub_info sub_info_3">
        {{ sub_info_4 }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../css/WhatWeCanDoPage.scss";
</style>

<script src="../script/WhatWeCanDoPage.js"></script>
