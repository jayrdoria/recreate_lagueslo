<template>
  <div>
    <HomePage />
    <KeyFactorPage />
    <AboutUsPage />
    <WhatWeCanDoPage />
    <FormPage />
  </div>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import KeyFactorPage from "./pages/KeyFactorPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import WhatWeCanDoPage from "./pages/WhatWeCanDoPage.vue";
import FormPage from "./pages/FormPage.vue";

export default {
  components: {
    HomePage,
    KeyFactorPage,
    AboutUsPage,
    WhatWeCanDoPage,
    FormPage,
  },
};
</script>
