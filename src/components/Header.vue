<template>
  <section id="home" class="pt-5">
    <div id="header-section" class="container-fluid p-5">
      <div class="row">
        <div class="col text-center pt-3">
          <img class="my-3" src="images/avataaars.svg" alt="Alex Sun" />
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <h1 class="header">Hi, I'm Alex</h1>
          <h2 class="subheader">Programmer & Web Developer</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderSection"
});
</script>
