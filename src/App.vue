<template>
  <div>
    <HomePage @scroll-to-form="scrollToForm" />
    <KeyFactorPage />
    <AboutUsPage />
    <WhatWeCanDoPage @scroll-to-form="scrollToForm" />
    <FormPage ref="formPage" />
  </div>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import KeyFactorPage from "./pages/KeyFactorPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import WhatWeCanDoPage from "./pages/WhatWeCanDoPage.vue";
import FormPage from "./pages/FormPage.vue";

export default {
  methods: {
    scrollToForm() {
      this.$nextTick(() => {
        const formElement = this.$refs.formPage.$el;
        formElement.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
  components: {
    HomePage,
    KeyFactorPage,
    AboutUsPage,
    WhatWeCanDoPage,
    FormPage,
  },
};
</script>
