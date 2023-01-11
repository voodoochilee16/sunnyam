<script>
  import "../app.css";
  import Nav from '$lib/components/nav.svelte';
  import Footer from "$lib/components/footer.svelte";
</script>


<div class="drawer drawer-end">
  <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="cursor-pointer z-50 mix-blend-difference drawer-button fixed top-4 right-4 lg:top-12 lg:right-12">
      <img class="h-[70px] lg:h-[100px]" src="menu.png" alt="more">
    </label>
    <slot />
    <Footer />
    <!-- Page content here -->
  </div> 

  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <Nav></Nav>
  </div>
</div>


