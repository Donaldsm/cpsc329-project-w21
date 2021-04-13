<template>
  <div class="flex justify-center flex-col px-10">
    <h1 class="text-4xl font-extrabold pb-6">Question 5:</h1>

    <h1 class="text-3xl font-extrabold pb-6">
      Did you know, that everything you see on a computer is really just a bunch
      of 1's and 0's?
    </h1>

    <h1 class="text-xl font-extrabold pb-6">
      For example, "Hello!" is really just "01001000 01100101 01101100 01101100
      01101111 00100001"!
    </h1>

    <h1 class="text-2xl font-extrabold pb-6">Now...</h1>

    <h1 class="text-l font-bold pb-6">
      01001000 01100101 01101100 01101100 01101111 00100001 00100000 01010000
      01101100 01100101 01100001 01110011 01100101 00100000 01100100 01101111
      00100000 01101110 01101111 01110100 00100000 01110100 01101111 01110101
      01100011 01101000 00100000 01110100 01101000 01101001 01110011 00100000
      01100010 01110101 01110100 01110100 01101111 01101110 00101110
    </h1>

    <button
      class="max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
      @click="incrementcounter"
    >
      Click me!
    </button>

    <h1 class="text-xs font-bold p-4">
      hint: remember! No one said this was a closed book test!
    </h1>

    <h1 class="text-2xl font-extrabold pb-6">
      When you think you got it...click continue below.
    </h1>

    <button
      type="button"
      class="max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
      @click="con"
    >
      Continue
    </button>
  </div>
</template>

<script>
// @ts-ignore
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    incrementcounter() {
      this.counter++;
      console.log(this.counter);
    },
    con(){
        let result = {
            scrore: this.counter,
        }
        this.$emit('clicked', result);
    }
  },
};
</script>
