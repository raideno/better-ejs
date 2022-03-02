<script lang="ts">
    import { HomeSection, DemoSection, AboutSection } from './modules/';
    import NavBar from './components/navbar.component.svelte';
</script>

<div>
    <NavBar/>
    <main>
        <HomeSection/>
        <DemoSection/>
        <AboutSection/>
    </main>
</div>

<style>
    main {
        padding: 0 16rem; /*16rem = 256px*/
        gap: 128px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
</style>