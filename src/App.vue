<template>
  <div id="app">
    <div id="wrapper">
      <h1>Jo&atilde;o Nuno Mota</h1>
      <div>
        <p>
          A full-stack web developer focused on C# and JavaScript. Used to
          delivering on multiple projects in a fast-paced agile work
          environment. Eager to continuously learn and improve on all aspects of
          development.
        </p>
        <simple-header-accordion header="Core Skills">
          <div class="row left-align">
            <h4>Proficient</h4>
            <p>
              Asp.Net Core Razor Pages & Web API, Asp.Net MVC5 & Web Pages, C#,
              EF Core, HTML5, Java, JavaScript, jQuery, SQL, TypeScript, Vue.js
            </p>
            <h4>Familiar</h4>
            <p>
              Asp.Net Core MVC, Azure, CSS3, Knockout.js, PowerShell, Python, R,
              WCF
            </p>
          </div>
        </simple-header-accordion>
        <simple-header-accordion header="Career">
          <div class="row space-between">
            <div class="left-align">
              <strong>.Net Developer</strong>
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
              <strong>Junior Software Developer</strong>
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

          <div class="row space-between">
            <div class="left-align">
              <strong>Web Developer</strong>
              <br />
              Augusto de Oliveira Ferreira Lda. -
              <a href="http://www.aof.pt">aof.pt</a>
            </div>
            <div class="right-align">
              June 2015 - September 2016
            </div>
          </div>
          <div class="row left-align">
            <p>
              A construction company specializing in the conservation and
              restoration of heritage buildings.
            </p>
            <ul>
              <li>
                Self-taught C# and Asp.Net Web Pages to implement a portfolio
                website (aof.pt), including a content management system to
                create and edit multilingual pages containing user media.
              </li>
            </ul>
          </div>
        </simple-header-accordion>
        <simple-header-accordion header="Education">
          <div class="row space-between">
            <div class="left-align">
              <strong>Computer Science MSc (2:1)</strong>
              <br />
              Royal Holloway, University of London
            </div>
            <div class="right-align">
              2014 - 2018
            </div>
          </div>
          <div class="row left-align">
            <p>
              Modules Included:
              <br />
              <br />
              Large Scale Data Storage and Processing, Machine Learning,
              Security Management, Applications of Cryptography, Computational
              Finance
            </p>
            <ul>
              <li>
                Awarded “Best Team Project” prize for designing and developing
                an attendance management system using Laravel, Java, HTML5 and
                Bootstrap.
              </li>
              <li>
                Implemented the following machine learning algorithms in Java
                for Full Year Project:
                <ul>
                  <li>
                    Weighted k-Nearest Neighbor for classification and
                    regression.
                  </li>
                  <li>
                    Support Vector Machines with variant to support 2+ classes.
                  </li>
                  <li>
                    AdaBoost using Classification and Regression Tree as weak
                    learner.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </simple-header-accordion>
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
