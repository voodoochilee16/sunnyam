<script>
    import Musichero from "./musichero.svelte";
    import Musicnav from "./musicnav.svelte";
    import Yellowstar from "./yellowstar.svelte";
    import Trees from "./trees.svelte";

</script>


<div  class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
        <Musichero></Musichero>
        <Yellowstar></Yellowstar>
        <Trees></Trees>
        <label for="my-drawer" class="cursor-pointer z-50 mix-blend-difference drawer-button fixed top-4 right-4 lg:top-4 lg:right-2">
            <img class="h-[40px]  lg:h-[50px] mr-1" src="hamburger2.svg" alt="more">
          </label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <Musicnav/>
    </div>
  </div>