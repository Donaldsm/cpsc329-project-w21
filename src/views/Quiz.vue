
<template>
    <div>

      <!-- <Q1Card/> -->
       <Q5Card/>
    </div>
</template>



<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Q1Card from '@/components/Question1Card.vue';
import Q4Card from '@/components/Question4.vue';
import Q5Card from '@/components/Question5.vue';


@Component({
  components: {
    Q1Card,
    Q5Card,
    Q4Card,
  }
})
export default class Quiz1 extends Vue {

}
</script>


