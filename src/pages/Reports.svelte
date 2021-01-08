<script>
  import reports from '../stores/defaultReports'

  import ReportSmall from '../components/ReportSmall.svelte'

  let query = ''
  $: filteredReports = $reports.filter((item) => item.int === parseInt(query))
</script>

<style>
  input {
    height: 2rem;
    margin-block: 4px;
    border-radius: none;
    border-block-end: 1px solid black;
  }
</style>

<section class="p-6 lg:max-w-screen-sm mx-auto">
  <input
    class="px-3 w-full"
    type="text"
    placeholder="fracción"
    bind:value={query} />

  {#if !query}
    {#each $reports as report (report.id)}
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
