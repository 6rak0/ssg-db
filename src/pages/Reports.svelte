<script>
  import reports from '../stores/defaultReports'
</script>

<section class="p-6">
  {#each $reports as report (report.id)}
    <p>{report.fraccion}</p>
  {/each}
</section>
