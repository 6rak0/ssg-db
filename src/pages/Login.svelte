<script>
  import { router } from "tinro";
  import loginUser from "../strapi/loginUser";
  let email = "";
  let password = "";
  async function handleSubmit() {
    let user;
    user = await loginUser({ email, password });
    if (user) {
      router.goto("/reportes");
    }
  }
</script>

<style>
  input {
    height: 2rem;
    margin-block: 4px;
    border-block-end: 1px solid black;
  }
</style>

<svelte:head>
  <title>login</title>
</svelte:head>

<section class="p-10 lg:px-72">
  <form
    class="text-center p-5 relative rounded shadow"
    on:submit|preventDefault={handleSubmit}>
    <div class="flex items-center text-gray-600 my-4 w-full">
      <input
        class="w-full h-12 p-2"
        type="text"
        placeholder="usuario"
        required
        bind:value={email} />
    </div>
    <div class="text-gray-600 my-4 w-full">
      <input
        class="w-full h-12 p-2"
        type="password"
        placeholder="contraseña"
        required
        bind:value={password} />
    </div>
    <button
      class="mt-6 bg-red-500 border rounded w-9/12 p-3 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
      type="submit">login</button>
  </form>
</section>
