<template>
    

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg h-[200px] object-cover w-full" :src=" 'assets/images/' + product.gambar" alt="..." />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mt-5 text-2xl font-bold tracking-tight text-gray-900">{{ product.nama }} </h5>
        </a>
        <p class="py-5 font-normal text-gray-700 dark:text-gray-400">Harga : Rp. {{ product.harga }}</p>
        <router-link  :to="'/foods/' + product.id" class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#198754] rounded-lg hover:bg-[#198754] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:[#198754] dark:hover:bg-[#198754] dark:focus:ring-[#198754]">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </router-link>
    </div>
</div>

</template>
<script>
export default {
    name:'CardProduct',
    props:["product"]
}
</script>
<style>
    
</style>