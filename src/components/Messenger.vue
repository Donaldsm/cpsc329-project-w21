<template>
  <div
    class="shadow-2xl rounded-xl flex flex-container font-fira flex-col w-1/3"
    id="gameSpace"
  >
    <h1 class="m-3 mx-auto">
      Try to select the two packets that will get you the decryption key
    </h1>
    <div class="w-full">
      <div class="mx-auto w-full" id="game-board"></div>
    </div>
    <button
      v-if="gameRunning == false"
      class="p-3 m-3 mx-auto bg-blue-300 rounded-xl md:text-4xl text-xl text-blue-800 w-1/3 py-42 pl-3 mx-auto hover:bg-blue-500"
      @click="startgame()"
    >
      Start Game
    </button>
    <button
      @click="check()"
      class="bg-yellow-300 p-3 hover:bg-yellow-500 max-w-xs text-white font-bold py-2 px-4 rounded mx-auto"
    >
      Continue
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ts-ignore
import { game } from "../assets/js/messenger.js";
export default class Messenger extends Vue {
  private gameRunning: boolean = false;
  private counter: number = 0;

  public startgame() {
    this.gameRunning = true;
    this.counter++;
    game(document.getElementById("#game-board"));
  }

  public check() {
      let result = {
          score: this.counter
      };
      this.$emit('clicked', result);
  }
}
</script>