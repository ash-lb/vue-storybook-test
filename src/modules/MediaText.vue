<script setup>
defineProps({
  subheading: String,
  heading: String,
  copy: String,
  call_to_action_primary: Object,
  call_to_action_secondary: Object,
  media_type: String,
  image: Object,
  video: Object,
  orientation: String
})
</script>

<template>
  <div class="tw-container tw-mx-auto">
    <div class="tw-grid tw-grid-cols-12 tw-gap-4">
      <div class="tw-col-span-7">
        <h4 class="tw-text-2xl tw-font-black">{{ subheading }}</h4>
        <h2 class="tw-text-5xl tw-font-black tw-pt-2.5">{{ heading }}</h2>
        <p class="tw-mt-10">
          {{ copy }}
        </p>
        <div class="tw-my-10 tw-flex tw-flex-wrap">
          <a
            class="tw-font-black tw-bg-sky-700 tw-text-white tw-py-4 tw-px-10 tw-items-center tw-flex tw-gap-2 hover:tw-bg-sky-900"
            :href="call_to_action_primary.url"
          >
            {{ call_to_action_primary.text }}
            <svg class="tw-w-4 tw-h-4 tw-fill-white tw-pt-px">
              <g id="arrow-right-Layer_2" data-name="Layer 2">
                <g id="arrow-right-Layer_1-2" data-name="Layer 1">
                  <polygon
                    points="0 1.5 1.5 0 8.06 6.56 1.5 13.12 0 11.62 5.06 6.56 0 1.5"
                  ></polygon>
                </g>
              </g>
            </svg>
          </a>
          <a
            class="tw-font-black tw-text-sky-700 tw-py-4 tw-px-6 tw-underline tw-decoration-2 tw-items-center tw-flex tw-gap-2 tw-group hover:tw-text-sky-900"
            :href="call_to_action_secondary.url"
          >
            {{ call_to_action_secondary.text }}
            <svg class="tw-w-4 tw-h-4 tw-fill-sky-700 tw-pt-px group-hover:tw-fill-sky-900">
              <g id="arrow-right-Layer_2" data-name="Layer 2">
                <g id="arrow-right-Layer_1-2" data-name="Layer 1">
                  <polygon
                    points="0 1.5 1.5 0 8.06 6.56 1.5 13.12 0 11.62 5.06 6.56 0 1.5"
                  ></polygon>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="tw-col-span-5">
        <img class="" :alt="image.url" :src="image.url" loading="lazy" />
      </div>
    </div>
  </div>
</template>
