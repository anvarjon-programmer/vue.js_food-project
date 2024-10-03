<template>
   <section class="mt-10"> 
    <div class="container md:flex items-center justify-between w-full ">
        
        <div class="mt-10  md:w-[50%]">
            <h1 class="text-4xl">
                <Strong>Delicious Food Me nenue</Strong><br />In your Godget
            </h1>
            <p class="text-xl my-5">
              Ayo segera pilih dan person makanan favorit Anda
            </p>
            <router-link to="/foods" class=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="fa-solid fa-arrow-right-long"></i>  Pesan</router-link>
        </div>
        <div class="w-full md:w-[50%] mt-[50px]">
            <img class="w-full" src="../assets/images/hero.png" alt="ghj">
        </div>
    </div></section>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>