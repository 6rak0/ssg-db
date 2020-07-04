<script>
  import { slide } from "svelte/transition";
  import jsPDF from "jspdf";
  import { createEventDispatcher } from "svelte";
  import axios from "axios/index";

  import Modal from "./Modal.svelte";
  import Form from "./Form.svelte";

  const dispatch = createEventDispatcher();

  export let reporte;
  let showModal = false;

  function handleShare() {
    const pdf = new jsPDF();
    pdf.text(30, 30, `Id: ${reporte.id}`);
    pdf.text(30, 40, `Fracción: ${reporte.fraccion}`);
    pdf.text(30, 50, `Descripción: ${reporte.descripción || "n/a"}`);
    pdf.text(30, 60, `Nombre: ${reporte.nombre || "n/a"}`);
    pdf.text(30, 70, `Ligamento: ${reporte.lig || reporte.ligamento || "n/a"}`);
    pdf.text(30, 80, `Acabado: ${reporte.aca || reporte.acabado || "n/a"}`);
    pdf.text(30, 90, `Composición: ${reporte.composicion || "n/a"}`);
    pdf.text(30, 100, `Filamento o Fibra: ${reporte.filfib || "n/a"}`);
    pdf.text(30, 110, `Tejido: ${reporte.tejido || "n/a"}`);
    pdf.text(30, 120, `Gramaje en g/m2: ${reporte.gramaje || "n/a"}`);
    pdf.text(30, 130, `Ancho: ${reporte.ancho || "n/a"}`);
    pdf.text(30, 140, `Otros datos: ${reporte.otros || "n/a"}`);
    pdf.text(30, 150, `Conclusión: ${reporte.conclusión || "n/a"}`);
    pdf.save(`${reporte.id}-${reporte.fraccion}.pdf`);
  }

  async function handleUpdate(e) {
    reporte = e.detail;
    reporte.editado = new Date().getTime();
    const response = await axios.put("/api/reportes/" + reporte._id, reporte);
    showModal = false;
  }
</script>

<div class="card mb-3" transition:slide>
  <header
    class="card-header has-background-white-ter"
    style="cursor:pointer"
    role="button"
    on:click={e => {
      e.target.parentElement.nextElementSibling.hidden = !e.target.parentElement.nextElementSibling.hidden;
    }}>
    <p class="card-header-title has-text-grey">
      {reporte.id} | - | {reporte.fraccion} | - | {reporte.descripcion || ''}
    </p>
  </header>
  <div class="card-content" hidden>
    <div class="content">
      <table>
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
          <td>{new Date(reporte.creado).toLocaleDateString() || 'n/a'}</td>
        </tr>
        <tr>
          <td>Fecha de edición:</td>
          <td>{new Date(reporte.editado).toLocaleDateString() || 'n/a'}</td>
        </tr>
      </table>
    </div>
    <footer class="card-footer" hidden>
      <!-- svelte-ignore a11y-missing-attribute-->
      <a class="card-footer-item" on:click={handleShare}>Compartir</a>
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
