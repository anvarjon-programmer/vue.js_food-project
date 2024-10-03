<template>
    <header class="bg-white shadow-sm fixed top-0 right-0 left-0 ">
        <div class="my-5 pb-3">
            <div class="flex items-center justify-between container">
            <ul class="flex items-center gap-5">
                <li class="text-2xl">
                    <router-link to="/">Logo</router-link>
                </li>
                <li class="text-2xl">
                    <router-link to="/" class="ml-5">Home</router-link>
                </li>
                <li class="text-2xl">
                    <router-link to="/foods">Food</router-link>
                </li>
            </ul>
            <router-link to="/" class="text-2xl">
                <i class="fa-solid fa-cart-shopping"></i>
            </router-link>
        </div>
        </div>
    </header>
</template>
<script>
export default {
    name:'Navbar'
}
</script>
<style>
    
</style>