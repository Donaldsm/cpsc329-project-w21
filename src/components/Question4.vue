<template>
    <div class ="flex justify-center flex-col">
      <component v-bind:is="component"></component>
     </div>
     
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Q4aCard from '@/components/Question4a.vue';
import Q4bCard from '@/components/Question4b.vue';

@Component({
  components: {
    'Q4a':Q4aCard,
    'Q4b':Q4bCard,
  }
})
export default class Question4 extends Vue {
  @Prop() private msg!: string;
  public page_count:number = 0;

<<<<<<< HEAD
export default class Q4Card extends Vue {
  private part: number = 0;
  public counter: number = 0;
  date () {
=======
  data () {
>>>>>>> parent of 234536e (Implemented Question 8 and 4 ready for linking)
    return {
      component: 'Q4a'
    }
  }



}

</script>
