<template>
  <div class="before-event">
    <div class="before-event__bg" />
    <div class="before-event__container">
      <div class="couple">
        <img src="../assets/images/img-bride.png" alt="bride" />
      </div>
      <div class="info">
        <img
          src="../assets/images/text-gamma-alfarra-before-event.png"
          alt="gamma-alfarra"
          class="mb-2"
        />
        <h1 class="heading-1 mb-3">THE WEDDING CEREMONY</h1>
        <p class="text-1">
          Website dapat diakses <br />
          pada tanggal 13 December 2020 <br />
          mulai jam 8.00 WIB <br />
        </p>
      </div>
      <div class="couple">
        <img src="../assets/images/img-groom.png" alt="groom" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeEvent'
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.before-event {
  height: 100vh;
  background: $color-green-c;
  position: relative;

  &__bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url('../assets/images/bg-before-event.png');
    height: 40vh;
    background-size: cover;
    background-position: center top;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    justify-items: center;
  }
}

.couple {
  padding-top: 2rem;
  img {
    height: 35rem;
    width: auto;
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  .heading-1 {
    color: $color-maroon-a;
    font-size: 5rem;
  }

  .text-1 {
    color: $color-green;
  }

  .heading-1,
  .text-1 {
    text-align: center;
  }
}
</style>
