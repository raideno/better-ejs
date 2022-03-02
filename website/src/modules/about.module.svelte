<script lang="ts">
    import Sendicon from "../assets/svgs/send";
    import Input from "../components/input.component.svelte";
    import Button from "../components/button.component.svelte";
    
    let data = {
        email: "",
        message: "",
    }
</script>

<section id="about">
    <div>
        <h1># About</h1>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In senectus eu, id aliquet cursus sit tincidunt ut. Faucibus tempor pharetra sed tortor. Non nulla justo a posuere eget sit amet egestas. Pellentesque egestas mattis accumsan arcu consectetur nibh praesent massa aenean. Elementum pellentesque tincidunt magna arcu senectus non posuere. Aliquam dignissim in ultricies fermentum urna libero elit blandit. Nibh ut ante erat lectus vitae bibendum in ridiculus.</p>
    </div>
    <div class="content">
        <div class="left">
            <p>d</p>
        </div>
        <div class="right">
            <Input label="Email" bind:value={data.email}/>
            <Input label="Message" bind:value={data.message} height={"300px"}/>
            <Button textcontent="Send" icon={Sendicon()} />
        </div>
    </div>
</section>

<style lang="scss">
    section {
        gap: 4rem;
        width: 100%;
        display: flex;
        padding: 64px 0;
        min-height: 100vh;
        flex-direction: column;
    }
    h1 {
        font-weight: bold;
        font-size: 74px;
        color: var(--color-rose-default);
    }
    .text {
        width: 100%;
        line-height: 200%;
        font-size: 1.25rem;
        color: var(--color-white);
    }
    .content {
        gap: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .right {
        gap: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .left {
        width: 100%;
    }
</style>