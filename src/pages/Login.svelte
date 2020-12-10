<style>
  .max-w {
    max-width: 100%;
  }
  @media (min-width: 1024px) {
    .max-w {
      max-width: 50%;
    }
  }
</style>

<section class="p-10 lg:px-72">
  <form class="text-center p-5 relative rounded shadow">
    <div class="flex items-center text-gray-600 my-4 w-full">
      <input
        class="rounded w-full h-12 p-2"
        type="text"
        placeholder="usuario"
        required />
    </div>
    <div class="text-gray-600 my-4 w-full">
      <input
        class="rounded w-full h-12 p-2"
        type="password"
        placeholder="contraseña"
        required />
    </div>
    <button
      class="mt-6 bg-red-500 border rounded w-9/12 p-3 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500">login</button>
  </form>
</section>
