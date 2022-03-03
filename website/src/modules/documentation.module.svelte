<script lang="ts">
    import Code from '../components/code.component.svelte';

    const GetStartedCode = [
        {
            name: "index.js",
            active: true,
            content: [
                "const app = express();",
                "const { engine: bjs } = require('better-ejs');",
                "",
                "/*Tell express about better-ejs*/",
                "bjs(app);",
                "/*Set the default express view engine to better-ejs*/",
                "app.set('view engine', 'bjs');",
                "",
                "app.get('/:user?', (req, res) => {",
                "const user = req.params.user | 'No One';",
                "res.render('index', { user });",
                "});",
                "",
                "app.listen(3000, () => console.log('[Port]:', 3000));",
            ]
        }
    ]
</script>

<section id="documentation">
    <div>

        <h1># Documentation</h1>
        <p>
            Our goal is to make be the simplest and easiest possible, this is why there is only two things to not forget: require and out functions.You can find a full working example in our github.
        </p>
    </div>
    <div class="doc-section">
        <h2>## Get Started</h2>
        <p>To start you have to install better-ejs in one of your express projects, to do this use one of this commands:</p>
        <div class="install">
            <div class="install-element">yarn add better-ejs</div>
            <div class="install-element">pnpm install better-ejs</div>
            <div class="install-element">npm install better-ejs</div>
        </div>
        <p>Then you have to tell express about better-ejs:</p>
        <Code defaultTabs={GetStartedCode} />
    </div>
    <div class="doc-section functions">
        <h2>## Functions</h2>
        <div class="doc-sub-section">
            <p>
                <span class="important">out(...args: any[]):</span>To print any thing to the Html File, it acts like the javascript <span class="code">console.log</span> function
            </p>
            <Code/>
        </div>
        <div class="doc-sub-section">
            <p>
                <span class="important">require(filepath: string, params: object}):</span> To import other .bjs or .html files and include them into the current one
            </p>
            <Code/>
        </div>
    </div>
</section>

<style>
    section {
        gap: 10rem;
        width: 100%;
        padding: 4rem 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    h1 {
        font-weight: bold;
        font-size: 4rem;
        color: var(--color-rose-default);
    }
    h2 {
        font-weight: bold;
        font-size: 2rem;
        line-height: 56px;
        color: var(--color-rose-default);

    }
    p {
        font-size: 1.25rem;
        line-height: 150%;
        color: #FFFFFF;
    }
    .install {
        gap: 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .install-element {
        padding: 1rem;
        background: var(--color-dark-code);
        border-radius: 0.5rem;
        font-weight: bold;
        font-size: 1.5rem;
        color: var(--color-dark-text);
    }
    .doc-section {
        gap: 1rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }
    .functions {
        gap: 2rem;
    }
    .doc-sub-section {
        gap: 1.5rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }
    .important {
        font-size: 1.25em;
        font-weight: bold;
        color: var(--color-rose-default);
    }
</style>