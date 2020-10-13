<template>
  <section id="projects" class="p-lg-5 pt-5">
    <div class="container-fluid container-lg mt-5 pt-5 text-justify">
      <h3 class="text-center text-md-left">Creative Portfolio</h3>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
        <!-- CARD -->
        <div v-for="(project, idx) in projects" :key="idx" class="col">
          <div class="card h-100">
            <img class="card-img-top project-img" :src="project.image" :alt="project.alt" />
            <div class="card-body">
              <h4 class="card-title">{{ project.label }}</h4>
              <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer text-center">
              <a :href="project.link">View on GitHub</a>
            </div>
          </div>
        </div>
        <!-- END CARD -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "types";

export default defineComponent({
  name: "Projects",
  props: {
    projects: { type: Object as PropType<Project[]>, required: true }
  }
});
</script>
