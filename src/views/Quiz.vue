
<template>

  
     


    <div class="flex flex-col">

      <!-- <Q1Card/> -->
       <TC/>
      <Q1Card/>
       <Q5Card class="mx-auto m-3"/>
       <Q3Card class="mx-auto m-3"/>
       <Messenger class="mx-auto m-3"></Messenger>
       <identification class="mx-auto m-3"></identification>
    </div>
</template>



<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Q1Card from '@/components/Question1Card.vue';
import Q3Card from '@/components/Question3.vue';
import Q4Card from '@/components/Question4.vue';
import Q5Card from '@/components/Question5.vue';

import TC from '@/components/termsandcons.vue';

import Messenger from '../components/Messenger.vue';
import Identification from '../components/Identification.vue';


@Component({
  components: {
    Q1Card,
    Q3Card,
    Q5Card,

    TC,

    Q4Card,
    Messenger,
    Identification
  }
})
export default class Quiz1 extends Vue {

}
</script>


