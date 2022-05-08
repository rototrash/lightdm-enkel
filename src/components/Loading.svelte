<script>
  import { beforeUpdate } from 'svelte'
  import { fade } from 'svelte/transition'
  import { quadInOut } from 'svelte/easing'
  import loadingBarSVG from '../assets/icons/loading-bar.svg'

  export let isIdle
  let message = 'Authenticating...'
</script>

<style>
  .loader {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    background-color: var(--c3);
    height: fit-content;
    width: fit-content;
    border-radius: 10px;
    --shadow: 0 14px 28px #2e2e2e50, 0 10px 10px #2e2e2e50;
    --shadow-h: 0 19px 38px #2e2e2e40,0 15px 12px #2e2e2e40;
    padding: 50px;
  }
  .loader img {
    width: 75px;
  }
  .loader span {
    font-family: 'CartographCF', Arial, Helvetica, sans-serif;
    font-size: 1.6em;
    font-style: normal;
    color: var(--c5);
  }
</style>

{#if isIdle === false}
  <div
    class='loader'
    transition:fade={{ easing: quadInOut }}
  >
    <img src={loadingBarSVG} alt='Loading' />
    <span>{message}</span>
  </div>
{/if}
