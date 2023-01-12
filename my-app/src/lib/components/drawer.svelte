<script>
    import Hero from "$lib/components/hero.svelte";
    import Nav from "$lib/components/nav.svelte";
</script>


<div class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
        <Hero></Hero>
        <label for="my-drawer" class="cursor-pointer z-50 mix-blend-difference drawer-button fixed top-4 right-4 lg:top-12 lg:right-6">
            <img class="h-[60px] lg:h-[60px]" src="hamburger.svg" alt="more">
          </label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <Nav></Nav>
    </div>
  </div>