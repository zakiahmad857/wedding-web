<template>
  <nav class="nav-items">
    <router-link :to="`/${state.lang}/live-wedding`">
      <div
        :class="{ transparent: this.variant === 'transparent' }"
        class="nav-item"
      >
        <img
          v-if="this.variant === 'transparent'"
          src="../assets/icons/icon-home-grey.svg"
          alt="home"
        />
        <img v-else src="../assets/icons/icon-home.svg" alt="home" />
      </div>
    </router-link>
    <div
      :class="{ transparent: this.variant === 'transparent' }"
      class="nav-item"
    >
      <img
        v-if="!isPlay"
        src="../assets/icons/icon-sound-on-grey.svg"
        alt="home"
        @click.prevent="this.playMusic"
      />
      <img
        v-else-if="isPlay"
        src="../assets/icons/icon-sound-off.svg"
        alt="home"
        @click.prevent="this.stopMusic"
      />
      <img v-else src="../assets/icons/icon-sound-on.svg" alt="sound-on" />
      <div style="display: none">
        <vue-plyr ref="plyr">
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
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';

export default {
  name: 'Navigation',
  props: {
    variant: String
  },
  setup() {
    const state = reactive({ lang: '' });
    const route = useRoute();
    const isPlay = computed(() => store.state.isPlay);
    route.path.startsWith('/id') ? (state.lang = 'id') : (state.lang = 'en');

    return { state, isPlay };
  },
  mounted() {
    if (this.isPlay) {
      setTimeout(() => {
        this.playMusic();
      }, 100);
    }
  },
  methods: {
    playMusic() {
      this.$refs.plyr.player.play();
      store.dispatch('playMusic');
    },
    stopMusic() {
      this.$refs.plyr.player.stop();
      store.dispatch('stopMusic');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.nav-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $color-green-c;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s;

  &.transparent {
    background: transparent;
  }

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
