<script setup>
import { ref } from 'vue'

const isActive = ref(0)

const items = [
  {
    accordion_question: 'Question 1',
    accordion_answer: 'Answer 1'
  },
  { accordion_question: 'Question 1', accordion_answer: 'Answer 1' }
]

const toggleActive = (val) => {
  isActive.value = val === isActive.value ? 0 : val
}
</script>

<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    class="tw-border-b-2 tw-border-solid tw-border-b-black"
  >
    <button
      @click="toggleActive(index + 1)"
      class="tw-relative tw-flex tw-w-full tw-items-center tw-cursor-pointer tw-bg-transparent tw-border-none tw-text-xl tw-py-5 tw-pl-5 tw-pr-0"
      aria-expanded="false"
      :aria-controls="index + 1"
      role="tab"
    >
      {{ item.accordion_question }}
      <div
        class="tw-absolute tw-right-0 tw-text-2xl tw-h-4 tw-w-4 tw-transition-transform"
        :class="isActive === index + 1 ? 'rotate-180' : ''"
      >
        <svg class="h-full w-full">
          <use xlink:href="#arrow-down"></use>
        </svg>
      </div>
    </button>
    <div
      :class="isActive === index + 1 ? 'tw-visible tw-max-h-full' : 'tw-invisible tw-h-0'"
      class="tw-max-h-0 tw-text-sm"
      role="tabpanel"
    >
      <div class="p-5" v-html="item.accordion_answer"></div>
    </div>
  </div>
</template>
