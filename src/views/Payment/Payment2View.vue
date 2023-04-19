<template>
    <div class="page-body">
        <div class="page-title">
            <h3>Infaq Bangunan</h3>
            <hr>
        </div>

        <div class="payment-form">
            <div class="name">
                <i class="text-muted fas fa-user-alt"></i>
                <input type="text" placeholder="Nama" required>
            </div>
            <div class="nominal">
                <span class="btn btn-outline-primary text-primary mb-2 me-2">Rp.100.000</span>
                <span class="btn btn-outline-primary text-primary mb-2 me-2">Rp.250.000</span>
                <span class="btn btn-outline-primary text-primary mb-2 me-2">Rp.500.000</span>
                <span class="btn btn-outline-primary text-primary mb-2 me-2">Rp.1.000.000</span>
                <span class="btn btn-outline-primary text-primary mb-2 me-2">Rp.1.500.000</span>
                <span class="btn btn-outline-primary text-primary mb-2 me-2">Rp.2.000.000</span>
            </div>
            <div class="nominal-text mb-5 mt-4">
                <i class="text-muted fas fa-cash-register"></i>
                <input type="text" placeholder="100000" required>
            </div>
            <hr>
            <button class="btn btn-primary">bayar sekarang</button>
        </div>
    </div>
    <FooterSection />
</template>

<script setup>
    /*
      imports
    */
    import FooterSection from '../../components/footer.vue'

</script>