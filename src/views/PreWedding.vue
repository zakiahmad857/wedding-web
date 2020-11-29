<template>
  <div class="pre-wedding">
    <navigation variant="transparent" />
    <div class="pre-wedding__1">
      <h1 class="heading-0">Pre-<br />Wed</h1>
      <div class="one__img-container">
        <img
          class="img-1"
          src="../assets/images/prewed-1.png"
          alt="Pre Wedding"
        />
        <div class="one__description">
          This is a description or a story of the photoshoot theme <br />
          This is a description or a story of the photoshoot theme <br />
          This is a description or a story of the photoshoot theme
        </div>
      </div>
      <div @click="this.scrollToTwo" class="one__arrow-down">
        <img src="../assets/icons/icon-arrow-down.svg" alt="" />
      </div>
    </div>
    <div ref="preWed2" class="pre-wedding__2">
      <div class="two__img-container two__img-container--1">
        <img src="../assets/images/prewed-2.png" alt="Pre Wedding" />
        <h2>This is a descri<br />ption</h2>
      </div>
      <div class="two__img-container two__img-container--2">
        <img src="../assets/images/prewed-3.png" alt="Pre Wedding" />
        <p class="mt-3 text-2">
          This is a description or a story of the photoshoot theme This is a
          description or a story of the photoshoot theme This is a description
          or a story of the photoshoot theme
        </p>
      </div>
    </div>
    <div class="pre-wedding__3">
      <img src="../assets/images/prewed-3.png" alt="Pre Wedding" />
      <div class="text">
        <p class="text-2 mb-3">
          This is a description or a story of the photoshoot theme This is a
          description or a story of the photoshoot theme This is a description
          or a story of the photoshoot theme
        </p>
        <img
          class="underline"
          src="../assets/images/prewed-underline.svg"
          alt=""
        />
      </div>
    </div>
    <div class="pre-wedding__4">
      <div class="two__img-container two__img-container--1">
        <img src="../assets/images/prewed-2.png" alt="Pre Wedding" />
        <h2>This is a descri<br />ption</h2>
      </div>
      <div @click="this.scrollToTop" class="back-to-top">
        <div class="back-to-top__container">
          <img src="../assets/icons/icon-arrow-down.svg" alt="" />
        </div>
        <p class="text-3 mt-1">Back To Top</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
export default {
  components: { Navigation },
  name: 'PreWedding',
  mounted() {
    const root = document.getElementsByTagName('html')[0];
    root.classList.add('snap-scroll');
  },
  unmounted() {
    const root = document.getElementsByTagName('html')[0];
    root.classList.remove('snap-scroll');
  },
  methods: {
    scrollToTwo() {
      const { top } = this.$refs.preWed2.getBoundingClientRect();
      window.scrollTo({ top, behavior: 'smooth', left: 0 });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.pre-wedding {
  background: $color-navy;

  &__1,
  &__2,
  &__3,
  &__4 {
    height: 100vh;
    position: relative;
    scroll-snap-align: center;
  }

  &__2 {
    display: grid;
    grid-template-columns: 3fr 4fr;
    gap: 4rem;
  }

  &__3 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-items: center;
    align-items: center;

    img {
      width: 80%;
    }

    .text {
      position: relative;
    }

    .text-2 {
      color: $color-brown;
      line-height: 1.3;
      font-size: 2rem;
      width: 80%;
    }

    .underline {
      width: 120%;
      position: absolute;
      left: -9rem;
    }
  }

  &__4 {
    display: flex;
    justify-content: center;
  }
}

.back-to-top {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background: rgba(196, 196, 196, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-3 {
    text-align: center;
    font-weight: 700;
    color: $color-blue-c;
  }

  img {
    transform: rotate(180deg);
  }
}

.one {
  &__img-container {
    position: relative;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    left: 36.5%;
    width: 50%;
  }
  &__description {
    position: absolute;
    top: 85%;
    left: 5rem;
    font-family: 'Peddana', sans-serif;
    line-height: 1.2;
    font-size: 1.8rem;
    color: $color-green;
    background-color: $color-brown-a;
    padding: 5rem 0 2rem 3rem;
    width: 105%;
    z-index: 0;
  }
  &__arrow-down {
    position: absolute;
    bottom: -4rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background: rgba(196, 196, 196, 0.1);
    height: 8rem;
    width: 8rem;
    clip-path: inset(0% 0% 50% 0%);

    img {
      margin-top: 1.6rem;
    }
  }
}

.two {
  &__img-container {
    position: relative;
    margin-top: 10rem;
    height: 60%;

    &--1 {
      justify-self: flex-end;
    }

    &--2 {
      height: 45%;
    }

    img {
      height: 100%;
    }

    h2 {
      width: 15%;
      position: absolute;
      top: -5rem;
      left: -3rem;
      font-size: 2.5rem;
      color: $color-brown;
      font-family: 'Bigilla', sans-serif;
    }

    .text-2 {
      width: 575.5px;
      border-top: 1px solid $color-brown;
      font-size: 1.4rem;
      line-height: 1.2;
      padding-top: 1rem;
      color: $color-brown;
    }
  }
}

.heading-0 {
  font-weight: 400;
  font-size: 15rem;
  color: $color-brown;
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  left: 20%;
  letter-spacing: 0.02em;
  line-height: 0.8;
  z-index: 1;
}

.img-1 {
  position: relative;
  z-index: 1;
  width: 100%;
}
</style>

<style>
html.snap-scroll {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>
