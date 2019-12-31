<template>
  <!-- uitgecommentariseerde code verwijderen -->

  <!-- <span v-for="(die, index) in dice" :key="index">{{ die }}</span> -->

  <!-- v-show in parent component (App.vue) -->
  <div>
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

    <!-- bovenstaande tabel kun je ook met 1 i.p.v. 2 v-for loops maken: -->
    <table class="table has-text-centered" v-show="dice.length">
      <thead>
        <tr>
          <th>Value</th>
          <th>Times thrown</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in this.diceCounter" :key="index">
          <td>{{ index + 1 }}</td>
          <td >{{ value }}x</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dice: {
      type: Array,
      required: true
    }

    // uitgecommentariseerde code verwijderen

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
