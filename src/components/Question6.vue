<template> 
<div>
<div class ="flex justify-center flex-col px-10">

<h1 class="text-l font-bold pb-6"> With everything being online due to covid its become easier for hackers to scam the users if they are not aware. Phishing emails that look extremely real and try to imporsonate the orginizaTtions that you trust in order to get the users personal information, such as their email, password and card information  </h1>
<h1 class="text-l font-bold pb-6"> SO BE AWARE! below are 2 emails, can you identify which is the phishing one? </h1>
</div>
 
<div class="row">

<h1>1)</h1>
<img class ="mx-auto" width="500" height="800" src="img/Q61.png" alt=""/>

<div>
<h1>2)</h1>
<img class ="mx-auto" width="500" height="500" src="img/Q62.png" alt=""/>
</div>
<h1>source: https://en.wikipedia.org/wiki/Phishing
  and 
  https://www.imperva.com/learn/application-security/phishing-attack-scam/
</h1>
  <input type="radio" v-model="color" value="true" name= "True">first photo is phishing!
  <input type="radio" v-model="color" value="false" name= "True">second photo is phishing!
  <input type="radio" v-model="color" value="false" name= "True">Both are phishing emails!
<div>
<button class = " max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto ">Submit!</button>
</div>

</div> 
</div>
</template> 

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Q6Card extends Vue {
  @Prop() private msg!: string;                                                                                                                                                                                                    

}

</script>