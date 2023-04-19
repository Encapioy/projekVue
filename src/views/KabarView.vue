<template>
  <div class="page-body">
    <div class="page-title">
      <h3>Kabar Terkini</h3>
      <hr>
    </div>


    <!-- card section start  -->

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100 w-75">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top"
            alt="Fissure in Sandstone" />
          <div class="card-body">
            <div class="card-date">
              <p class="text-muted">Dibuat 12/01/2023</p>
            </div>
            <div class="card-about">
              <p class="card-text">Berita satu adalah cerita tentang cerita satu yang Berita sa...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- card section end  -->

  <FooterSection />
</template>

<script setup>
/*
  imports
*/
  import FooterSection from '../components/footer.vue'

</script>