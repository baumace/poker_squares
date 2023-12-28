<script>
    import Game from "./lib/Game.svelte";
</script>

<div>
    <Game />
</div>

<style>
    div {
        height: 100%;
        width: 75%;
        position: absolute;
        top: 55%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>
