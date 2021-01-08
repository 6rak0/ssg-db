<script>
  import jsPDF from 'jspdf'
  export let report

  function handleShare() {
    const pdf = new jsPDF()
    pdf.text(30, 30, `Id: ${report.int}`)
    pdf.text(30, 40, `Fracción: ${report.fraccion}`)
    pdf.text(30, 50, `Descripción: ${report.descripcion || 'n/a'}`)
    pdf.text(30, 60, `Nombre: ${report.nombre || 'n/a'}`)
    pdf.text(30, 70, `Ligamento: ${report.lig || report.ligamento || 'n/a'}`)
    pdf.text(30, 80, `Acabado: ${report.aca || report.acabado || 'n/a'}`)
    pdf.text(30, 90, `Composición: ${report.composicion || 'n/a'}`)
    pdf.text(30, 100, `Filamento o Fibra: ${report.filfib || 'n/a'}`)
    pdf.text(30, 110, `Tejido: ${report.tejido || 'n/a'}`)
    pdf.text(30, 120, `Gramaje en g/m2: ${report.gramaje || 'n/a'}`)
    pdf.text(30, 130, `Ancho: ${report.ancho || 'n/a'}`)
    pdf.text(30, 140, `Otros datos: ${report.otros || 'n/a'}`)
    pdf.text(30, 150, `Conclusión: ${report.conclusion || 'n/a'}`)
    pdf.save(`${report.int}-${report.fraccion}.pdf`)
  }
</script>

<div class="p-3 md:p-12">
  <div>
    <table>
      <tr>
        <td>nombre:</td>
        <td>{report.nombre}</td>
      </tr>
      <tr>
        <td>int:</td>
        <td>{report.int}</td>
      </tr>
      <tr>
        <td>fracción:</td>
        <td>{report.fraccion}</td>
      </tr>
      <tr>
        <td>descripción:</td>
        <td>{report.descripcion}</td>
      </tr>
      <tr>
        <td>tipo de ligamento:</td>
        <td>{report.lig || report.ligamento}</td>
      </tr>
      <tr>
        <td>tipo de acabado:</td>
        <td>{report.aca || report.acabado}</td>
      </tr>
      <tr>
        <td>filamento o fibra:</td>
        <td>{report.filfib}</td>
      </tr>
      <tr>
        <td>composición:</td>
        <td>{report.composicion}</td>
      </tr>
      <tr>
        <td>tejido:</td>
        <td>{report.tejido}</td>
      </tr>
      <tr>
        <td>gramaje en g/m2:</td>
        <td>{report.gramaje}</td>
      </tr>
      <tr>
        <td>ancho en cm:</td>
        <td>{report.ancho}</td>
      </tr>
      <tr>
        <td>otros datos:</td>
        <td>{report.otros}</td>
      </tr>
      <tr>
        <td>conclusión:</td>
        <td>{report.conclusion}</td>
      </tr>
    </table>
  </div>

  <div class="my-6 flex justify-between md:justify-around">
    <a href="/editar/{report.id}"><button
        class="w-24 m-3 p-3 bg-indigo-500 ring-2 ring-indigo-300 text-white rounded">editar</button></a>
    <button
      class="w-24 m-3 p-3 bg-indigo-500 ring-2 ring-indigo-300 text-white rounded"
      on:click={handleShare}>compartir</button>
  </div>
</div>
