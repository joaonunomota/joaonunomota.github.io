<template>
  <div id="app">
    <h1>Jo&atilde;o Nuno Mota</h1>
    <div>
      <github-social-link class="social-icon" />
      <linked-in-social-link class="social-icon" />
    </div>
  </div>
</template>
<script>
import GithubSocialLink from "./components/GithubSocialLink";
import LinkedInSocialLink from "./components/LinkedInSocialLink";

export default {
  components: {
    GithubSocialLink,
    LinkedInSocialLink
  }
};
</script>
<style lang="scss">
@import "./assets/css/site.scss";

#app {
  text-align: center;
  margin-top: 60px;
}

.social-icon {
  display: inline-block;
  margin: 12px;
  height: 60px;
}
</style>
