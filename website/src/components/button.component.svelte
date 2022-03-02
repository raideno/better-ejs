<script lang="ts">
    /*Props*/
    export let icon: string;
    export let textcontent: string;
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    const handleclick = () => {
        dispatch('click');
    }
</script>

<div on:click={handleclick}>
    {textcontent}
    {@html icon}
</div>

<style>
    div {
        /*display*/
        gap: 1rem;
        padding: 16px 32px;
        border-radius: 8px;
        flex-direction: row;
        align-items: center;
        display: inline-flex;
        justify-content: center;
        /*font*/
        font-weight: bold;
        font-style: normal;
        font-size: 1.25rem;
        /*more*/
        cursor: pointer;
        color: var(--color-white);
        transition: 0.125s ease-in;
        background: var(--color-rose-default);
    }
    div:hover {
        transform: scale(0.975);
    }
</style>