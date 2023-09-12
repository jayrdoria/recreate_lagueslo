<template>
  <div class="row background">
    <div class="col-xs-12 col-md-12">
      <div class="key_factor">{{ title }}</div>
    </div>
    <div class="col-md-12 center_div flex_direction cards-container">
      <div class="white_card margin_left">
        <q-img src="../assets/key_factor_1.png" class="photo" />
        <p class="white_card_title text-weight-bold title_1_margin">
          {{ key_factor_1 }}
        </p>
      </div>
      <div class="white_card gutter">
        <q-img src="../assets/key_factor_2.png" class="photo" />
        <p class="white_card_title text-weight-bold title_2_margin">
          {{ key_factor_2 }}
        </p>
      </div>
      <div class="white_card gutter margin_top">
        <q-img src="../assets/key_factor_3.png" class="photo" />
        <p class="white_card_title text-weight-bold title_3_margin">
          {{ key_factor_3 }}
        </p>
      </div>
      <div class="white_card gutter margin_top margin_right margin_bottom">
        <q-img src="../assets/key_factor_4.png" class="photo" />
        <p class="white_card_title text-weight-bold">
          {{ key_factor_4 }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../css/KeyFactorPage.scss";
</style>

<script src="../script/KeyFactorPage.js"></script>
