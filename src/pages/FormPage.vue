<template>
  <div class="flex_container">
    <div class="card">
      <h5 class="text-weight-bold title">{{ title }} <br />Newsletter!</h5>
      <p class="subtitle">{{ subtitle }}</p>
      <q-input
        rounded
        outlined
        dense
        v-model="email"
        type="email"
        :rules="[noNullValues, validateEmail]"
        placeholder="Your Email Address"
        class="input_subs"
      >
        <q-btn
          push
          flat
          no-caps
          @click="submit"
          padding="1px 40px 1px 40px"
          class="subscribe_button text-weight-bold"
          label="Subscribe"
        />
        &nbsp;
      </q-input>
    </div>
    <div class="email_card">
      <q-img src="../assets/mail.png" class="photo" />
      <div class="input_field">
        <p class="text-weight-bold text_margin_bottom">
          Name<span class="red"> *</span>
        </p>
        <q-input
          outlined
          dense
          v-model="contactName"
          placeholder="Name"
          :rules="[noNullValues]"
        />
        <p class="text-weight-bold text_margin_bottom q-mt-lg">
          Email<span class="red"> *</span>
        </p>
        <q-input
          outlined
          dense
          v-model="contactEmail"
          placeholder="Email"
          :rules="[noNullValues, validateContactEmail]"
        />
        <p class="text-weight-bold text_margin_bottom q-mt-lg">
          Your Message<span class="red"> *</span>
        </p>
        <q-input
          outlined
          dense
          v-model="contactMessage"
          type="textarea"
          placeholder="Your Message"
          :rules="[noNullValues]"
        />
        <q-btn class="send_button" label="Send" @click="submitContactForm" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../css/FormPage.scss";
</style>

<style lang="scss">
@import "../css/FormPageError.scss";
</style>

<script src="../script/FormPage.js"></script>
