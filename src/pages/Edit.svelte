<script>
  import reports from '../stores/defaultReports'
  import Modal from '../components/Modal.svelte'

  export let id
  import Loading from '../components/Loading.svelte'
  $: report = $reports.find((item) => item.id === parseInt(id))

  // let int,
  //   fraccion,
  //   descripcion,
  //   nombre,
  //   ligamento,
  //   lig,
  //   acabado,
  //   aca,
  //   composicion,
  //   filfib,
  //   gramaje,
  //   ancho,
  //   tejido,
  //   otros,
  //   conclusion

  let isModalOpen = false
  function handleSubmit() {
    const newReport = report
    $reports = [...$reports, newReport]
    isModalOpen = true
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
    <select class="bg-white" required bind:value={report.ligamento}>
      <option value="" disabled selected>tipo de ligamento</option>
      <option value="tafetán">tafetán</option>
      <option value="sarga">sarga</option>
      <option value="satín">satín</option>
      <option value="otro">otro</option>
    </select>
    {#if report.ligamento === 'otro'}
      <input type="text" placeholder="ligamento" bind:value={report.lig} />
    {/if}
    <select class="bg-white" required bind:value={report.acabado}>
      <option value="" disabled selected>tipo de acabado</option>
      <option value="Crudo">crudo</option>
      <option value="Blanqueado">blanqueado</option>
      <option value="Teñido">teñido</option>
      <option value="Preteñido">preteñido</option>
      <option value="Estampado">estampado</option>
      <option value="Otro">otro</option>
    </select>
    {#if report.acabado === 'otro'}
      <input type="text" placeholder="acabado" bind:value={report.aca} />
    {/if}
    <select class="bg-white" required bind:value={report.filfib}>
      <option value="" disabled selected>tipo de filamento</option>
      <option value="Filamento continuo">filamento continuo</option>
      <option value="Fibra discontinua">fibra discontinua</option>
      <option value="Filamento y fibra discontinua">
        filamento y fibra discontinua
      </option>
    </select>
    <input
      type="text"
      placeholder="composición"
      bind:value={report.composicion} />
    <input type="text" placeholder="tejido" bind:value={report.tejido} />
    <input
      type="text"
      placeholder="gramaje en g/m2"
      bind:value={report.gramaje} />
    <input type="text" placeholder="ancho en cm" bind:value={report.ancho} />
    <input
      type="text"
      placeholder="gramaje en g/m2"
      bind:value={report.gramaje} />
    <textarea
      cols="30"
      rows="6"
      placeholder="otros datos"
      bind:value={report.otros} />
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
