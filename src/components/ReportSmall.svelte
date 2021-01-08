<script>
  export let report
</script>

<a href="/reporte/{report.id}">
  <article class="my-6 p-3 rounded shadow-xl flex justify-between items-center">
    <div>
      <ul>
        <li>{report.nombre}</li>
        <li>{report.int}</li>
        <li>{report.fraccion}</li>
      </ul>
    </div>
  </article>
</a>
