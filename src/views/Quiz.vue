
<template>
    <div>
      <TC/>
      <Q1Card/>
       <Q5Card/>

    </div>
</template>



<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Q1Card from '@/components/Question1Card.vue';
import Q5Card from '@/components/Question5.vue';
import TC from '@/components/termsandcons.vue';


@Component({
  components: {
    Q1Card,
    Q5Card,
    TC,
  }
})
export default class Quiz1 extends Vue{

}
</script>


