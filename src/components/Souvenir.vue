<template>
  <div class="souvenir">
    <img
      @click="handleClose"
      src="../assets/icons/icon-close.svg"
      alt="close"
      class="ic-close"
    />
    <h1 class="heading-0 mb-4">SOUVENIR</h1>
    <div class="souvenir__container">
      <p class="text-2 align-right">
        Souvenir pernikahan kami merupakan scarf dengan gambar yang dibuat oleh
        Alfarra. Dengan senang hati kami akan mengirimkannya langsung ke rumah
        kamu. Isi datamu di bawah ini ya..
      </p>
      <img
        class="souvenir__img"
        src="../assets/images/img-souvenir.png"
        alt="Souvenir"
      />
      <p class="text-2">
        Souvenir pernikahan kami merupakan scarf dengan gambar yang dibuat oleh
        Alfarra. Dengan senang hati kami akan mengirimkannya langsung ke rumah
        kamu. Isi datamu di bawah ini ya..
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Souvenir',
  setup(_props, ctx) {
    function handleClose(e) {
      ctx.emit('close', e);
    }

    return { handleClose };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.souvenir {
  width: 80%;
  height: 90%;
  background-color: $color-green-c;
  padding: 3rem;
  position: relative;
  z-index: 999;
  border-radius: 1.2rem;

  &__container {
    display: flex;
  }

  &__img {
    height: 25rem;
    margin: 0 2rem;
  }
}

.heading-0 {
  text-align: center;
  font-weight: 400;
  color: $color-blue;
}

.text-2 {
  font-size: 1.7rem;
  margin-top: -0.5rem;
  line-height: 1.4;

  &.align-right {
    text-align: right;
  }
}

.ic-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}
</style>
