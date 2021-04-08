<template>
  <div class="home">
    <Intro/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Intro from '@/components/Intro_main.vue';

@Component({
  components: {
    HelloWorld,
    Intro,
  },
})
export default class Home extends Vue {
  private points = 10;
}
</script>

<style lang="less">
.home{
  justify-content: center;

  align-content: center;
}
</style>
