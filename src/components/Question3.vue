<template> 
<div>
<div class ="flex justify-center flex-col px-10">

<h1 class="text-3xl font-extrabold pb-6"> Look at the comic below and answer the following questions </h1>

</div>
 
<div class="row">

<img src="img/Q3.png" alt=""/>

<h3> Do you think they should share their private key online to get support? </h3>

  <input type="radio" v-model="color" value="true">yes
  <input type="radio" v-model="color" value="false">no
</div> 
</div>
</template> 

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Q3Card extends Vue {
  @Prop() private msg!: string;                                                                                                                                                                                                    
}
</script>