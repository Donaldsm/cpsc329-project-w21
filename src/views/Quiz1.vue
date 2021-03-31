<template>
    <div class="flex flex-container">
        <Messenger class="mx-auto"></Messenger>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Messenger from '../components/Messenger.vue';

@Component({
    components: {
        Messenger,
    },
})
export default class Quiz1 extends Vue {

}
</script>
