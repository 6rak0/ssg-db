<script>
  import { createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let modal;
  export let title;

  const handle_keydown = e => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused =
    typeof document !== "undefined" && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
</script>

<style>

</style>

<svelte:window on:keydown={handle_keydown} />

<div class="modal is-active">
  <div class="modal-background" on:click={close} />
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{title}</p>
      <button class="delete" aria-label="close" on:click={close} />
    </header>
    <section class="modal-card-body" bind:this={modal}>
      <!-- Content ... -->
      <slot />
    </section>
  </div>
</div>
