<script lang="ts">
    import Input from "./input.component.svelte";
    import Button from "./button.component.svelte";
    import { createEventDispatcher, onDestroy, onMount } from 'svelte';
    
    let inputvalue:string;
    let inputRef: HTMLInputElement;
    let inputElement: HTMLDivElement;
    const dispatch = createEventDispatcher();

    const handleclick = () => {
        dispatch("submit", { value: inputvalue });
    }

    function eventhandler({ key }) {
        if (key !== "Enter") return;
        dispatch("submit", { value: inputvalue });
    };

    onMount(() => {
        inputRef.focus();
        inputElement.addEventListener("keydown", eventhandler);
    });

    onDestroy(() => inputElement.removeEventListener("keydown", eventhandler));

</script>

<div class="backdrop">
    <div class="modal" bind:this={inputElement}>
        <Input label="File Name" bind:value={inputvalue} bind:inputRef={inputRef} />
        <Button textcontent="Confirm" icon="send" on:click={handleclick}/>
    </div>
</div>

<style>
    .backdrop {
        top: 0;
        left: 0;
        z-index: 99;
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal {
        width: 85%;
        padding: 2rem;
        max-width: 750px;
        border-radius: 1rem;
        background-color: var(--color-dark-background);
        gap: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>