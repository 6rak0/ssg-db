<script>
  import { createEventDispatcher } from 'svelte'
  import { blur, fade, fly } from 'svelte/transition'
  export let title

  const dispatch = createEventDispatcher()
</script>

<style>
  .max-h {
    max-height: 80%;
  }
</style>

<div class="fixed inset-0 bg-gray-900 bg-opacity-70" in:blur out:fade>
  <div
    class="relative overflow-auto mx-auto mt-20 p-6 rounded bg-white text-grey-600 max-w-xs max-h lg:max-w-screen-sm lg:max-h"
    transition:fly={{ y: 200 }}>
    <div class="absolute top-0 right-0 m-2 text-red-500">
      <button on:click={() => dispatch('close')}><i
          class="fas fa-times" /></button>
    </div>
    <div class="text-lg text-center my-4">
      <h1>{title}</h1>
    </div>
    <slot>
      <p>texto de prueba del modal</p>
    </slot>
  </div>
</div>
