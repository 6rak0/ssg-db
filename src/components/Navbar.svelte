<script>
  import { slide } from 'svelte/transition'
  let isMenuOpen = false
</script>

<nav class="bg-green-100">
  <div class="flex justify-between items-center p-3">
    <!-- menú para móvil -->
    <div class="sm:hidden space-x-4">
      <button on:click={() => (isMenuOpen = !isMenuOpen)}>
        <i class="fas fa-bars text-lg" />
      </button>
      <a href="/">inicio</a>
    </div>
    <!-- menú para desktop -->
    <div class="hidden sm:block flex space-x-4">
      <i class="fas fa-database" />
      <a href="/">inicio</a>
      <a href="/reportes">reportes</a>
    </div>
    <!-- botón login/logout -->
    <div><a href="/login">login</a></div>
  </div>
  {#if isMenuOpen}
    <div transition:slide={{ duration: 800 }} class="block sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- <a
          href="#horario"
          class="text-red-400 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">horario</a>
        <a
          href="#contacto"
          class="text-red-400 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">contacto</a> -->
        <a
          href="/reportes"
          class="text-red-400 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">reportes</a>
      </div>
    </div>
  {/if}
</nav>
