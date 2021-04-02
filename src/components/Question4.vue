<template>
    <div class ="flex justify-center flex-col">
        <h1 class="text-4xl font-extrabold pb-6">Question 4:</h1>

        <h1 class="text-2xl font-bold pb-40">Simply go to the next question to continue.</h1>

        <button class = " max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto " @click="updatePopup()">Next Question</button>
     </div>
     
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Question4 extends Vue {
  @Prop() private msg!: string;
  private  page_count:number = 0;

  updatePopup() {
    var r = confirm("Please update web flash player");
    if (r == true) {
        this.page_count++;
    }



  }




}




</script>
