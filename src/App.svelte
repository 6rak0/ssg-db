<script>
  //router
  import { Route } from 'tinro'
  //pages
  import Home from './pages/Home.svelte'
  import Login from './pages/Login.svelte'
  import Reports from './pages/Reports.svelte'
  import ReportTemplate from './pages/ReportTemplate.svelte'
  import NewReport from './pages/NewReport.svelte'
  import Edit from './pages/Edit.svelte'
  //components
  import Navbar from './components/Navbar.svelte'
</script>

<Navbar />
<Route path="/">
  <Home />
</Route>
<Route path="/login">
  <Login />
</Route>
<Route path="/reportes">
  <Reports />
</Route>
<Route path="/nuevo">
  <NewReport />
</Route>
<Route path="/reporte/:id" let:params>
  <ReportTemplate id={params.id} />
</Route>
<Route path="/editar/:id" let:params>
  <Edit id={params.id} />
</Route>
