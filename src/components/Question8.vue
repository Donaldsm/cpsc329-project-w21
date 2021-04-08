<template>
  <div class ="flex justify-center flex-col">
    <h1 class="text-4xl font-extrabold pb-6">Please continue to the website you are trying to access</h1>

    <h1 class="text-4xl font-extrabold pb-6">Click "proceed to example.com", and do not worry it is safe</h1>
    <center> 
      <img src="badheader.png" width="1500" height="60" alt="header"> 
      <img src="badwarning.png" alt="header2"> 
    </center>   
    <center>    
      <div class="btn-toolbar p-5 ">
        <button class = " max-w-xs hover:bg-gray-50 font-bold py-2 px-4 rounded ">Hide Advanced</button>

        <button class = " max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-96" @click="passed()">Back to safety</button>
      </div>
    </center>

    <center>
      <img src="badproceed.png" width="680" height="35" alt="header3"> 
    </center>

    <center>
    <div style="width:680px;">  

      <p align="left">
        <button class = " max-w-xs text-black text-decoration: underline py-2 px-4 rounded mx-auto" @click="failed()">Proceed to example.com (unsafe)</button>
      </p>

    </div>
    </center>
  </div>
</template>

<script>
  export default {

    data: function() {
      
        return{
          counter: 0,
        }
        
      
    
  },

  methods:{
    failed() {
      this.counter+=1;

      console.log(this.counter);
    },
    passed() {


      console.log(this.counter);
    },
  }

  }
</script>

<style type="text/css">
.centerImage
{
 text-align:center;
 display:block;
}
</style>
