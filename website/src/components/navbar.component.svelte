<script lang="ts">
    import Linkicon from '../assets/svgs/link';
    import Button from './button.component.svelte';
</script>

<nav class="navbar-container">
    <li class="active"><a href="#home">Home</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#about">About</a></li>
    <div class="burgermenu">
        <div/>
        <div/>
        <div/>
    </div>
    <Button textcontent="Github" icon={Linkicon()}/>
</nav>

<style lang="scss">
    .navbar-container {
        height: var(--navbar-height);
        display: flex;
        padding: 0px 256px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--color-dark-light);

        @media (max-width: 450px) {
            justify-content: center;
        }

        li {
            a {
                cursor: pointer;
                font-size: 1.25rem;
                font-style: normal;
                font-weight: normal;
                color: var(--color-dark-text);
                transition: 0.125s ease-out;
                &:hover {
                    opacity: 0.75;
                }
            }
            @media (max-width: 750px) {
                display: none;
            }
        }

        .active {
            font-weight: bold;
            color: var(--color-rose-default);
        }

        .burgermenu {
            gap: 0.5rem;
            display: none;
            cursor: pointer;
            flex-direction: column;

            @media (max-width: 750px) {
                display: flex;
            }

            @media (max-width: 450px) {
                display: none;
            }

            div {
                width: 40px;
                height: 5px;
                background-color: var(--color-dark-light); /*or code*/
                border-radius: 0.25rem;
            }
        }
    }

    @media (max-width: 1475px) {
        .navbar-container {
            padding: 0 8rem;
        }
    }

    @media (max-width: 1250px) {
        .navbar-container {
            padding: 0 4rem;
        }
    }
    
</style>