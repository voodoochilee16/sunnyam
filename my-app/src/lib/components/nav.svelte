<script>
    import Footerw from "./footerw.svelte";



function toggleDrawer() {
const drawer = document.getElementById('my-drawer');
drawer.checked = !drawer.checked;
}
</script>




<div class="flex justify-between items-center md:items-start md:justify-between gap-4 menu p-4 w-[100vw] lg:w-[35vw] bg-[#F47D51] text-[#EAE1C8]">
    <ul>
        <button on:click={toggleDrawer}><img class="w-[40px] relative top-1 left-[50vw] md:left-[90vw] lg:left-[30vw] mb-8" src="/close-burger.svg" alt=""></button>
        <li><a href ="/"  class="font-bold text-xl lg:text-4xl">MUSIC</a></li>
        <li><a href ="/tour"  class="font-bold text-xl lg:text-4xl">TOUR</a></li>
        <li><a href ="https://sunnyam.bandcamp.com/merch"  class="font-bold text-xl lg:text-4xl">MERCH</a></li>
        <li><a href ="/contact"  class="font-bold text-xl lg:text-4xl">CONTACT</a></li>
    </ul>
    <div class=" lg:hidden flex justify-center">
        <Footerw></Footerw>
    </div>
</div>
