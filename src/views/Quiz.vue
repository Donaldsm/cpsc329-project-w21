
<template>
  <div class="">
    <div class="flex flex wrap">
      <button
        v-if="this.view != 0"
        @click="changePrevView()"
        class="max-w-xs bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-auto"
      >
        Prev Question
      </button>
      <button
        v-if="this.view != 9"
        @click="changeNextView()"
        class="max-w-xs bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-auto"
      >
        Next Question
      </button>
    </div>

    <div>
      <!-- <TC/> -->
      <div v-if="this.view == 0">
        <Q1Card />
      </div>
      <div v-if="this.view == 1">
        <identification class="mx-auto m-3"></identification>
      </div>
      <div v-if="this.view == 2">
        <Q3Card class="mx-auto m-3" />
      </div>
      <div v-if="this.view == 3"></div>
      <div v-if="this.view == 4">
        <Q5Card class="mx-auto m-3" />
      </div>
      <div v-if="this.view == 5">
        <Q6Card class="mx-auto m-3" />
      </div>
      <div v-if="this.view == 6">
        <Messenger class="mx-auto m-3"></Messenger>
      </div>
      <div v-if="this.view == 7"></div>
      <div v-if="this.view == 8"></div>
      <div v-if="this.view == 9"></div>
    </div>
  </div>
</template>



<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Q1Card from '@/components/Question1Card.vue';
import Q3Card from '@/components/Question3.vue';
import Q4Card from '@/components/Question4.vue';
import Q5Card from '@/components/Question5.vue';
import Q6Card from '@/components/Question6.vue';
import Messenger from '../components/Messenger.vue';
import Identification from '../components/Identification.vue';
import TC from "@/components/termsandcons.vue";

@Component({
  components: {
    Q1Card,
    Q3Card,
    Q5Card,

    TC,

    Q4Card,
    Q6Card,
    Messenger,
    Identification,
  },
})
export default class Quiz1 extends Vue {
  private view: number = 0;

  changeNextView() {
    this.view++;
    this.$forceUpdate();
  }

  changePrevView() {
    this.view--;
    this.$forceUpdate();
  }
}
</script>


