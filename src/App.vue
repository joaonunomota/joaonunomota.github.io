<template>
  <div id="app">
    <div id="wrapper">
      <h1>Jo&atilde;o Nuno Mota</h1>
      <div>
        A full-stack web developer focused on C# and JavaScript. Used to
        delivering on multiple projects in a fast-paced agile work environment.
        Eager to continuously learn and improve on all aspects of software
        development.
        <simple-header-accordion header="Education"></simple-header-accordion>
        <simple-header-accordion header="Career">
          <div class="row space-between">
            <div class="left-align">
              .Net Developer
              <br />
              InfoTrack UK -
              <a href="https://www.infotrack.co.uk">infotrack.co.uk</a>
            </div>
            <div class="right-align">
              January 2020 - Present
            </div>
          </div>
          <div class="row left-align">
            <p>
              A company providing conveyancing services using in-house
              award-winning technology.
            </p>
            <ul>
              <li>
                Delivered several features using Vue.js, Web API, and WCF.
              </li>
              <li>
                Set up deployment for projects using TeamCity and Octopus
                Deploy.
              </li>
            </ul>
          </div>

          <div class="row space-between">
            <div class="left-align">
              Junior Software Developer
              <br />
              DCSL Software Ltd. -
              <a href="https://www.dcslsoftware.com">dcslsoftware.com</a>
            </div>
            <div class="right-align">
              August 2018 - January 2020
            </div>
          </div>
          <div class="row left-align">
            <p>
              An award-winning bespoke software development company.
            </p>
            <ul>
              <li>
                Collaborated with other developers in an agile framework based
                on Scrum.
              </li>
              <li>
                Delivered several features for a service management and an
                e-commerce application using Vue.js and Asp.Net Core Razor Pages
                & Web API, and Microsoft SQL Server (MSSQL).
              </li>
              <li>
                Delivered several features for a stock management application
                using Asp.Net MVC5, and MSSQL.
              </li>
            </ul>
          </div>
        </simple-header-accordion>
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

.row {
  width: 100%;
}

.space-between {
  display: flex;
  justify-content: space-between;
}

.left-align {
  width: auto;
  text-align: left;
}

.right-align {
  text-align: right;
  width: auto;
}
</style>
