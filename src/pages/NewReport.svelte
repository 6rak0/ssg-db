<script>
  import reports from "../stores/reports";
  import Modal from "../components/Modal.svelte";
  import setReport from "../strapi/setReport";
  import userStore from "../stores/user";

  let int,
    fraccion,
    descripcion,
    nombre,
    ligamento,
    lig,
    acabado,
    aca,
    composicion,
    filfib,
    gramaje,
    ancho,
    tejido,
    otro,
    conclusion;

  let isModalOpen = false;
  function handleSubmit() {
    const newReport = {
      int,
      fraccion,
      descripcion,
      nombre,
      ligamento,
      lig,
      acabado,
      aca,
      composicion,
      filfib,
      gramaje,
      ancho,
      tejido,
      otro,
      conclusion,
    };
    $reports = [...$reports, newReport];
    setReport(newReport, $userStore.jwt);
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

<section class="p-6 lg:max-w-screen-sm mx-auto">
  <form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
    <input type="number" placeholder="id interno" bind:value={int} />
    <input
      type="text"
      pattern="\d\d\d\d\.\d\d\.\d\d"
      placeholder="fracción"
      bind:value={fraccion} />
    <input type="text" placeholder="descripción" bind:value={descripcion} />
    <input type="nombre" placeholder="nombre" bind:value={nombre} />
    <select class="bg-white" bind:value={ligamento}>
      <option value="" disabled selected>tipo de ligamento</option>
      <option value="tafetan">tafetán</option>
      <option value="sarga">sarga</option>
      <option value="satin">satín</option>
      <option value="otro">otro</option>
    </select>
    {#if ligamento === 'otro'}
      <input type="text" placeholder="ligamento" bind:value={lig} />
    {/if}
    <select class="bg-white" bind:value={acabado}>
      <option value="" disabled selected>tipo de acabado</option>
      <option value="crudo">crudo</option>
      <option value="blanqueado">blanqueado</option>
      <option value="tenido">teñido</option>
      <option value="pretenido">preteñido</option>
      <option value="estampado">estampado</option>
      <option value="otro">otro</option>
    </select>
    {#if acabado === 'otro'}
      <input type="text" placeholder="acabado" bind:value={aca} />
    {/if}
    <select class="bg-white" bind:value={filfib}>
      <option value="" disabled selected>tipo de filamento</option>
      <option value="filamento">filamento</option>
      <option value="fibra">fibra</option>
    </select>
    <input type="text" placeholder="composición" bind:value={composicion} />
    <select class="bg-white" bind:value={tejido}>
      <option value="" disabled selected>tipo de tejido</option>
      <option value="uyt">urdimbre y trama</option>
      <option value="punto">punto</option>
    </select>
    <input type="number" placeholder="gramaje en g/m2" bind:value={gramaje} />
    <input type="number" placeholder="ancho en cm" bind:value={ancho} />
    <textarea cols="30" rows="6" placeholder="otros datos" bind:value={otro} />
    <textarea
      cols="30"
      rows="6"
      placeholder="conclusión"
      bind:value={conclusion} />
    <button
      class="w-1/2 mx-auto m-3 p-3 bg-indigo-500 ring-2 ring-indigo-300 text-white rounded">guardar</button>
  </form>
  {#if isModalOpen}
    <Modal title={'👍'} on:close={() => (isModalOpen = false)}>
      <p>reporte guardado</p>
    </Modal>
  {/if}
</section>
