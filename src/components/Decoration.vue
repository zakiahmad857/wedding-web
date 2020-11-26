<template>
  <div class="bg-top"></div>
  <div class="bg-bottom"></div>
</template>

<script>
export default {
  name: 'Decoration'
};
</script>

<style lang="scss" scoped>
.bg-top {
  background-image: url('../assets/images/bg-login-flower-top.png');
  height: 30vh;
  top: 0;
  background-position: center bottom;
}

.bg-bottom {
  bottom: 0;
  height: 40vh;
  background-image: url('../assets/images/bg-login-flower-bottom.png');
  background-position: center top;
}

.bg-top,
.bg-bottom {
  position: fixed;
  left: 0;
  width: 100%;
  background-size: cover;
  z-index: 0;
}
</style>
