<template>
  <section id="about" class="p-lg-5 pt-5">
    <div class="container-fluid container-lg mt-5 pt-5 text-justify">
      <div class="row">
        <div class="col">
          <h3 class="h-border text-center text-md-left">About me</h3>
          <p>
            I am a self-taught programmer and web developer currently living in Germany. I've had a passion for computers since I was little
            and became interested in programming early on. I took my first steps with simple game programming while in high school.
          </p>
          <p>
            After working boring and mind-numbing office jobs for far too long, I decided to make a change and do something I enjoy for a
            living.
          </p>
          <p>
            My favourite webdev technologies are the <strong>MERN</strong> stack with <strong>TypeScript</strong>
            and <strong>SCSS</strong>. My favourite programming language in general is <strong>Rust</strong>.
          </p>
          <p>I speak English, German, Japanese, and a little bit of Mandarin Chinese.</p>
          <h5 class="text-center mt-5">You can find me also on...</h5>
          <p class="text-center">
            <a href="mailto:alexsun82@icloud.com">
              <fa icon="envelope" size="2x" class="mr-3" />
            </a>
            <a href="https://github.com/ranmaru22">
              <fa :icon="['fab', 'github']" size="2x" class="mr-3" />
            </a>
            <a href="https://stackoverflow.com/users/12570014/ranmaru">
              <fa :icon="['fab', 'stack-overflow']" size="2x" class="mr-3" />
            </a>
            <a href="https://www.linkedin.com/in/alexsun82/">
              <fa :icon="['fab', 'linkedin']" size="2x" class="mr-3" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About"
});
</script>
