<template>
  <div class="tour">
    <div v-for="(step, i) in steps" :key="step.target">
      <tooltip
        v-if="state.currentStep === i"
        :content="step.content"
        :header="step.header"
        :currentStep="state.currentStep"
        :lastStep="steps.length"
        :target="step.target"
        :modifiers="step.modifiers"
        :position="step.position"
        @close="handleClose"
        @next="handleNext"
        @back="handleBack"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Cookies from 'js-cookie';
import Tooltip from './Tooltip.vue';
export default {
  components: { Tooltip },
  name: 'tour',
  props: {
    steps: Array
  },
  setup(props, _ctx) {
    const state = reactive({
      currentStep: -1
    });

    function handleClose() {
      state.currentStep = -1;
      const cookie = Cookies.get('isFinishedTutorial');
      if (!cookie) {
        Cookies.set('isFinishedTutorial', true);
      }
    }

    function handleNext() {
      if (state.currentStep < props.steps.length - 1) state.currentStep++;
      else {
        state.currentStep = -1;
        const cookie = Cookies.get('isFinishedTutorial');
        if (!cookie) {
          Cookies.set('isFinishedTutorial', true);
        }
      }
    }

    function handleBack() {
      state.currentStep--;
    }

    function start() {
      state.currentStep = 0;
    }

    return { state, handleClose, handleNext, handleBack, start };
  }
};
</script>

<style></style>
