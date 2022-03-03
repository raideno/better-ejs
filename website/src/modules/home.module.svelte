<script lang="ts">
    import {
        Scroll
    } from "../assets/svgs/index";
    import illustration from '../assets/illustration.png';
</script>

<section id="home">
    <div>
        <div class="left">
            <div class="first">
                <h1># Better-Ejs</h1>
                <p>Better and faster then Ejs with simple and intuitive syntax, similar syntax to jsx.</p>
            </div>

            <div class="second">
                <h4># To Install</h4>
                <ul>
                    <li class="code">yarn add better-ejs</li>
                    <li class="code">npm install better-ejs</li>
                    <li class="code">pnpm install better-ejs</li>
                </ul>
            </div>
        </div>
        <div class="right">
            <img src={illustration} alt="data" />
        </div>
    </div>
    <div class="icon">
        <Scroll className="home-module-icon-scroll-svg" />
    </div>
</section>

<style>
    section {
        padding: 4rem 0;
        min-height: calc(100vh - var(--navbar-height));
        gap: 0rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }

    section div {
        flex-basis: 100%;
        gap: 0rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }

    .left {
        gap: 4rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
    }

    .first {
        gap: 1.5rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
    }

    h1 {
        font-weight: bold;
        font-size: 4rem;
        color: var(--color-rose-default);
    }

    p {
        font-size: 2rem;
        color: var(--color-dark-text);
    }

    .second {
        gap: 1.5rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
    }

    h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
        color: var(--color-white);
    }

    ul {
        gap: 1.5rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
    }

    section :global(.home-module-icon-scroll-svg) {
        animation: anim 1.25s infinite alternate-reverse;
    }

    @keyframes anim {
        0% {
            transform: translateY(-7px);
            opacity: 0.75;
        }

        100% {
            transform: translateY(-35px);
            opacity: 0;
        }
    }

    @media (max-width: 1075px) {
        section div {
            display: flex;
            flex-direction: column-reverse;
        }
        .icon {
            display: none;
        }
    }
</style>