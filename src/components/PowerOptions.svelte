<script>
  import { fly, fade } from 'svelte/transition'
  import { quadInOut } from 'svelte/easing'
  import Clock from './Clock.svelte'

  export let isIdle

  let userOptions = {
    suspend: lightdm.can_suspend,
    hibernate: lightdm.can_hibernate,
    restart: lightdm.can_restart,
    shutdown: lightdm.can_shutdown
  }
  

  function executeAction(option) {
    lightdm[option]()
  }
</script>

<style>
  div {
    background-color: var(--c3);
    display: flex;
    color: var(--c5);
    font-family: 'CartographCF', Arial, Helvetica, sans-serif;
    box-shadow: 0px -10px 40px -15px #2e2e2e99;
    position: absolute;
    bottom: 0;
    padding: 15px;
    border-radius: 10px 10px 0px 0px;
    user-select: none;
    z-index: 100;
  }
  .action {
    cursor: pointer;
    opacity: 0.5;
    transition: all 300ms ease-in-out;
  }
  .action:hover {
    opacity: 1;
  }
  .divider {
    margin: 0 10px;
  }
</style>

{#if isIdle}
  <div
    in:fly={{ delay: 200, y: 20, easing: quadInOut }}
    out:fade
  >
    {#each Object.keys(userOptions) as option, index}
      {#if userOptions[option]}
        <span
          class='action'
          on:click={() => executeAction(Object.keys(userOptions)[index])}
        >
          {Object.keys(userOptions)[index]}
        </span>
        <span class='divider'>∙</span>
      {/if}
    {/each}
    <Clock />
  </div>
{/if}