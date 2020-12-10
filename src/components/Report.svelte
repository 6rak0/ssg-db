<script>
  export let report
</script>

<article class="p-6">
  <ul>
    <li>{report.nombre}</li>
    <li>{report.int}</li>
    <li>{report.fraccion}</li>
    <li>{report.descripcion}</li>
    <li>{report.ligamento || report.lig}</li>
    <li>{report.acabado || report.aca}</li>
    <li>{report.composicion}</li>
    <li>{report.filfib}</li>
    <li>{report.gramaje}</li>
    <li>{report.tejido}</li>
    <li>{report.otros}</li>
    <li>{report.conclusion}</li>
  </ul>
  <div class="my-6 flex justify-between md:justify-around">
    <button
      class="w-24 bg-red-500 border rounded p-3 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500">editar</button>
    <button
      class="w-24 bg-red-500 border rounded p-3 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500">compartir</button>
  </div>
</article>
