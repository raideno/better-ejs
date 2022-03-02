<script lang="ts">

    import './code.component.style.css';
    import Eyeicon from "../assets/svgs/eye";
    import Modal from './modal.component.svelte';

    interface TabInterface {
        name: string;
        active: boolean;
        content: string;
    }

    let codearea: HTMLDivElement;
    let tabs: TabInterface[] = [];
    $: activetab = tabs.findIndex((tab) => tab.active);
    $: lines = activetab === -1 ? 0 : 1;

    function keydownlistener(event:KeyboardEvent) {
        console.log("Before:", codearea.children, lines)
        if (event.key === "Backspace" && lines > 1 && codearea.children[lines - 1].textContent.length === 0) {
            console.log("Should be deleted");
            lines = lines - 1;
            console.log("After:", codearea.children, lines)
            return;
        }
        if (event.key === "Enter") lines = codearea.childElementCount + 1;
        else {
            if (codearea.childElementCount <= 1)  lines = 1;
            else lines = codearea.childElementCount;
        };
        console.log("After:", codearea.children, lines)
        if (event.key !== "Tab") return;
        event.preventDefault();
    }

    function handleclick(index: number) {
        if (activetab !== -1) {
            codearea.removeEventListener("keydown", keydownlistener);
            tabs[activetab].active = false;
        };
        tabs[index].active = true;
        tabs = [...tabs];
        setTimeout(() => {
            if (codearea) {
                const selection = window.getSelection();
                const range = document.createRange();  
                selection.removeAllRanges();
                range.selectNodeContents(codearea);
                range.collapse(false);
                selection.addRange(range);
                codearea.focus();
            }
            lines = codearea.childElementCount;
            codearea.addEventListener("keydown", keydownlistener);
        }, 5);
    }

    let isVisible = false;
    
    function handlemodal(event) {
        tabs = [...tabs, { name: event.detail.value, active: true, content: "" }]
        handleclick(tabs.length - 1);
        isVisible = false;
    }

    function createtab() {
        isVisible = true;
    }

</script>

{#if isVisible}
    <Modal on:submit={handlemodal} />
{/if}

<div class="container">
    <div class="header">
        <div class="tabs">
            {#each tabs as tab, index (tab.name + index)}
                <div class="tab {tab.active ? "tab-active" : ""}" on:click={handleclick.bind(null, index)}>{tab.name}</div>
            {/each}
            <div class="tab" on:click={createtab}>+</div>
        </div>
        <div class="button">render {@html Eyeicon()}</div>
    </div>
    <div class="content">
        <div class="lines">
            {#each new Array(lines) as _, index}
                <div class="line-number">{((index + 1) < 10) ? '0' + (index + 1).toString() : (index + 1).toString()}</div>
            {/each}
        </div>
        {#if activetab !== -1}
            <div class="text" bind:innerHTML={tabs[activetab].content} bind:this={codearea} contenteditable></div>
        {:else}
            <div class="text text-empty">No Tab Selected :(</div>
        {/if}
    </div>
</div>