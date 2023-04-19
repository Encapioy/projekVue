<template>
    <div class="page-body">
        <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top"
                alt="Fissure in Sandstone" />
            <div class="card-img-overlay">
                <div class="card-img-text">
                    <h6 class="text-white">Infaq Alat Belajar</h6>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">Santri membutuhkan alat belajar yang banyak terutama meja kursi dan laptop</p>
            </div>
        </div>

        <router-link to="/payment/id3" class="btn btn-success w-100 my-3">infaq sekarang</router-link>
    </div>

    <FooterSection />
</template>

<script setup>
    /*
      imports
    */

    import FooterSection from '../../components/footer.vue'
    import { useRoute, useRouter } from 'vue-router'
    import { reactive, onBeforeMount } from 'vue'


    const route = useRoute()
    const router = useRouter()

</script>