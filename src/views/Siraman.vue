<template>
  <loading v-if="state.isPageLoading.length < 14" />
  <div class="siraman">
    <navigation />
    <div class="siraman__1">
      <h1 class="heading-0">Siraman</h1>
      <p class="text-3 mb-2">
        Pengajian merupakan blablablabla Pengajian merupakan blablablabla
        Pengajian merupakan blablablabla Pengajian merupakan
        blablablablaPengajian merupakan blablablablaPengajian merupakan
        blablablabla
      </p>
      <div class="video">
        <vue-plyr
          :options="{ settings: ['captions', 'quality', 'speed', 'loop'] }"
          ref="plyr"
        >
          <div class="plyr__video-embed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gIB2egm7tL8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </vue-plyr>
        <div class="creator">
          Videographer by Ivan Dimas Saputra <br />
          Editor by Gamma Winarno
        </div>
      </div>
      <div @click="scrollToTwo" class="arrow-down">
        <img
          @load="handleLoad"
          src="../assets/icons/icon-arrow-down.svg"
          alt="Arrow Down"
        />
      </div>
    </div>
    <div ref="siramanTwo" class="siraman__2">
      <img
        @load="handleLoad"
        class="img"
        src="../assets/images/prewed-5.webp"
      />
    </div>
    <div class="siraman__3">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-9.webp" alt="" />
      </div>
    </div>
    <div class="siraman__4">
      <img
        @load="handleLoad"
        src="../assets/images/prewed-6.webp"
        class="img"
      />
    </div>
    <div class="siraman__5">
      <div class="container">
        <div class="img-container">
          <img @load="handleLoad" src="../assets/images/prewed-2.webp" alt="" />
        </div>
        <div class="img-container">
          <img @load="handleLoad" src="../assets/images/prewed-3.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="siraman__6">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-4.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-4.webp" alt="" />
      </div>
    </div>
    <div class="siraman__7">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-9.webp" alt="" />
      </div>
    </div>
    <div class="siraman__8">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-10.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-11.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-12.webp" alt="" />
      </div>
    </div>
    <div class="siraman__9">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-13.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-14.webp" alt="" />
      </div>
    </div>
    <back-to-top @click="scrollToTop" :isScroll="state.isScroll" />
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import BackToTop from '../components/BackToTop.vue';
import Loading from '../components/Loading.vue';
import { promiseTimeOut } from '../utils/promiseTimeOut';

export default {
  name: 'Siraman',
  components: {
    Navigation,
    BackToTop,
    Loading
  },
  setup() {
    const state = reactive({
      isScroll: false,
      isPageLoading: []
    });
    const siramanTwo = ref(null);
    const iframe = ref(null);

    onMounted(() => {
      const root = document.getElementsByTagName('html')[0];
      root.classList.add('snap-scroll');

      document.addEventListener('scroll', handleScroll);
    });

    async function handleLoad() {
      await promiseTimeOut(1000);
      state.isPageLoading.push(true);
    }

    function scrollToTwo() {
      const { top } = siramanTwo.value.getBoundingClientRect();
      window.scrollTo({ top, behavior: 'smooth', left: 0 });
    }

    function handleScroll() {
      const { top } = siramanTwo.value.getBoundingClientRect();

      if (window.scrollY > top) {
        state.isScroll = true;
      } else {
        state.isScroll = false;
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return { scrollToTwo, siramanTwo, state, scrollToTop, handleLoad, iframe };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/Siraman.scss';
</style>
