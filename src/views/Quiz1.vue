<template>
    <div class="flex flex-container">
        <Messenger class="mx-auto"></Messenger>
        <identification class="mx-auto"></identification>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Messenger from '../components/Messenger.vue';
import Identification from '../components/Identification.vue';

@Component({
    components: {
        Messenger,
        Identification,
    },
})
export default class Quiz1 extends Vue {
    // private score: number;

}
</script>
