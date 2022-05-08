<script>
  import { onMount } from 'svelte'
  import Form from './Form.svelte'
  import Loading from './Loading.svelte'
  import PowerOptions from './PowerOptions.svelte'
  import '../assets/background.jpg'

  let isIdle = null

  onMount(() => {
    const imgpath = './assets/background.jpg'
    const img = new Image()
    img.onload = () => {
      const bg = document.querySelector('.background')
      bg.src = img.src
      bg.classList.add('imageReady')
    }
    img.src = imgpath
  })

  function toggleIdle() {
    isIdle = !isIdle
  }

  function logIn() {
    document.querySelector('body').classList.add('logged-in')
  }
</script>

<style>
  :global(:root) {
    --c1: #2e2e2e;
    --c2: #2e2e2e;
    --c3: #151515;
    --c4: #888888;
    --c5: #e8e8d3;
    --shadow: 0 14px 28px #2e2e2e50,
      0 10px 10px #2e2e2e50;
    --shadow-h: 0 19px 38px #2e2e2e40,
      0 15px 12px #2e2e2e40;
  }
  :global(*) {
    box-sizing: border-box;
  }
  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: 'CartographCF', Arial, Helvetica, sans-serif;
    font-size: 14px;
    overflow: hidden;
    transition: opacity 300ms ease-out;
  }
  :global(main) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  :global(.container__active) {
    box-shadow: var(--shadow-h) !important;
  }
  :global(.imageReady) {
    opacity: 1 !important;
  }
  :global(.logged-in) {
    background: black !important;
    opacity: 0;
  }
  :global(.show-error) {
    height: 35px;
  }
  :global(.hide-error) {
    height: 0px;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
</style>

<img class='background' alt='background' />
<Form {isIdle} {toggleIdle} {logIn} />
<Loading {isIdle} />
<PowerOptions {isIdle} />
