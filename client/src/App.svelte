<script>
  import axios from "axios/index.js";
  import { onMount } from "svelte";
  import { reportes, reportesOrdenados } from "./stores";

  import Reporte from "./components/Reporte.svelte";
  import Modal from "./components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import Loading from "./components/Loading.svelte";

  let user = { name: null, password: null };

  async function login() {
    const response = await axios.post("/api/login", user);
    isLogged = true;
    user.name = null;
    user.password = null;
    load();
  }

  async function logOut() {
    const response = await axios.get("/api/logout");
    isLogged = false;
  }

  let reporte = {
    id: null,
    descripcion: null,
    nombre: null,
    fraccion: null,
    ligamento: null,
    lig: null,
    aca: null,
    acabado: null,
    composicion: null,
    filfib: null,
    ancho: null,
    gramaje: null,
    tejido: null,
    otros: null,
    conclusion: null
  };
  let query;
  let showModal = false;
  let loading = false;
  let isLogged = false;

  async function load() {
    loading = true;
    const { data } = await axios.get("/api/reportes");
    $reportes = data;
    loading = false;
  }

  // onMount(() => {
  //   load();
  // });

  function search() {
    $reportes = $reportes.filter(r => r.fraccion === query);
  }

  async function handleSubmit(e) {
    reporte = e.detail;
    reporte.creado = new Date().getTime();
    const response = await axios.post("/api/reportes", reporte);
    $reportes = [response.data, ...$reportes];
    showModal = false;
    reporte = {
      id: null,
      descripcion: null,
      nombre: null,
      fraccion: null,
      ligamento: null,
      lig: null,
      aca: null,
      acabado: null,
      composicion: null,
      filfib: null,
      ancho: null,
      gramaje: null,
      tejido: null,
      otros: null,
      conclusion: null
    };
  }

  async function deleteReporte(id) {
    const response = await axios.delete("/api/reportes/" + id.detail);
    if (response.data.id === id.detail) {
      $reportes = $reportes.filter(r => r._id != id.detail);
    }
  }
</script>

<style>
  .app {
    max-width: 90%;
    margin: 0 auto;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  .top > * {
    margin: 5px 0;
  }

  @media screen and (max-width: 768px) {
    .top {
      flex-direction: column;
      align-items: center;
    }
  }

  .login {
    max-width: 350px;
    text-align: center;
    margin: 200px auto;
  }
  .login > * {
    margin: 5px 0;
  }
</style>

{#if isLogged}
  <div class="app">
    <h1 class="subtitle is-1 has-text-centered">Base de datos</h1>
    <div class="top">
      <form on:submit|preventDefault={search}>
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              type="text"
              pattern="\d\d\d\d\.\d\d\.\d\d"
              placeholder="XXXX.XX.XX"
              bind:value={query} />
          </div>
          <div class="control">
            <!-- svelte-ignore a11y-missing-attribute-->
            <button class="button is-info">buscar</button>
          </div>
        </div>
      </form>
      <button class="button is-primary" on:click={() => (showModal = true)}>
        agregar
      </button>
      <button class="button is-danger" on:click={logOut}>cerrar sesión</button>
    </div>
    <hr />
    {#if loading}
      <Loading />
    {/if}
    {#if $reportes.length > 0}
      {#each $reportesOrdenados as reporte (reporte.id)}
        <Reporte on:delete={deleteReporte} {reporte} />
      {/each}
    {:else if !loading}
      <div class="notification has-text-centered has-background-warning-light">
        <p>No hay reportes con esa fracción</p>
        <button class="button is-warning" on:click={load}>recargar</button>
      </div>
    {/if}
  </div>

  {#if showModal}
    <Modal title="Nuevo reporte" on:close={() => (showModal = false)}>
      <Form on:submit={handleSubmit} {reporte} />
    </Modal>
  {/if}
{:else}
  <form on:submit|preventDefault={login}>
    <div class="login">
      <input
        class="input"
        type="text"
        placeholder="nombre"
        bind:value={user.name} />
      <input
        class="input"
        type="password"
        placeholder="password"
        bind:value={user.password} />
      <button class="button is-primary">iniciar sesión</button>
    </div>
  </form>
{/if}
