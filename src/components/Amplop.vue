<template>
  <div class="amplop">
    <img
      @click="handleClose"
      src="../assets/icons/icon-close.svg"
      alt="close"
      class="ic-close"
    />
    <div class="bg-top">
      <img src="../assets/images/bg-amplop-top.png" alt="" />
    </div>
    <div class="bg-bottom">
      <img src="../assets/images/bg-amplop-bottom.png" alt="" />
    </div>
    <h1 class="heading-0 mb-1">E-AMPLOP</h1>
    <p class="text-2">
      Jangan khawatir, kamu tetap bisa memberikan amplop digital untuk Alfarra &
      Gamma dengan cara di bawah ini:
    </p>
    <div class="amplop__items mb-2">
      <div class="amplop__item">
        <span class="item-number">1.</span>
        <p class="text-3 mb-1">Scan QR via <strong>OVO</strong></p>
        <img src="../assets/images/qr-ovo.png" alt="qr-ovo" />
        <p class="text-3 sm">Phone Number xxx</p>
        <p class="text-3 sm">Account Name xxx</p>
      </div>
      <div class="amplop__item">
        <span class="item-number">2.</span>

        <p class="text-3 mb-1">Scan QR via <strong>OVO</strong></p>
        <img src="../assets/images/qr-ovo.png" alt="qr-ovo" />
        <p class="text-3 sm">Phone Number xxx</p>
        <p class="text-3 sm">Account Name xxx</p>
      </div>
      <div class="amplop__item">
        <span class="item-number">3.</span>

        <p class="text-3 mb-1">Scan QR via <strong>OVO</strong></p>
        <img src="../assets/images/qr-ovo.png" alt="qr-ovo" />
        <p class="text-3 sm">Phone Number xxx</p>
        <p class="text-3 sm">Account Name xxx</p>
      </div>
    </div>
    <p class="text-2 text-2--kado">
      Kamu juga bisa mengirimkan kado pernikahan ke:
    </p>
    <p class="text-3 sm">
      Jl. Mawar no 26 Komp.deplu <br />
      Pondok Aren, Tangerang Selatan 15225
    </p>
  </div>
</template>

<script>
export default {
  name: 'Amplop',
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

.ic-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}

.amplop {
  width: 80%;
  height: 90%;
  background-color: $color-green-c;
  padding: 1rem 10rem;
  position: relative;
  z-index: 999;
  border-radius: 1.2rem;
  overflow: hidden;

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    margin-top: 1rem;
    border-bottom: 1px solid $color-green-a;
    padding-bottom: 2rem;
  }

  &__item {
    position: relative;

    img {
      height: 11rem;
    }
  }
}

.bg-top,
.bg-bottom {
  position: absolute;
  z-index: -1;

  img {
    height: 12.5rem;
  }
}

.bg-bottom {
  bottom: -1rem;
  right: 0;
}

.bg-top {
  top: -1rem;
  left: 0;
}

.heading-0 {
  color: $color-blue;
  text-align: center;
  font-size: 5rem;
}

.text-2 {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  color: $color-blue-b;
  line-height: 1.2;
  font-size: 1.7rem;

  &--kado {
    text-align: left;
    width: 100%;
  }
}

.text-3 {
  color: $color-blue-b;

  &.sm {
    font-size: 1.4rem;
    color: $color-blue;
  }
}

.item-number {
  font-family: Bigilla;
  position: absolute;
  left: -2rem;
  top: -5px;
  font-size: 2rem;
  color: $color-green-a;
}
</style>
