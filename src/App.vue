<template>
  <Navbar />
  <HeaderSection />
  <Projects :projects="projects" />
  <About />
  <Footer />
</template>



<script lang="ts">
import { defineComponent } from "vue";
import "./scss/styles.scss";

// Components
import Navbar from "./components/Navbar.vue";
import HeaderSection from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

// Data
import { projects } from "./projectData";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    HeaderSection,
    Projects,
    About,
    Footer
  },
  data() {
    return { projects };
  }
});
</script>
