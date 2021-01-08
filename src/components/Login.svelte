<script>
  import user from "../stores/user";
</script>

<div>
  {#if $user.jwt}<a href="/">logout</a>{:else}<a href="/login">login</a>{/if}
</div>
