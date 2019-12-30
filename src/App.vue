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
      <p>{{ sliderValue }}</p>
      <span></span>
      <button type="button" class="button is-primary" @click="rollDice">
        {{ initialValue }}
      </button>
      <br />
      <br />
      <button
        :disabled="resetIsDisabled"
        type="button"
        class="button is-small is-danger is-outlined"
        @click="reset"
      >
        reset
      </button>
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
      dices: 8,
      resetIsDisabled: true,
      sliderValue: 8
    };
  },
  methods: {
    //sliderValue() {},
    rollDice() {
      this.dice = [];
      this.resetIsDisabled = false;
      this.initialValue = "Again!";
      for (let index = 0; index < this.dices; index++) {
        const facevalue = Math.ceil(Math.random() * 6);
        this.dice.push(facevalue);
      }
    },
    reset() {
      this.resetIsDisabled = true;
      this.initialValue = "Roll 8 Dices";
      this.dice = [];
    }
  }
};
</script>
