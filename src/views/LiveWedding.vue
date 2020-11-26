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
      <div class="util">
        <img src="../assets/icons/icon-info.svg" alt="info" />
      </div>
      <div class="util">
        <img src="../assets/icons/icon-sound-on.svg" alt="sound-on" />
      </div>
    </div>
    <nav class="navigation">
      <router-link :to="`/${state.lang}/gallery`">
        <img
          class="nav-item"
          src="../assets/images/nav-gallery.svg"
          alt="gallery"
        />
      </router-link>
      <img
        @click="handleClose('souvenir')"
        class="nav-item nav-item--souvenir"
        src="../assets/images/nav-souvenir.svg"
        alt="souvenir"
      />
      <div @click="handleClose('amplop')" style="position: relative">
        <img
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
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import Souvenir from '../components/Souvenir.vue';
import Amplop from '../components/Amplop.vue';
import { promiseTimeOut } from '../utils/promiseTimeOut';

export default {
  name: 'LiveWedding',
  components: { Souvenir, Amplop },
  setup() {
    const state = reactive({
      lang: '',
      souvenir: 'collapsed',
      amplop: 'collapsed',
      blur: false
    });

    const route = useRoute();

    route.path.startsWith('/id') ? (state.lang = 'id') : (state.lang = 'en');

    async function handleClose(name) {
      console.log(name);
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
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.live-wedding {
  background: $color-blue;
  height: 100vh;
}

.popup-souvenir,
.e-amplop {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
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
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 1.5rem;
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
  z-index: 5;
}

.util {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-green-c;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 1.4rem;

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
