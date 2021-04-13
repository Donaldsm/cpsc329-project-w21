<template>

 <div class="">  
      <div v-if="this.part == 0">
          <div class ="flex justify-center flex-col">
          <h1 class="text-4xl font-extrabold pb-6">Question 4:</h1>

        <h1 class="text-2xl font-bold pb-40">
          Simply go to the next question to continue.
        </h1>

        <button
          class="max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
          @click="updatePopup()"
        >
          Next Question
        </button>
      </div>
    </div>

    <div v-if="this.part == 1">
      <h1 class="text-4xl font-extrabold pb-4">
        Please continue to next part of quiz:
      </h1>
      <h1 class="text-xs font-bold p-10">
        hint: think about what fake buttons might look like
      </h1>
      <button
        class="max-w-xs bg-red-500 hover:bg-green-700 text-green font-bold py-10 px-9 rounded mx-auto"
        @click="failed()"
      >
        Continue
      </button>
      <br />
      <button
        class="max-w-xs bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mx-auto"
        @click="failed()"
      >
        Continue
      </button>
      <br />
      <button
        class="max-w-xs bg-black hover:bg-blue-700 text-white font-bold py-3 px-1 rounded mx-auto"
        @click="failed()"
      >
        Continue
      </button>
      <br />
      <button
        class="max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
        @click="nextPart()"
      >
        Continue
      </button>
      <br />
      <button
        class="max-w-xs bg-orange-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mx-auto"
        @click="failed()"
      >
        Continue
      </button>
      <br />
      <button
        class="max-w-xs bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
        @click="failed()"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
// @ts-ignore
export default {
  
  data () {
    return {
        part: 0,
        counter: 0,
    }
  },

  methods:{
    updatePopup() {
    var r = confirm("Please update web flash player");
    if (r == true) {
        this.counter +=1;
      
      }
      this.part +=1;
      let result = {
        score: this.counter,
      }
      this.$emit('clicked', this.result);
    },

    failed() {
        this.counter +=1;
    }
  }
  
}
</script>
