<template>
  <div>
    <div class="mb-[100px]">
      <Navbar />
    </div>

    <div class="container mt-[50px]">
      <div class="my-4">
        <h2 class="text-4xl">Daftar <strong>Makon</strong></h2>
      </div>
        <div>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search....."
            required
          />
        </div>

        <div class="grid gap-5 mt-10 m-auto sm:grid-cols-2 md:grid-cols-3">
            <div v-for="(product,index) in products" :key="index">
                <CardProduct :product="product"/>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios';
export default {
  components: {
    Navbar,
    CardProduct
  },

  data(){
    return{
        products:[]
    }
  },
  methods:{
    setProduct(data){
        this.products = data;
    }
  },
  mounted(){
    axios.get("http://localhost:3000/products")
    .then((response) => this.setProduct(response.data))
    .catch((error) => console.log(error))
  }
};
</script>
<style></style>
