<template>
  <div id="app">
    <div id="wrapper">
      <h1>Jo&atilde;o Nuno Mota</h1>
      <div>
        <simple-header-accordion header="Education"></simple-header-accordion>
        <simple-header-accordion header="Career"></simple-header-accordion>
        <simple-header-accordion
          header="Miscellaneous"
        ></simple-header-accordion>
      </div>
      <div>
        <github-social-link class="social-icon" />
        <linked-in-social-link class="social-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import GithubSocialLink from "./components/GithubSocialLink";
import LinkedInSocialLink from "./components/LinkedInSocialLink";
import SimpleHeaderAccordion from "./components/SimpleHeaderAccordion";

export default {
  components: {
    GithubSocialLink,
    LinkedInSocialLink,
    SimpleHeaderAccordion
  }
};
</script>

<style lang="scss">
@import "./assets/css/site.scss";

#app {
  text-align: center;
  margin-top: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

#wrapper {
  width: 100%;
  max-width: 720px;
  padding: 0 2rem 0 2rem;
}

.social-icon {
  display: inline-block;
  margin: 12px;
  height: 60px;
}
</style>
