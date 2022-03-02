<script lang="ts">
    import { Scroll } from "../assets/svgs/index";
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
            <img src={illustration} alt="data"/>
        </div>
    </div>
    <Scroll className="home-module-icon-scroll-svg"/>
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
        padding: 64px 0;
        min-height: calc(100vh - var(--navbar-height));
        @include flex($direction: column, $justify-content: space-between);

        div {
            flex-basis: 100%;
            @include flex($justify-content: space-between);

            .left {
                @include flex($align-items: flex-start, $direction: column, $gap: 4rem);

                .first {
                    @include flex($gap: 1.5rem, $justify-content: flex-start, $align-items: flex-start, $direction: column);
                    h1 {
                        font-weight: bold;
                        font-size: 74px;
                        color: var(--color-rose-default);
                    }
                    p {
                        font-size: 32px;
                        color: var(--color-dark-text);
                    }
                }

                .second {
                    @include flex($gap: 1.5rem, $justify-content: flex-start, $align-items: flex-start, $direction: column);

                    h4 {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 32px;
                        color: var(--color-white);
                    }

                    ul {
                        @include flex($gap: 1.5rem, $justify-content: flex-start, $align-items: flex-start, $direction: column);
                    }
                }

            }
        }

        :global(.home-module-icon-scroll-svg) {
            animation: anim 1.25s infinite alternate-reverse;
        }

        @keyframes anim {
            0% {
                transform: translateY(-7px);
                opacity: .75;
            }
            100% {
                transform: translateY(-35px);
                opacity: 0;
            }
        }
    }
</style>