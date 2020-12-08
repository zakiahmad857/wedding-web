<template>
  <loading v-if="this.isLoading.length < 13" />
  <div class="pre-wedding">
    <navigation variant="transparent" />
    <div class="pre-wedding__1">
      <h1 class="heading-0">Pre-<br />Wed</h1>
      <h1 class="heading mobile mb-1">PreWed</h1>
      <p class="creator">
        Photographed by Ivan Dimas Saputra <br />
        Edited Photos by Gamma Winarno <br />
        MUA by Raisha Monianti <br />
      </p>
      <div class="one__img-container">
        <img
          @load="this.handleLoad"
          class="img-1"
          src="../assets/images/prewed-1.webp"
          alt="Pre Wedding"
        />
        <div class="one__description">
          This is a description or a story of the photoshoot theme <br />
          This is a description or a story of the photoshoot theme
        </div>
      </div>
      <div @click="this.scrollToTwo" class="one__arrow-down">
        <img
          @load="this.handleLoad"
          src="../assets/icons/icon-arrow-down.svg"
          alt="Arrow Down"
        />
      </div>
    </div>
    <div ref="preWed2" class="pre-wedding__2">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-4.webp"
        alt="Pre Wedding"
      />
      <div class="description">
        <p class="text-2">
          Both of us have a deep, rooted, Javanese background, with Alfarra
          having half Sundanese on her side. To honour that half, we decided to
          use Sundanese attire on the ceremony whilst also having Javanese as
          the core of the event. We respect and honour all our heritages very
          much.
        </p>
        <img
          @load="this.handleLoad"
          class="underline"
          src="../assets/images/prewed-underline.webp"
          alt="underline"
        />
      </div>
    </div>
    <div class="pre-wedding__3">
      <div class="description">
        <p class="text-2">
          Fun fact: Alfarra looks exactly like her mother in these Javanese
          series. It creeps everyone out. Especially Gamma.
        </p>
        <img
          @load="this.handleLoad"
          class="underline"
          src="../assets/images/prewed-underline.webp"
          alt="underline"
        />
      </div>
      <img src="../assets/images/prewed-5.webp" alt="Pre Wedding" />
    </div>
    <div class="pre-wedding__4">
      <div class="img"></div>
    </div>
    <div class="pre-wedding__5">
      <div class="two__img-container two__img-container--1">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-2.webp"
          alt="Pre Wedding"
        />
      </div>
      <div class="two__img-container two__img-container--2">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-3.webp"
          alt="Pre Wedding"
        />
        <p class="mt-2 text-2">
          We bonded over a sport of Tennis, where we play twice a week together
          for months. Gamma is getting really good, he hasn’t found the right
          racket and shoes yet. Alfarra however, needs to work on running, she’s
          definitely the lazy one.
        </p>
      </div>
    </div>
    <div class="pre-wedding__6">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-7.webp"
        alt="Pre Wedding"
      />
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-8.webp"
        alt="Pre Wedding"
      />
    </div>
    <div class="pre-wedding__7">
      <img src="../assets/images/prewed-9.webp" alt="Pre Wedding" />
    </div>
    <div class="pre-wedding__8">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-10.webp"
        alt="Pre Wedding"
      />
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-11.webp"
        alt="Pre Wedding"
      />
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-12.webp"
        alt="Pre Wedding"
      />
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
        <img
          @load="this.handleLoad"
          src="../assets/icons/icon-arrow-down.svg"
          alt=""
        />
      </div>
      <p class="text-3 mt-1">Back To Top</p>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import Navigation from '../components/Navigation.vue';
import { promiseTimeOut } from '../utils/promiseTimeOut';

export default {
  components: { Navigation, Loading },
  name: 'PreWedding',
  data() {
    return { isScroll: false, isPlay: false, isLoading: [] };
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
    },
    async handleLoad() {
      await promiseTimeOut(1000);
      this.isLoading.push(true);
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
