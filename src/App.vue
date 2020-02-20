<template>
  <div id="app">
    <h1>Jo&atilde;o Nuno Mota</h1>
    <p>Coming soon.</p>
    <div>
      <facebook-social-link class="social-icon" />
      <github-social-link class="social-icon" />
      <instagram-social-link class="social-icon" />
      <linked-in-social-link class="social-icon" />
    </div>
  </div>
</template>
<script>
import FacebookSocialLink from "./components/FacebookSocialLink";
import GithubSocialLink from "./components/GithubSocialLink";
import InstagramSocialLink from "./components/InstagramSocialLink";
import LinkedInSocialLink from "./components/LinkedInSocialLink";

export default {
  components: {
    FacebookSocialLink,
    GithubSocialLink,
    InstagramSocialLink,
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
