<script>
  import reports from "../stores/reports";
  import Modal from "../components/Modal.svelte";
  import editReport from "../strapi/editReport";
  import userStore from "../stores/user";

  export let id;
  $: report = $reports.find((item) => item.id === parseInt(id));
  let isModalOpen = false;

  function handleSubmit() {
    editReport(id, report, $userStore.jwt);
    isModalOpen = true;
  }
</script>

<style>
  form input,
  form select {
    height: 2rem;
    margin-block: 4px;
    /* border-radius: 5px; */
    border-block-end: 1px solid black;
  }
  form input {
    border-block-end: 1px solid black;
  }
  select:invalid {
    color: rgba(156, 163, 175, 1);
  }
</style>

<svelte:head>
  <title>{report.name}</title>
</svelte:head>

<section class="p-6 lg:max-w-screen-sm mx-auto">
  <form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
    <input
      type="number"
      placeholder="id interno"
      required
      bind:value={report.int} />
    <input
      type="text"
      pattern="\d\d\d\d\.\d\d\.\d\d"
      placeholder="fracción"
      required
      bind:value={report.fraccion} />
    <input
      type="text"
      placeholder="descripción"
      bind:value={report.descripcion} />
    <input type="nombre" placeholder="nombre" bind:value={report.nombre} />
    <select class="bg-white" bind:value={report.ligamento}>
      <option value="" disabled selected>tipo de ligamento</option>
      <option value="tafetan">tafetán</option>
      <option value="sarga">sarga</option>
      <option value="satin">satín</option>
      <option value="otro">otro</option>
    </select>
    {#if report.ligamento === 'otro'}
      <input type="text" placeholder="ligamento" bind:value={report.lig} />
    {/if}
    <select class="bg-white" bind:value={report.acabado}>
      <option value="" disabled selected>tipo de acabado</option>
      <option value="crudo">crudo</option>
      <option value="blanqueado">blanqueado</option>
      <option value="tenido">teñido</option>
      <option value="pretenido">preteñido</option>
      <option value="estampado">estampado</option>
      <option value="otro">otro</option>
    </select>
    {#if report.acabado === 'otro'}
      <input type="text" placeholder="acabado" bind:value={report.aca} />
    {/if}
    <select class="bg-white" bind:value={report.filfib}>
      <option value="" disabled selected>tipo de filamento</option>
      <option value="filamento">filamento</option>
      <option value="fibra">fibra</option>
    </select>
    <input
      type="text"
      placeholder="composición"
      bind:value={report.composicion} />
    <select class="bg-white" bind:value={report.tejido}>
      <option value="" disabled selected>tipo de tejido</option>
      <option value="uyt">urdimbre y trama</option>
      <option value="punto">punto</option>
    </select>
    <input
      type="number"
      placeholder="gramaje en g/m2"
      bind:value={report.gramaje} />
    <input type="number" placeholder="ancho en cm" bind:value={report.ancho} />
    <textarea
      cols="30"
      rows="6"
      placeholder="otros datos"
      bind:value={report.otro} />
    <textarea
      cols="30"
      rows="6"
      placeholder="conclusión"
      bind:value={report.conclusion} />
    <button
      class="w-1/2 mx-auto m-3 p-3 bg-indigo-500 ring-2 ring-indigo-300 text-white rounded">guardar</button>
  </form>
  {#if isModalOpen}
    <Modal title={'-/-'} on:close={() => (isModalOpen = false)}>
      <p>reporte guardado</p>
    </Modal>
  {/if}
</section>
