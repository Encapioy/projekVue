<template>
  <div class="page-body">
    <div class="page-title">
      <h3>Infaq</h3>
      <hr>
    </div>

    <!-- card section start  -->

    <div class="row row-cols-1 row-cols-md-3 g-4 card-group">
      <div class="col" v-for="infaq in infaq" :key="infaq.id">
        <div class="card h-100 shadow-4-strong">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top"
            alt="Fissure in Sandstone" />
          <div class="card-body">
            <div class="card-header">
              <h5>{{ infaq.title }}</h5>
              <p class="card-text">{{ infaq.about }}
              </p>
              <router-link :to="`/infaq-find/${ infaq.id }`" class="btn btn-warning py-1 px-2">More
                info...</router-link>
            </div>
            <div class="card-about my-4">
              <p>Bank: <span>BSI</span></p>
              <p class="mb-4">No Rekening: <span>{{ rekening }}</span></p>
              <div class="card-about-button d-flex justify-content-between">
                <button @click="copy" class="btn btn-outline-info">
                  <i class="far fa-copy me-2"></i>
                  <span>salin</span>
                </button>
                <router-link :to="`/payment/${ infaq.id }`" class="btn btn-success">infaq sekarang</router-link>
              </div>
            </div>
            <div class="card-bottom d-flex justify-content-between">
              <p class="text-muted">Terkumpul <br> <span class="text-dark">Rp.0</span></p>
              <p class="text-muted">Dibutuhkan <br> <span class="text-dark">Rp.10.000.000</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card section end  -->


  </div>

  <FooterSection />
</template>

<script setup>
  /*
    imports
  */

  import { ref } from "vue";
  import FooterSection from '../components/footer.vue';

  /*
    infaq
  */

  const infaq = ref([
    {
      id: 'id1',
      title: 'Infaq Tanah',
      about: `Lokasi berada di daerah Cipanas, luas tanah 2,5 hektar. Alhamdulillah berada di
              lokasi yang sangat strategis,`,
    },
    {
      id: 'id2',
      title: 'Infaq Bangunan',
      about: `Insya Allah Masjid Impian akan segera dibangun. Silahkan untuk mengambil pahala jariyah masjid
              Dengan Rp.500.000,- per meter.`,
    },
    {
      id: 'id3',
      title: 'Infaq Alat Belajar',
      about: `Santri membutuhkan alat belajar yang banyak terutama meja kursi dan laptop`,
    },
  ])

  const rekening = ref('7000030091')

  function copy() {
    try{
      navigator.clipboard.writeText(rekening.value)
    } catch(e) {
      throw e
    }

    alert('no rekening telah disalin')
  }

</script>