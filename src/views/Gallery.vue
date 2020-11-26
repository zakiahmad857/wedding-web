<template>
  <div class="gallery">
    <decoration />
  </div>
</template>

<script>
import Decoration from '../components/Decoration.vue';

export default {
  name: 'Gallery',
  components: {
    Decoration
  }
};
</script>
<style lang="scss" scoped>
@import '../scss/variables.scss';

.gallery {
  height: 100vh;
  background-color: $color-green-c;
}
</style>
