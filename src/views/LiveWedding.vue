<template>
  <div class="live-wedding">
    <div v-if="state.blur" class="overlay-blur"></div>
    <div
      :class="{
        collapsing: state.souvenir === 'collapsing',
        showing: state.souvenir === 'showing',
        showed: state.souvenir === 'showed',
        collapsed: state.souvenir === 'collapsed'
      }"
      class="popup-souvenir"
    >
      <Souvenir @close="handleClose('souvenir')" />
    </div>
    <div
      :class="{
        collapsing: state.amplop === 'collapsing',
        showing: state.amplop === 'showing',
        showed: state.amplop === 'showed',
        collapsed: state.amplop === 'collapsed'
      }"
      class="e-amplop"
    >
      <Amplop @close="handleClose('amplop')" />
    </div>
    <div class="utils">
      <div id="step-6" @click.prevent="this.startTour" class="util">
        <img src="../assets/icons/icon-info.svg" alt="info" />
      </div>
      <div id="step-5" class="util">
        <img src="../assets/icons/icon-sound-on.svg" alt="sound-on" />
      </div>
    </div>
    <nav class="navigation">
      <router-link :to="`/${state.lang}/gallery`">
        <img
          id="step-2"
          class="nav-item"
          src="../assets/images/nav-gallery.svg"
          alt="gallery"
        />
      </router-link>
      <img
        id="step-3"
        @click="handleClose('souvenir')"
        class="nav-item nav-item--souvenir"
        src="../assets/images/nav-souvenir.svg"
        alt="souvenir"
      />
      <div style="position: relative">
        <img
          @click="handleClose('amplop')"
          id="step-4"
          class="nav-item"
          src="../assets/images/nav-amplop.svg"
          alt="amplop"
        />
        <img
          class="img-pot"
          src="../assets/images/image-pot.svg"
          alt="amplop"
        />
      </div>
    </nav>
    <div id="step-1" class="video">
      <div class="video__container">
        <img
          src="../assets/images/wedding-gamma-alfarra.png"
          alt="Wedding Gamma Alfarra"
          class="video__text"
        />
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              src="https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
      </div>
    </div>
    <tour ref="tour" :steps="state.steps" />
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import Souvenir from '../components/Souvenir.vue';
import Amplop from '../components/Amplop.vue';
import { promiseTimeOut } from '../utils/promiseTimeOut';
import Tour from '../components/Tour.vue';

export default {
  name: 'LiveWedding',
  components: { Souvenir, Amplop, Tour },
  setup() {
    const state = reactive({
      routeBefore: '',
      lang: '',
      souvenir: 'collapsed',
      amplop: 'collapsed',
      blur: false,
      steps: [
        {
          header: 'LIVE Akad Nikah',
          content:
            'Di sini kamu bisa menyaksikan acara akad nikah Alfarra & Gamma yang sedang berlangsung secara live.',
          position: 'bottom',
          target: '#step-1',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -40]
              }
            }
          ]
        },
        {
          header: 'Gallery',
          content:
            'Kamu bisa melihat foto-foto pre-wedding dan dokumentasi dari acara lamaran Alfarra & Gamma.',
          position: 'top-end',
          target: '#step-2',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 0]
              }
            }
          ]
        },
        {
          header: 'Cinderamata',
          content:
            'Sebagai tanda terima kasih dari Alfarra & Gamma, ada sebuah cinderamata yang bisa kamu dapatkan di sini.',
          position: 'top',
          target: '#step-3',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 0]
              }
            }
          ]
        },
        {
          header: 'E-Amplop',
          content:
            'Walaupun tidak langsung bertatap muka, kamu tetap bisa memberikan amplop pernikahan secara digital lho.',
          position: 'top-start',
          target: '#step-4',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 0]
              }
            }
          ]
        },
        {
          header: 'Alunan Musik',
          content:
            'Musik yang diputar adalah playlist pilihan  Alfarra & Gamma. Kamu dapat matikan dan nyalakan kembali dengan klik tombol ini.',
          position: 'bottom-end',
          target: '#step-5',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [20, 20]
              }
            }
          ]
        },
        {
          header: 'Petunjuk ',
          content:
            'Jika ingin membaca ulang petunjuk penggunaan website, kamu dapat menekan tombol di atas ini.',
          position: 'bottom-end',
          target: '#step-6',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [20, 20]
              }
            }
          ]
        }
      ]
    });

    const route = useRoute();
    route.path.startsWith('/id') ? (state.lang = 'id') : (state.lang = 'en');

    async function handleClose(name) {
      if (state[name] === 'collapsed') {
        state[name] = 'showing';
        await promiseTimeOut(100);
        state[name] = 'showed';
        state.blur = true;
      } else if (state[name] === 'showed') {
        state[name] = 'collapsing';
        await promiseTimeOut(300);
        state.blur = false;
        state[name] = 'collapsed';
      }
    }

    return { state, handleClose };
  },
  mounted() {
    this.$refs.tour.start();
  },
  methods: {
    startTour() {
      this.$refs.tour.start();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.live-wedding {
  background: url('../assets/images/bg-live-wedding.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.video {
  height: 50%;
  width: 50%;
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__text {
    position: absolute;
    top: -10rem;
    left: 50%;
    transform: translateX(-50%);
    height: 12rem;
    z-index: 10;
  }

  &__container {
    border-radius: 1.5rem;
    overflow: hidden;
    border: 10px solid $color-green-c;
    height: 100%;
    width: 100%;
  }
}

.popup-souvenir,
.e-amplop {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s;

  &.collapsed {
    display: none;
  }

  &.showing,
  &.collapsing {
    display: flex;
  }

  &.showed {
    transform: scale(1);
    opacity: 1;
  }
}

.img-pot {
  position: absolute;
  top: -30rem;
  left: -18rem;
  height: 40rem;
  z-index: 0;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
  height: 244px;
  margin-top: auto;
}

.nav-item {
  height: 15rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &--souvenir {
    margin-bottom: -2rem;
    display: block;
  }
}

.utils {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 2rem;
  position: relative;
}

.util {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-green-c;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 1.4rem;
  z-index: 5;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    height: 4rem;
  }
}
</style>
