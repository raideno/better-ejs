<script lang="ts">
    import Code from '../components/code.component.svelte';

    const defaultTabs = [
        {
            name: "index.bjs",
            active: true,
            content: [
                "<html>",
                "<body>",
                "{{ include(\"./navbar.bjs\", { title: \"I am a Title !\" }); }}",
                "<h1>User: {{ out(user.username) }}</h1>",
                "<h2>Age: {{ out(user.age) }}</h2>",
                "<h2>Age: {{ user.age >= 18 ? out(\"Accepted\") : out(\"Mineur\", \"No\") }}</h2>",
                "{{",
                "if(true) out(\"dsq\");",
                "}}",
                "</body>",
                "</html>",
            ]
        },
        {
            name: "script.js",
            active: false,
            content: `
                const data = "raiden";
                console.log(data);
            `.split("\n")
        }
    ]
</script>

<section id="demo">
    <h1># Demo</h1>
    <Code defaultTabs={defaultTabs} />
    <div class="text">You can find more examples <span><a href="https://github.com" target="_blank">here</a></span>
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
        padding: 4rem 0;
        @include flex($gap: 4rem, $direction: column, $justify-content: flex-start, $align-items: flex-start);

        h1 {
            font-weight: bold;
            font-size: 4rem;
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