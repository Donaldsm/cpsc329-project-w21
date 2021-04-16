<template>
  <div>
    <div class="flex justify-center flex-col px-10">
      <h1 class="text-3xl font-extrabold pb-6">
        Look at the comic below and answer the following questions
      </h1>
    </div>

    <div class="row">
      <img class="mx-auto" src="/img/Q3.png" alt="" />

      <h1>
        source: https://www.explainxkcd.com/wiki/index.php/1553:_Public_Key
      </h1>
      <h3>
        Would posting their private key with his friends be such a bad idea?
      </h3>

      <input type="radio" id="one" value="One" @click="yes" />
      <label for="one">yes</label>
      <br />
      <input type="radio" id="two" value="Two" @click="no" />
      <label for="two">no</label>

      <div>
        <button
          class="max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
          @click="check"
        >
          Submit!
        </button>
      </div>
    </div>
  </div>
</template> 

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Q3Card extends Vue {
  picked: any;
  private counter: number = 0;

  check() {
    console.log("checking");
    if (this.picked == true) {
      this.counter++;
      let result = {
        score: this.counter,
      };
      console.log("yes selected");
      this.$emit("clicked", result);
    } else if (this.picked == false) {
      let result = {
        score: this.counter,
      };
      console.log("no selected");
      this.$emit("clicked", result);
    }
  }

  yes(){
    this.picked = true;
  }

  no(){
    this.picked = false;
  }
}
</script>


