<script>
    import Footerw from "./footerw.svelte";
</script>
<!-- <ul class="menu p-4 w-[70vw] lg:w-[35vw] bg-black text-white">
	<li><a on:click|preventDefault={scrollIntoView} on:click={toggleDrawer} href ="#design-display"  class="font-bold text-xl lg:text-4xl">Display Design</a></li>
	<li><a on:click|preventDefault={scrollIntoView} on:click={toggleDrawer} href ="#call-for-papers"  class="font-bold text-xl lg:text-4xl">Call for Papers</a></li>
	<li><a on:click|preventDefault={scrollIntoView} on:click={toggleDrawer} href ="#keynote-speakers"  class="font-bold text-xl lg:text-4xl">Keynote Speakers</a></li>
	<li><a on:click|preventDefault={scrollIntoView} on:click={toggleDrawer} href ="#venue"  class="font-bold text-xl lg:text-4xl">Venue</a></li>
</ul> -->

<div class="flex justify-between menu p-4 w-[70vw] lg:w-[35vw] bg-[#F47D51] text-white">
    <ul>
        <li><a href ="#design-display"  class="font-bold text-xl lg:text-4xl">MUSIC</a></li>
        <li><a href ="#call-for-papers"  class="font-bold text-xl lg:text-4xl">TOUR</a></li>
        <li><a href ="https://sunnyam.bandcamp.com/merch"  class="font-bold text-xl lg:text-4xl">MERCH</a></li>
        <li><a href ="/contact"  class="font-bold text-xl lg:text-4xl">CONTACT</a></li>
    </ul>
    <div class="flex justify-center">
        <Footerw></Footerw>
    </div>
</div>
