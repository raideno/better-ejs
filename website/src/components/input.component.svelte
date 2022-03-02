<script lang="ts">
    export let value: string;
    export let verify: ((value: string) => boolean) = (_:string) => true;
    export let inputRef: HTMLInputElement = null;
    export let label: string, height: string = "70px";
</script>

<div class="input-componenet-container">
    <div class="label">{label}</div>
    <input 
        type="text" 
        class="input" 
        bind:value={value} 
        bind:this={inputRef} 
        style="height: {height}; outline: {verify(value) ? 0 : 2}px solid red;"/>
</div>

<style>
    .input-componenet-container {
        gap: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .label {
        font-size: 1.25rem;
        color: var(--color-white);
    }
    .input {
        padding: 0 1rem;
        color: var(--color-white);
        font-weight: 600;
        font-size: 1.5rem;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        background: var(--color-dark-light);
    }
</style>