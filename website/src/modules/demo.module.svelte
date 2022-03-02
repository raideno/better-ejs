<script lang="ts">
    import Code from '../components/code.component.svelte';
</script>

<section id="demo">
    <h1># Demo</h1>
    <Code/>
    <div class="text">You can find more examples <span><a href="https://github.com" target="_blank">here</a></span></div>
</section>

<style lang="scss">
    @mixin flex ($direction: row, $gap: 0rem, $justify-content: center, $align-items: center) {
        gap: $gap;
        display: flex;
        align-items: $align-items;
        flex-direction: $direction;
        justify-content: $justify-content;
    }

    section {
        width: 100%;
        padding: 64px 0;
        min-height: 100vh;
        @include flex($gap: 4rem, $direction: column, $justify-content: flex-start, $align-items: flex-start);

        h1 {
            font-weight: bold;
            font-size: 4.625rem;
            color: var(--color-rose-default);
        }

        .text {
            font-size: 1.5rem;
            color: var(--color-white);

            span {
                a {
                    font-weight: bold;
                    text-decoration: underline;
                    color: var(--color-rose-default);
                }
            }
        }
    }
</style>