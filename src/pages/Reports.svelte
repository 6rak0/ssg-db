<script>
  import reportes from "../stores/reports";
  import ReportSmall from "../components/ReportSmall.svelte";

  let query = "";
  $: filteredReports = $reportes.filter((item) => item.fraccion === query);
</script>

<style>
  input {
    height: 2rem;
    margin-block: 4px;
    border-radius: none;
    border-block-end: 1px solid black;
  }
</style>

<svelte:head>
  <title>reportes</title>
</svelte:head>

<section class="p-6 lg:max-w-screen-sm mx-auto">
  <input
    class="px-3 w-full"
    type="text"
    placeholder="fracción"
    bind:value={query} />

  {#if !query}
    {#each $reportes as report}
      <ReportSmall {report} />
    {/each}
  {:else if filteredReports.length == 0}
    <p>no existe ese reporte</p>
  {:else}
    {#each filteredReports as report}
      <ReportSmall {report} />
    {/each}
  {/if}
</section>
