<script lang="ts">
    import Code from '../components/code.component.svelte';
</script>

<section id="documentation">
    <h1># Documentation</h1>
    <p>
        Our goal is to make be the simplest and easiest possible, this is why there is only two things to not forget: require and out functions.You can find a full working example in our github.
    </p>
    <div>
        <h2>## Get Started</h2>
        <p>To start you have to install better-ejs in one of your express projects, to do this use one of this commands:</p>
        <p>Then you have to tell express about better-ejs:</p>
        <Code/>
    </div>
    <div>
        <h2>## Functions</h2>
        <div>
            <p>
                Out(...args: any[]): This function is like the native javascript console.log function, ittake a list of arguments and output them into the Html Document, you can give it anything you want and it will be formated to be outputed.
            </p>
            <Code/>
            <p>Learn More About This Function here</p>
        </div>
        <div>
            <p>
                Out(...args: any[]): This function is like the native javascript console.log function, ittake a list of arguments and output them into the Html Document, you can give it anything you want and it will be formated to be outputed.
            </p>
            <Code/>
            <p>Learn More About This Function here</p>
        </div>
    </div>
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