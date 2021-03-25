<template>
  <div class>
    <Intro_main/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Intro_main from '@/components/Intro_main.vue'; 

@Component({
  components: {
    //HelloWorld,
    Intro_main,
  },
})
export default class Home extends Vue {
  private points = 10;
}
</script>
