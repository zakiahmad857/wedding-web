<template>
  <div class="thankyou">
    <h1 class="mb-2">
      Terima Kasih <br />
      atas ucapannya
    </h1>
    <img
      class="couple mb-3"
      src="../assets/images/image-couple.svg"
      alt="gamma alfarra"
    />
    <img
      class="gamma-alfarra mb-3"
      src="../assets/images/text-gamma-alfarra.svg"
      alt="gamma alfarra"
    />
    <Button @click="handleClick" style="width: 20rem" color="grey"
      >Masuk Ke Acara</Button
    >
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: 'Thankyou',
  components: {
    Button
  },
  setup(_props, ctx) {
    function handleClick(e) {
      ctx.emit('done', e);
    }

    return { handleClick };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Dawning of a New Day', sans-serif;
  font-size: 4.75rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1;
}

.couple {
  height: 20rem;
  position: relative;
  z-index: 10;
}

.thankyou {
  padding: 3rem 4rem;
  width: 80%;
  height: 90%;
  border-radius: 0.625rem;
  box-shadow: 0 0.625rem 1.125rem rgba(0, 0, 0, 0.15);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f5;
  position: relative;

  transform: scale(0);
  transition: transform 1s ease-out;

  &.showing {
    display: unset;
  }

  &.showed {
    display: flex;
    transform: scale(1);
  }

  &.collapsing {
    display: flex;
    transition: transform 0.5s;
    transform: scale(0);
  }

  .gamma-alfarra {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
}
</style>
