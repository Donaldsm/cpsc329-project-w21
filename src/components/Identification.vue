<template>
  <div class="shadow-2xl w-1/3 h-300 rounded-lg flex flex-col">
    <input
      class="mx-auto m-3 p-3 border-blue-800 border-3 rounded-lg placeholder-opacity-30"
      type="text"
      v-model="password1"
      id="pass1"
      placeholder=" Enter your first password"
    />
    <input
      class="mx-auto m-3 p-3 border-blue-800 border-3 rounded-lg placeholder-opacity-30"
      type="text"
      v-model="password2"
      id="pass1"
      placeholder="Enter your second password"
    />
    <input
      class="mx-auto m-3 p-3 border-blue-800 border-3 rounded-lg placeholder-opacity-30"
      type="text"
      v-model="password3"
      id="pass1"
      placeholder="Enter your third password"
    />
    <button
      class="m-3 p-3 bg-yellow-300 hover:bg-yellow-500 rounded-lg border-yellow-800"
      @click="check"
    >
      Check your passwords
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class Identification extends Vue {
  @Prop() private userInputs: any;
  private score = 0;
  private password1: any = "";
  private password2: any = "";
  private password3: any = "";

  mounted() {
    console.log(this.userInputs);
    console.log(this.userInputs.fname);
  }

  check() {
    //pull the information that the user entered from local storage
    // parse out the passwords and see if any subset of letters == something from the list
    let temp = JSON.parse(JSON.stringify(this.userInputs));

    for (const [key, value] of Object.entries(temp)) {
      if (
        value == this.password1 ||
        value == this.password2 ||
        value == this.password3
      ) {
        console.log(value);
      }
    }

    let result = {
      score: this.score,
    };
    this.$emit("clicked", result);
  }
}
</script>