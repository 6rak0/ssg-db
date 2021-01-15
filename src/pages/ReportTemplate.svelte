<script>
  export let id;
  import reports from "../stores/reports";
  import Loading from "../components/Loading.svelte";
  import Report from "../components/Report.svelte";
  $: report = $reports.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
  <title>{!report ? 'single report' : report.id}</title>
</svelte:head>

{#if !report}
  <Loading />
{:else}
  <section class="p-6 md:p-12">
    <Report {report} />
  </section>
{/if}
