<template>
    <div class="page-body">
        <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top"
                alt="Fissure in Sandstone" />
            <div class="card-img-overlay">
                <div class="card-img-text">
                    <h6 class="text-white">Infaq Tanah</h6>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">Lokasi berada di daerah Cipanas, luas tanah 2,5 hektar. Alhamdulillah berada di
                    lokasi yang sangat strategis, dekat dengan pintu tol Cager, memiliki mata air, dan berada di
                    ketinggian sehingga pemandangan dapat lepas sejauh mata memandang.</p>
            </div>
        </div>

        <router-link to="/payment/id1" class="btn btn-success w-100 my-3">infaq sekarang</router-link>
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