<template>
  <!-- <span v-for="(die, index) in dice" :key="index">{{ die }}</span> -->
  <table class="table has-text-centered" v-show="dice.length">
    <thead>
      <tr>
        <th>Value</th>
        <td v-for="(value, index) in 6" :key="index">{{ index + 1 }}</td>
      </tr>
      <th>Times thrown</th>
      <td v-for="(value, index) in 6" :key="index">{{ diceCounter[index] }}</td>
    </thead>
  </table>
</template>

<script>
export default {
  props: {
    dice: {
      type: Array,
      required: true
    }

    // data: {
    //   diceLength() {
    //     return 6;
    //   }
    // },
  },
  methods: {
    // timesThrown(value) {
    //   var count = 0;
    //   this.dice.forEach(die => die === value && count++);
    //   return count;
    // }
  },
  computed: {
    diceCounter() {
      let counts = Array(6).fill(0);

      this.dice.forEach(dice => {
        counts[dice - 1]++;
      });

      return counts;
    }
  }
};

// const dice = [1,1,2,3,4,4]; diceCounts = [0,0,0,0,0,0]; for(let i=0;
// i<dice.length; i++) { diceCounts[dice[i-1]]++; }
</script>

<style></style>
