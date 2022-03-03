<script lang="ts">
    import { HomeSection, DemoSection, AboutSection } from './modules/';
    import NavBar from './components/navbar.component.svelte';
    import Documentation from './modules/documentation.module.svelte';
</script>

<div>
    <NavBar/>
    <main>
        <HomeSection/>
        <DemoSection/>
        <Documentation/>
        <AboutSection/>
    </main>
</div>

<style>
    main {
        padding: 0 16rem; /*16rem = 256px*/
        gap: 8rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 1475px) {
        main {
            padding: 0 8rem;
        }
    }

    @media (max-width: 1250px) {
        main {
            padding: 0 4rem;
        }
    }
</style>