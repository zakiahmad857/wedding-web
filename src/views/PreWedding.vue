<template>
  <div class="pre-wedding">
    <navigation variant="transparent" />
    <div class="pre-wedding__1">
      <h1 class="heading-0">Pre-<br />Wed</h1>
      <h1 class="heading mobile mb-1">PreWed</h1>
      <div class="one__img-container">
        <img
          class="img-1"
          src="../assets/images/prewed-1.png"
          alt="Pre Wedding"
        />
        <div class="one__description">
          This is a description or a story of the photoshoot theme <br />
          This is a description or a story of the photoshoot theme
        </div>
      </div>
      <div @click="this.scrollToTwo" class="one__arrow-down">
        <img src="../assets/icons/icon-arrow-down.svg" alt="Arrow Down" />
      </div>
    </div>
    <div ref="preWed2" class="pre-wedding__2">
      <img src="../assets/images/prewed-4.png" alt="Pre Wedding" />
      <div class="description">
        <p class="text-2">
          This is a description or a story of the photoshoot theme This is a
          description or a story of the photoshoot theme This is a description
          or a story of the photoshoot theme
        </p>
        <img
          class="underline"
          src="../assets/images/prewed-underline.svg"
          alt="underline"
        />
      </div>
    </div>
    <div class="pre-wedding__3">
      <div class="description">
        <p class="text-2">
          This is a description or a story of the photoshoot theme This is a
          description or a story of the photoshoot theme This is a description
          or a story of the photoshoot theme
        </p>
        <img
          class="underline"
          src="../assets/images/prewed-underline.svg"
          alt="underline"
        />
      </div>
      <img src="../assets/images/prewed-5.png" alt="Pre Wedding" />
    </div>
    <div class="pre-wedding__4">
      <div class="img"></div>
    </div>
    <div class="pre-wedding__5">
      <div class="two__img-container two__img-container--1">
        <img src="../assets/images/prewed-2.png" alt="Pre Wedding" />
      </div>
      <div class="two__img-container two__img-container--2">
        <img src="../assets/images/prewed-3.png" alt="Pre Wedding" />
        <p class="mt-2 text-2">
          This is a description or a story of the photoshoot theme This is a
          description or a story of the photoshoot theme This is a description
          or a story of the photoshoot theme
        </p>
      </div>
    </div>
    <div class="pre-wedding__6">
      <img src="../assets/images/prewed-7.png" alt="Pre Wedding" />
      <img src="../assets/images/prewed-8.png" alt="Pre Wedding" />
    </div>
    <div class="pre-wedding__7">
      <img src="../assets/images/prewed-9.png" alt="Pre Wedding" />
    </div>
    <div class="pre-wedding__8">
      <img src="../assets/images/prewed-10.png" alt="Pre Wedding" />
      <img src="../assets/images/prewed-11.png" alt="Pre Wedding" />
      <img src="../assets/images/prewed-12.png" alt="Pre Wedding" />
    </div>
    <div class="pre-wedding__9">
      <div class="img"></div>
      <div class="img"></div>
    </div>
    <div
      :class="{ showed: isScroll }"
      @click="this.scrollToTop"
      class="back-to-top"
    >
      <div class="back-to-top__container">
        <img src="../assets/icons/icon-arrow-down.svg" alt="" />
      </div>
      <p class="text-3 mt-1">Back To Top</p>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  components: { Navigation },
  name: 'PreWedding',
  data() {
    return { isScroll: false, isPlay: false };
  },
  mounted() {
    const root = document.getElementsByTagName('html')[0];
    root.classList.add('snap-scroll');

    document.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    const root = document.getElementsByTagName('html')[0];
    root.classList.remove('snap-scroll');

    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTwo() {
      const { top } = this.$refs.preWed2.getBoundingClientRect();
      window.scrollTo({ top, behavior: 'smooth', left: 0 });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const { top } = this.$refs.preWed2.getBoundingClientRect();

      if (window.scrollY > top) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/PreWedding.scss';
</style>

<style>
html.snap-scroll {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>
