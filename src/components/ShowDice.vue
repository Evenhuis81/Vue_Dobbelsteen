<template>
  <div class="box has-text-centered">
    <!-- eslint-disable-next-line -->
    <span
      id="dice"
      v-for="(die, index) in dice"
      :key="index"
      v-html="get(die)"
    />
  </div>
</template>

<script>
export default {
  props: {
    dice: {
      type: Array,
      required: true
    }
  },
  methods: {
    get(die) {
      return `&#x268${die - 1};`;
    }
  }
};
</script>

<style>
#dice {
  font-size: 6rem;
}
</style>
