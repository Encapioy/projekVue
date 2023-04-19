<template>
  <div class="page-body">
    <div class="page-title">
      <h3>Laporan Keuangan</h3>
      <hr>
    </div>

    <!-- list section start  -->
    <ul class="laporan-group">
      <li class="laporan-list d-flex">
        <div class="icon rounded-circle bg-primary d-flex align-items-center justify-content-center">
          <i class="fas fa-clipboard-list fa-lg "></i>
        </div>
        <p class="text-muted">Februari <br> <span class="text-dark">12/01/2023</span></p>
      </li>
      <li class="laporan-list d-flex">
        <div class="icon rounded-circle bg-primary d-flex align-items-center justify-content-center">
          <i class="fas fa-clipboard-list fa-lg "></i>
        </div>
        <p class="text-muted">Januari <br> <span class="text-dark">12/01/2023</span></p>
      </li>
    </ul>
    <!-- list section end  -->
  </div>

  <FooterSection />
</template>

<script setup>
/*
  imports
*/
  import FooterSection from '../components/footer.vue'

</script>