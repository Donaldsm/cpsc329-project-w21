<template>
    <div class ="flex justify-center flex-col">
        <h1 class="text-4xl font-extrabold pb-60">fake ad 1</h1>
      
     </div>
     
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Question4ad1 extends Vue {
  @Prop() private msg!: string;
  private  page_count:number = 0;





}




</script>
