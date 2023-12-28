<script>
    import Deck from "./game_lib/Deck.svelte";
    import Grid from "./game_lib/Grid.svelte";
</script>

<span>
    <Deck />
    <Grid />
</span>

<style>
    span {
        display: flex;
        padding: 2em;
        margin: auto;
        justify-content: center;
        align-items: center;
        position: relative;
    }
</style>
