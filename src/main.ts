import { createApp } from "vue";
import "bootstrap";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faGithub, faStackOverflow, faLinkedin);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
