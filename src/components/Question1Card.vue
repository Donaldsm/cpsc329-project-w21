<template>
  <div class ="flex justify-center flex-col">
    <h1 class="text-4xl font-extrabold pb-6">Alright! Lets Get Started Then...</h1>

    <h1 class="text-4xl font-extrabold pb-6">Firstly...</h1>

    <div class="max-w-s rounded overflow-hidden shadow-lg my-2 mx-auto">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Let Us Get to Know You Better!</div>
        <p class="text-grey-darker text-base">
          Please fill out the following information:
        </p>
        <form class= "p-6">
          <div class="flex flex-col mb-4">
            <label>What is your first name?</label>
            <input v-model="fname" type='text'>
          </div>
          <div class="flex flex-col mb-4">
            <label>What is your last name?</label>
            <input v-model="lname" type='text'>
          </div>
          <div class="flex flex-col mb-4">
            <label>What is your phone number?</label>
            <input v-model="pno" type='number'>
          </div>
          <div class="flex flex-col mb-4">
            <label>Whens your birthday?</label>
            <input v-model="bday" type='date'>
          </div>
          <div class="flex flex-col mb-4">
            <label>What is your favorite color?</label>
            <input v-model="fcol" type='text'>
          </div>
          <div class="flex flex-col mb-4">
            <label>Which city do you live in?</label>
            <input v-model="city" type='text'>
          </div>
          <div class="flex flex-col mb-4">
            <label>What is your favorite ice cream flavor?</label>
            <input v-model="icecream" type='text'>
          </div>

          <button type = "button" class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addpoints">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data: function() {
      
        return{
          counter: 0,
          fname: undefined,
          lname: undefined,
          pno: undefined,
          bday: undefined,
          fcol: undefined,
          city: undefined,
          icecream: undefined,
          person: undefined,
        }
        
      
    
  },

  methods:{
    addpoints() {
      if (this.fname != undefined){this.counter +=1;}
      if (this.lname != undefined){this.counter +=1;}
      if (this.pno != undefined){this.counter +=1;}
      if (this.bday != undefined){this.counter +=1;}
      if (this.city != undefined){this.counter +=1;}

      console.log(this.counter);

      this.person = {
        counter: this.counter,
        fname: this.fname,
        lname: this.lname,
        pno: this.pno,
        bday: this.bday,
        city: this.city,
        icecream: this.icecream,
        fcol: this.fcol
      }

      this.$emit('clicked', this.person)
    },
    
  }

  }
</script>
