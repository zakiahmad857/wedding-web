<template>
  <div class="welcome">
    <div
      class="welcome-step-1"
      :class="{ 'fade-out': state.currentStep !== 'step-1' }"
    >
      <div class="bg"></div>
      <div class="bg-1"></div>
      <img
        src="../assets/images/image-welcome.svg"
        alt="welcome"
        class="welcome-img"
      />
    </div>
    <div class="welcome-step-2">
      <GreetingCard />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import GreetingCard from '../components/GreetingCard.vue';

export default {
  name: 'Welcome',
  components: { GreetingCard },
  setup() {
    const state = reactive({
      currentStep: 'step-1'
    });

    return { state };
  },
  mounted() {
    setTimeout(() => {
      this.state.currentStep = 'step-2';
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.welcome {
  height: 100vh;
}

.welcome-img {
  height: 90vh;
  width: auto;
}

.welcome-step-1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  transition: opacity 2s ease-out, blur 1s 2s;

  &.fade-out {
    opacity: 0.3;
    filter: blur(20px);
  }

  .bg,
  .bg-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bg {
    background-color: $color-orange-c;
    z-index: -2;
  }

  .bg-1 {
    background: radial-gradient(
      108.79% 108.79% at 51.91% 51.95%,
      #fafafa 36.46%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: -1;
  }
}

.welcome-step-2 {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
