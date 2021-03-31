<template>
    <div class="flex flex-container font-fira flex-col w-1/3 bg-green-500">
        <h1 class="mx-auto">Hello there...</h1>
        <div class="bg-green-200 w-full">
            <div class="mx-auto w-full " id="game-board"></div>
        </div>
        <button class="p-3 mx-auto bg-blue-300 md:text-4xl text-xl text-blue-800 w-1/3 py-42 pl-3 mx-auto hover:bg-blue-500" @click="startgame()">Start Game</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import { game } from '../assets/js/messenger.js';
export default class Messenger extends Vue {

    public startgame() {
        game(document.getElementById('#game-board'));
    }

}
</script>