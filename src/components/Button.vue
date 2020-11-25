<template>
  <button class="btn" :class="this.class">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    class: String
  }
};
</script>

<style lang="scss" scoped>
.btn {
  background: #ede6dc;
  border: 1px solid #ede6dc;
  box-sizing: border-box;
  box-shadow: -1px -3px 6px 6px #f8f3ed, 3px 4px 10px 5px #c1aa94;
  border-radius: 25px;
  padding: 0.625rem 1.25rem;
  text-align: center;
  cursor: pointer;
  color: #d97e56;
  min-width: 12.5rem;
  outline: none;
  font-size: 1.25rem;
  font-family: 'Darker Grotesque', sans-serif;

  &:active {
    box-shadow: inset 0px -3px 7px 2px #f8f3ed, inset 3px 4px 9px 2px #c1aa94;
  }
}
</style>
