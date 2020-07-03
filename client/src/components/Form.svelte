<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let reporte;

  function handleSubmit() {
    dispatch("submit", reporte);
  }
  function handleChange(e) {
    e.target.value === "Otro"
      ? e.target.parentElement.parentElement.nextElementSibling.removeAttribute(
          "hidden"
        )
      : e.target.parentElement.parentElement.nextElementSibling.setAttribute(
          "hidden",
          ""
        );
  }
</script>

<style>

</style>

<!-- svelte-ignore a11y-no-onchange-->
<form on:submit|preventDefault={handleSubmit}>
  <div class="field">
    <label class="label is-small">Id</label>
    <div class="control">
      <input class="input" type="number" bind:value={reporte.id} required />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Fracción</label>
    <div class="control">
      <input
        class="input"
        type="text"
        pattern="\d\d\d\d\.\d\d\.\d\d"
        title="El formato correcto es xxxx.xx.xx"
        bind:value={reporte.fraccion}
        required />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Descripción</label>
    <div class="control">
      <input class="input" type="text" bind:value={reporte.descripcion} />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Nombre</label>
    <div class="control">
      <input class="input" type="text" bind:value={reporte.nombre} />
    </div>
  </div>
  <div class="control is-expanded">
    <label class="label is-small">Ligamento</label>
    <div class="select is-fullwidth">
      <select required bind:value={reporte.ligamento} on:change={handleChange}>
        <option value="">Elige</option>
        <option value="Tafetán">Tafetán</option>
        <option value="Sarga">Sarga</option>
        <option value="Satín">Satín</option>
        <option value="Otro">Otro</option>
      </select>
    </div>
  </div>
  <div class="field" id="lig" hidden>
    <div class="control">
      <input class="input" type="text" bind:value={reporte.lig} />
    </div>
  </div>
  <div class="control is-expanded">
    <label class="label is-small">Acabado</label>
    <div class="select is-fullwidth">
      <select required bind:value={reporte.acabado} on:change={handleChange}>
        <option value="">Elige</option>
        <option value="Crudo">Crudo</option>
        <option value="Blanqueado">Blanqueado</option>
        <option value="Teñido">Teñido</option>
        <option value="Preteñido">Preteñido</option>
        <option value="Estampado">Estampado</option>
        <option value="Otro">Otro</option>
      </select>
    </div>
  </div>
  <div class="field" id="aca" hidden>
    <div class="control">
      <input class="input" type="text" bind:value={reporte.aca} />
    </div>
  </div>
  <div class="control is-expanded">
    <label class="label is-small">Filamento o Fibra</label>
    <div class="select is-fullwidth">
      <select required bind:value={reporte.filfib}>
        <option value="">Elige</option>
        <option value="Filamento continuo">Filamento continuo</option>
        <option value="Fibra discontinua">Fibra discontinua</option>
        <option value="Filamento y fibra discontinua">
          Filamento y fibra discontinua
        </option>
      </select>
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Composición</label>
    <div class="control">
      <textarea class="textarea" bind:value={reporte.composicion} />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Tejido</label>
    <div class="control">
      <input class="input" type="text" bind:value={reporte.tejido} />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Gramaje en g/m2</label>
    <div class="control">
      <input class="input" type="number" bind:value={reporte.gramaje} />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Ancho en cm</label>
    <div class="control">
      <input class="input" type="text" bind:value={reporte.ancho} />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Otros datos</label>
    <div class="control">
      <textarea class="textarea" bind:value={reporte.otros} />
    </div>
  </div>
  <div class="field">
    <label class="label is-small">Conclusión</label>
    <div class="control">
      <textarea class="textarea" bind:value={reporte.conclusion} />
    </div>
  </div>
  <div class="has-text-centered">
    <button class="button is-primary">Guardar</button>
  </div>
</form>
