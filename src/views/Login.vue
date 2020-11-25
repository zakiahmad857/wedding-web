<template>
  <div class="login">
    <div class="bg-top"></div>
    <div class="bg-bottom"></div>
    <div class="login__container">
      <h1 class="heading-0">Selamat Datang</h1>
      <h2 class="mb-1">Masukan ID Guest yang didapat dari Undangan</h2>
      <Input
        class="mb-5"
        placeholder="Tulis ID Guest disini"
        @on-change="handleChange"
      />
      <Button @click="handleLogin" class="mb-5">Masuk</Button>
      <div class="langs">
        <router-link to="/id">
          <div @click="state.lang = 'id'" class="lang">
            <img
              class="lang-ico"
              src="../assets/icons/icon-id.svg"
              :class="{ inactive: state.lang === 'en' }"
            />
            <div
              class="shadow-inset"
              :class="{ show: state.lang === 'en', id: state.lang === 'en' }"
            ></div>
          </div>
        </router-link>
        <router-link style="position: relative;" to="/en">
          <div @click="state.lang = 'en'" class="lang">
            <img
              class="lang-ico"
              src="../assets/icons/icon-en.svg"
              :class="{ inactive: state.lang === 'id' }"
            />
            <div
              class="shadow-inset"
              :class="{ show: state.lang === 'id', en: state.lang === 'id' }"
            ></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRoute, useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { reactive, watch } from 'vue';

export default {
  name: 'Home',
  components: {
    Button,
    Input
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      lang: 'id',
      inputVal: ''
    });

    if (route.path.startsWith('/en')) state.lang = 'en';

    watch(
      () => state.lang,
      (lang, prevLang) => {
        console.log(lang, prevLang);
      }
    );

    function handleChange(val) {
      state.inputVal = val;
    }

    function handleLogin() {
      router.push(`/${state.lang}/welcome`);
    }

    return { handleChange, state, handleLogin };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.login {
  height: 100vh;
  background-color: $color-green-c;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30vh;
    position: relative;
    z-index: 1;
  }
}

h1 {
  color: $color-blue-a;
}

h2 {
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 2.25rem;
  color: $color-blue-b;
  font-weight: 400;
}

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

.lang-ico {
  width: 5rem;
  cursor: pointer;
  position: relative;
  display: inline-block;
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2);

  &.inactive {
    opacity: 0.3;
  }
}

.shadow-inset {
  height: 92%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 4px -4px 4px rgba(0, 0, 0, 0.1);

  &.en {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &.id {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.show {
    display: block;
  }
}

.lang {
  position: relative;
}

.langs {
  display: flex;
  align-items: center;
}
</style>
