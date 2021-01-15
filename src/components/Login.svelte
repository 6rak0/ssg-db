<script>
  import user from "../stores/user";
  import { logoutUser } from "../stores/user";
</script>

<div>
  {#if $user.jwt}
    <a href="/" on:click={logoutUser}>logout</a>
  {:else}<a href="/login">login</a>{/if}
</div>
