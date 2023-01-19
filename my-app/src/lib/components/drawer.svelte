<script>
    import Hero from "$lib/components/hero.svelte";
    import Nav from "$lib/components/nav.svelte";
    import Whitestars from "./whitestars.svelte";

</script>


<div  class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
       <Whitestars></Whitestars>
        <Hero></Hero>
        <label for="my-drawer" class="cursor-pointer z-50 mix-blend-difference drawer-button fixed top-4 right-4 lg:top-4 lg:right-2">
            <img class="h-[40px]  lg:h-[50px] mr-1" src="hamburger.svg" alt="more">
          </label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <Nav></Nav>
    </div>
  </div>