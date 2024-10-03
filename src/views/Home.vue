<template>
    <div class="">
        <Navbar/>
        <div class="container">
            <Hero/>

            <div class="mt-10 mb-10 flex items-center justify-between">
                <div>
                    <h2>Best <strong>Foods</strong></h2>
                </div>
                <div>
                    <router-link to="/food" class=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <i class="fa-regular fa-eye"></i>  Liha Semua
                    </router-link>
                </div>
            </div>

            <div class="flex flex-wrap gap-11">
                <div class="" v-for="(product,index) in products" :key="index">
                    <CardProduct :product="product"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import axios from "axios";
import CardProduct from '@/components/CardProduct.vue'
export default {
    components:{
        Navbar,
        Hero,
        CardProduct
    },
    data() {
        return{
            products:[]  
        }
    },
    methods:{
        setProduct(data){
            this.products = data
        },
    },
    mounted(){
       axios.get('http://localhost:3000/best-products')
       .then((response) => this.setProduct(response.data))
       .catch((error) => console.log(error))
    },
}
</script>
<style>
    
</style>