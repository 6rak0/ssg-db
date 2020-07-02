<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import axios from "axios/index";

  import Modal from "./Modal.svelte";
  import Form from "./Form.svelte";

  const dispatch = createEventDispatcher();

  export let reporte;
  let showModal = false;

  async function handleUpdate(e) {
    reporte = e.detail;
    reporte.editado = new Date().getTime();
    const response = await axios.put("/api/reportes/" + reporte._id, reporte);
    showModal = false;
  }
</script>

<style>

</style>

<div class="card mb-3" transition:slide>
  <header class="card-header">
    <p class="card-header-title">
      Id: {reporte.id} - Fracción: {reporte.fraccion} - {reporte.descripcion || ''}
    </p>
    <!-- svelte-ignore a11y-missing-attribute-->
    <a
      role="button"
      class="card-header-icon"
      aria-label="more options"
      on:click={e => {
        e.target.parentElement.parentElement.nextElementSibling.hidden = !e.target.parentElement.parentElement.nextElementSibling.hidden;
      }}>
      <span class="icon">></span>
    </a>
  </header>
  <div class="card-content" hidden>
    <div class="content">
      <table id={reporte.id}>
        <tr>
          <td>Nombre:</td>
          <td>{reporte.nombre || 'n/a'}</td>
        </tr>
        <tr>
          <td>Ligamento:</td>
          <td>{reporte.lig || reporte.ligamento || 'n/a'}</td>
        </tr>
        <tr>
          <td>Acabado:</td>
          <td>{reporte.aca || reporte.acabado || 'n/a'}</td>
        </tr>
        <tr>
          <td>Composición:</td>
          <td>{reporte.composicion || 'n/a'}</td>
        </tr>
        <tr>
          <td>Filamento o Fibra:</td>
          <td>{reporte.filfib || 'n/a'}</td>
        </tr>
        <tr>
          <td>Tejido:</td>
          <td>{reporte.tejido || 'n/a'}</td>
        </tr>
        <tr>
          <td>Gramaje en g/m2:</td>
          <td>{reporte.gramaje || 'n/a'}</td>
        </tr>
        <tr>
          <td>Ancho en cm:</td>
          <td>{reporte.ancho || 'n/a'}</td>
        </tr>
        <tr>
          <td>Otros datos:</td>
          <td>{reporte.otros || 'n/a'}</td>
        </tr>
        <tr>
          <td>Conclusión:</td>
          <td>{reporte.conclusion || 'n/a'}</td>
        </tr>
        <tr>
          <td>Fecha de reporte:</td>
          <td>{new Date(reporte.creado).toLocaleString() || 'n/a'}</td>
        </tr>
        <tr>
          <td>Fecha de edición:</td>
          <td>{new Date(reporte.editado).toLocaleString() || 'n/a'}</td>
        </tr>
      </table>
    </div>
    <footer class="card-footer" hidden>
      <!-- svelte-ignore a11y-missing-attribute-->
      <a class="card-footer-item">Compartir</a>
      <!-- svelte-ignore a11y-missing-attribute-->
      <a class="card-footer-item" on:click={() => (showModal = true)}>Editar</a>
      <!-- svelte-ignore a11y-missing-attribute-->
      <a
        class="card-footer-item"
        on:click={() => dispatch('delete', reporte._id)}>
        Borrar
      </a>
    </footer>
  </div>
</div>
{#if showModal}
  <Modal title="Editar reporte" on:close={() => (showModal = false)}>
    <Form on:submit={handleUpdate} {reporte} />
  </Modal>
{/if}
