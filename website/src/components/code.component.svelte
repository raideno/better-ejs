<script lang="ts">
    interface BrutTabInterface {
        name: string;
        active: boolean;
        content: string[];
    }

    interface TabInterface {
        name: string;
        active: boolean;
        content: string;
    }

    export let defaultTabs: BrutTabInterface[] = [];

    import './code.component.style.css';
    import {
        afterUpdate,
        beforeUpdate,
        onMount
    } from "svelte";
    import Eyeicon from "../assets/svgs/eye";
    import Modal from './modal.component.svelte';
    import focusAtEnd from "../utils/helpers/focusAtEnd";
    import stringToHtml from "../utils/helpers/stringToHtml";

    let isModalVisible = false;
    let codearea: HTMLDivElement;
    let tabs: TabInterface[] = defaultTabs.map((tab) => ({
        ...tab,
        content: stringToHtml(tab.content)
    }));

    $: activetab = tabs.findIndex((tab) => tab.active);
    $: lines = activetab === -1 ? 0 : 1;

    /*not very optimized ! because it updates lines after each caracter is inputed, try console.log() to see how much times*/
    afterUpdate(() => codearea ? lines = codearea.childElementCount || 1 : null);

    function handleClick(index: number) {
        if (activetab !== -1) tabs[activetab].active = false;
        tabs[index].active = true;
        tabs = [...tabs];
        setTimeout(() => codearea ? focusAtEnd(codearea) : null, 5);
    }

    function handleModalSubmit(event) {
        tabs = [...tabs, {
            name: event.detail.value,
            active: true,
            content: ""
        }]
        handleClick(tabs.length - 1);
        isModalVisible = false;
    }

    onMount(() => {
        return;
        if (codearea) {
            codearea.addEventListener("keypress", () => {
                if (codearea) {
                    setTimeout(() => {
                        const newData = [];
                        for (let key in codearea.children) {
                            if (typeof codearea.children[key] === "object")
                                newData.push(codearea.children[key].textContent);
                        }
                        console.log("Data:\n", codearea.innerText);
                        tabs[activetab].content = stringToHtml(codearea.innerText.split("\n")
                            .filter((data) => data !== ""));
                        focusAtEnd(codearea);
                    }, 5);
                }
            });
        }
    });
</script>

{#if isModalVisible}
    <Modal on:submit={handleModalSubmit} />
{/if}

<div class="container">
    <div class="header">
        <div class="tabs">
            {#each tabs as tab, index (tab.name + index)}
                <div class="tab {tab.active ? "tab-active" : ""}" on:click={handleClick.bind(null, index)}>{tab.name}</div>
            {/each}
            <div class="tab" on:click={() => isModalVisible = true}>+</div>
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
            <div class="text" bind:innerHTML={tabs[activetab].content} bind:this={codearea} contenteditable spellcheck="false"></div>
        {:else}
            <div class="text text-empty">No Tab Selected :(</div>
        {/if}
    </div>
</div>