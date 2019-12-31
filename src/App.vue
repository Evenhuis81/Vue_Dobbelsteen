<template>
  <div id="app">
    <div class="box has-text-centered">
      <input
        v-model="sliderValue"
        type="range"
        min="1"
        max="20"
        class="slider"
        id="myRange"
        style="float: left;"
      />
      <span></span>
      <button type="button" class="button is-primary" @click="rollDice">{{ buttonmsg }}</button>
      <br />
      <br />
      <button
        :disabled="resetIsDisabled"
        type="button"
        class="button is-small is-danger is-outlined"
        @click="reset"
      >reset</button>
    </div>
    <show-dice :dice="dice" v-show="dice.length" />
    <calculated-results-table :dice="dice"></calculated-results-table>
  </div>
</template>

<script>
import ShowDice from "./components/ShowDice.vue";
import CalculatedResultsTable from "./components/CalcResTable.vue";

export default {
  name: "app",
  components: {
    ShowDice,
    CalculatedResultsTable
  },
  data() {
    return {
      dice: [],
      resetIsDisabled: true,
      sliderValue: 8
    };
  },
  methods: {
    // sliderValue() {

    // },
    rollDice() {
      this.dice = [];
      this.resetIsDisabled = false;
      for (let index = 0; index < this.sliderValue; index++) {
        const facevalue = Math.ceil(Math.random() * 6);
        this.dice.push(facevalue);
      }
    },
    reset() {
      this.resetIsDisabled = true;
      this.dice = [];
    }
  },
  computed: {
    buttonmsg() {
      return this.resetIsDisabled
        ? "Roll " + this.sliderValue + " Dices"
        : "Again!!!";
    }
  }
};
</script>
