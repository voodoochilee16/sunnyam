
<script>
    import Hero from "$lib/components/hero.svelte";
    import Nav from "$lib/components/nav.svelte";
    import Footercontact from "$lib/components/footercontact.svelte";
</script>


<div class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <div class="flex justify-center mt-">
        <a href="/"><img class="w-[47vw] mt-20 md:mt-10 md:w-[360px]" src="/sunny.svg" alt=""></a>
      </div>
      <form action="" method="post" class="mt-20 flex flex-col items-center gap-1 md:gap-3">
                <label for="name"></label>
                <input class="bg-mainorange border-4 border-borderpink  md:h-[50px] md:w-[500px]" type="text" name="name" id="name" placeholder="Your name" />
                <label for="name"></label>
                <input class="bg-mainorange border-4 border-borderpink md:h-[50px] md:w-[500px]" type="text" name="name" id="name" placeholder="Your email"/>
                <label for="name"></label>
                <input class="bg-mainorange border-4 border-borderpink h-[100px] md:h-[200px] md:w-[500px]" type="text" name="name" id="name" placeholder="Your message"/>
      </form>
      <Footercontact></Footercontact>
      <label for="my-drawer" class="cursor-pointer z-50 mix-blend-difference drawer-button fixed top-4 right-4 lg:top-4 lg:right-2">
            <img class="h-[60px] lg:h-[45px]" src="hamburger.svg" alt="more">
          </label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <Nav></Nav>
    </div>
  </div>



