
<template>
  <div class="">
    <div class="flex flex wrap">
      <!-- <button
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
      </button> -->
    </div>

    <div>
      <!-- <TC/> -->
      <div v-if="this.view == 0">
        <Q1Card @clicked="q1clicked" />
      </div>
      <div v-if="this.view == 1">
        <identification
          class="mx-auto m-3"
          :userInputs="this.person"
          @clicked="q2clicked"
        ></identification>
      </div>
      <div v-if="this.view == 2">
        <Q3Card class="mx-auto m-3" @clicked="q3clicked" />
      </div>
      <div v-if="this.view == 3"><Q4Card @clicked="q4clicked" /></div>
      <div v-if="this.view == 4">
        <Q5Card class="mx-auto m-3" @clicked="q5clicked" />
      </div>
      <div v-if="this.view == 5"><Q6Card @clicked="q6clicked" /></div>
      <div v-if="this.view == 6">
        <Messenger class="mx-auto m-3" @clicked="q7clicked"></Messenger>
      </div>
      <div v-if="this.view == 7"><Q8Card @clicked="q8clicked" /></div>
      <div v-if="this.view == 8">
        <End :score="this.score" />
      </div>
    </div>
  </div>
</template>



<script lang="ts">
// @ts-ignore
import { Component, Vue } from 'vue-property-decorator';
import Q1Card from '@/components/Question1Card.vue';
import Q3Card from '@/components/Question3.vue';
import Q4Card from '@/components/Question4.vue';
import Q5Card from '@/components/Question5.vue';
import Q6Card from '@/components/Question6.vue';
import Q8Card from '@/components/Question8.vue';
import Messenger from '../components/Messenger.vue';
import Identification from '../components/Identification.vue';
import TC from '@/components/termsandcons.vue';
import End from '@/components/End.vue';

@Component({
  components: {
    Q1Card,
    Q3Card,
    Q5Card,
    TC,
    Q4Card,
    Q6Card,
    Q8Card,
    Messenger,
    Identification,
    End
  },
})
// @ts-ignore
export default class Quiz1 extends Vue {
  private view: number = 0;
  private score: number = 0;
  private person: any;

  changeNextView() {
    this.view++;
    console.log(this.view);
    this.$forceUpdate();
  }

  changePrevView() {
    this.view--;
    console.log(this.view);
    this.$forceUpdate();
  }
  // @ts-ignore
  q1clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q2clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q3clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q4clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q5clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q6clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q7clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q8clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q9clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }
  // @ts-ignore
  q10clicked(value) {
    this.person = value;
    console.log(value);
    this.view++;
    this.score = this.score + value.score;
    this.loser();
    this.$forceUpdate();
    console.log(this.score);
  }

  loser() {
    console.log("checking loser");
    if (this.score > 50) {
      this.view = 10;
    }
  }
}
</script>


