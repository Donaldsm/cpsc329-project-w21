<template>
  <div class="intro">
    <h1 class="text-4xl font-extrabold p-6">
      Think You Are Safe On A Computer?
    </h1>

    <h2 class="text-2xl font-bold p-6">Lets Find out!</h2>

    <h3 class="text-xl font-bold p-6">Click the Link below to start!</h3>

    <router-link to="/quiz">
      <button
        class="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
      >
        Go!
      </button>
    </router-link>
    <div id="terms">
      <router-link to="/termsandcons" class="text-blue-300 hover:text-blue-500"
        >terms and conditions</router-link
      >
    </div>
  </div>
</template>


<style lang="less">
#terms {
  padding: 30px;
}

.intro {
  align-content: center;
  justify-content: center;
}
</style>