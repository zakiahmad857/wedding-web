<template>
  <div class="greeting-card">
    <h1 class="mb-2">Dear Gamma & Alfarra</h1>
    <textarea
      placeholder="Write your message to the bride & groom here"
      class="lined-textarea text-1"
      name=""
      id=""
      rows="7"
    ></textarea>
    <p>With Love</p>
    <Input class="mb-4 input-custom" placeholder="Write Your Name Here" />
    <Button class="btn-custom">Kirim Ucapan</Button>
  </div>
</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';

export default {
  name: 'GreetingCard',
  components: {
    Input,
    Button
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.greeting-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f5f5;
  padding: 3rem 4rem;
  width: 80%;
  height: 90%;
  border-radius: 0.625rem;
  box-shadow: 0 0.625rem 1.125rem rgba(0, 0, 0, 0.15);
  display: none;
  transform: scale(0);
  transition: transform 0.5s 2s;

  &.showing {
    display: unset;
    transition: transform 0.5s;
  }

  &.showed {
    transition: transform 0.5s 2s;
    display: flex;
    transform: scale(1);
  }
}

.input-custom {
  font-size: 1.5rem;
  min-width: 25rem;
}

.btn-custom {
  background: #f6f5f5;
  box-shadow: 0px -3px 6px 6px #fefdfc, 3px 4px 10px 5px #e0d1d1;
  color: $color-green-a;
  font-weight: 700;
}

.lined-textarea {
  align-self: flex-start;
  display: block;
  width: 100%;
  padding: 2px 0;
  resize: none;
  line-height: 40px;
  background-image: linear-gradient($color-black-4 1px, #f6f5f5 1px);
  background-size: 100% 40px;
  border: 0;
  outline: 0;
  font-weight: 400;
}

h1 {
  font-family: 'Dawning of a New Day', sans-serif;
  font-size: 4.75rem;
  font-weight: 400;
  align-self: flex-start;
  letter-spacing: 2px;
}

p {
  font-family: 'Dawning of a New Day', sans-serif;
  font-size: 3rem;
  font-weight: 400;
}
</style>
