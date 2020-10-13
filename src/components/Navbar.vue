<template>
  <nav id="main-nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Alex Sun</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-collapse"
        aria-controls="nav-collapse"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="nav-collapse" class="collapse navbar-collapse">
        <div class="navbar-nav ml-auto">
          <a class="nav-link" href="#home">Home</a>
          <a class="nav-link" href="#projects">Projects</a>
          <a class="nav-link" href="#about">About Me</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>
