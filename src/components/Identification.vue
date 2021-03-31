<template>
    <div></div>
</template>
<script lang="ts">
import {Component,Prop, Vue} from 'vue-property-decorator';
@Component({})
export default class Identification extends Vue {
@Prop() private name: any;
@Prop() private email: any;
@Prop() private dob: any;
@Prop() private colour: any;
@Prop() private fNum: any;
@Prop() private plateNum: any;
@Prop() private faveAnimal: any;
}
</script>