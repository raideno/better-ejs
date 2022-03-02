<script lang="ts">
    import Linkicon from '../assets/svgs/link';
    import Button from './button.component.svelte';
</script>

<nav class="navbar-container">
    <li class="active"><a href="#home">Home</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#about">About</a></li>
    <Button textcontent="Github" icon={Linkicon()}/>
</nav>

<style lang="scss">
    .navbar-container {
        height: 90px;
        display: flex;
        padding: 0px 256px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--color-dark-light);

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
        }

        .active {
            font-weight: bold;
            color: var(--color-rose-default);
        }
    }
</style>