<template>
  <div>
    <div class="mb-[120px]">
      <Navbar />
    </div>
    <div class="container">
      <!-- Breadcrumb -->
      <nav
        class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol
          class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
          <li class="inline-flex items-center">
            <router-link
              to="/"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#198754] dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                />
              </svg>
              Home
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <router-link
                to="/"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-[#198754] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >Foods</router-link
              >
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span
                class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
                >Food order</span
              >
            </div>
          </li>
        </ol>
      </nav>

      <div class="mt-10 md:flex items-center gap-10">
        <div class=" shadow-lg">
          <img
            class="w-full"
            :src="'../assets/images/' + product.gambar"
            alt="hjjmk,l"
          />
        </div>
        <div class="w-[500px]">
          <h2 class="text-2xl">
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4 class="my-3 text-xl">
            Harga : <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <hr>
          <form class="mt-4">
            <div class="my-3">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Junlah Pesan</label
              >
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Junlah Pesan"
                required
              />
            </div>

              <div
                class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              >
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Katerangan</label>
                  <textarea
                    id="comment"
                    rows="2"
                    class="w-full px-0 text-sm outline-none text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div
                  class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600"
                >
                  <button
                    type="submit"
                    class="inline-flex gap-4 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#198754] rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-[#198754]"
                  >
                  <i class="fa-solid fa-cart-shopping"></i>
                  Pesan
                  </button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style></style>
