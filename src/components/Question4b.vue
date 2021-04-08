<template>
    <div class ="flex justify-center flex-col">
        <h1 class="text-4xl font-extrabold pb-20">Please continue to next part of quiz:</h1>
        <component v-bind:is="component1"></component>

        <button class = " max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto " @click="nextPart()">Continue</button>
      
     </div>
     
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Q4ad1Card from '@/components/Question4ad1.vue';
import Q4ad2Card from '@/components/Question4ad2.vue';

@Component({
  components: {
    'Q4ad1':Q4ad1Card,
    'Q4ad2':Q4ad2Card,
  }
})
export default class Question4b extends Vue {
  @Prop() private msg!: string;
  private  page_count:number = 0;

  date () {
    return {
      component1: 'Q4ad1',
      component2: 'Q4ad2'
    }
  }



}




</script>
