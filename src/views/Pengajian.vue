<template>
  <div class="pengajian">
    <navigation />
    <div class="pengajian__1">
      <h1 class="heading-0">PENGAJIAN</h1>
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
        <img src="../assets/icons/icon-arrow-down.svg" alt="Arrow Down" />
      </div>
    </div>
    <div ref="siramanTwo" class="pengajian__2">
      <div class="img"></div>
    </div>
    <div class="pengajian__3">
      <div class="img-container">
        <img src="../assets/images/prewed-4.png" alt="" />
      </div>
      <div class="img-container">
        <img src="../assets/images/prewed-4.png" alt="" />
      </div>
    </div>
    <div class="pengajian__4">
      <div class="img"></div>
    </div>
    <div class="pengajian__5">
      <div class="container">
        <div class="img-container">
          <img src="../assets/images/prewed-2.png" alt="" />
        </div>
        <div class="img-container">
          <img src="../assets/images/prewed-3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="pengajian__6">
      <div class="img-container">
        <img src="../assets/images/prewed-4.png" alt="" />
      </div>
      <div class="img-container">
        <img src="../assets/images/prewed-4.png" alt="" />
      </div>
    </div>
    <div class="pengajian__7">
      <div class="img-container">
        <img src="../assets/images/prewed-9.png" alt="" />
      </div>
    </div>
    <div class="pengajian__8">
      <div class="img-container">
        <img src="../assets/images/prewed-10.png" alt="" />
      </div>
      <div class="img-container">
        <img src="../assets/images/prewed-11.png" alt="" />
      </div>
      <div class="img-container">
        <img src="../assets/images/prewed-12.png" alt="" />
      </div>
    </div>
    <div class="pengajian__9">
      <div class="img-container">
        <img src="../assets/images/prewed-13.png" alt="" />
      </div>
      <div class="img-container">
        <img src="../assets/images/prewed-14.png" alt="" />
      </div>
    </div>
    <back-to-top @click="scrollToTop" :isScroll="state.isScroll" />
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import BackToTop from '../components/BackToTop.vue';

export default {
  name: 'Pengajian',
  components: {
    Navigation,
    BackToTop
  },
  setup() {
    const state = reactive({
      isScroll: false
    });
    const siramanTwo = ref(null);

    onMounted(() => {
      const root = document.getElementsByTagName('html')[0];
      root.classList.add('snap-scroll');

      document.addEventListener('scroll', handleScroll);
    });

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

    return { scrollToTwo, siramanTwo, state, scrollToTop };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/Pengajian.scss';
</style>
