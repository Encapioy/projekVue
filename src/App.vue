<template>

  <!-- Navbar section start -->
  <nav class="navbar sticky-top navbar-light bg-light p-3 shadow-3-strong">
    <div class="container-fluid">
      <a class="navbar-brand me-auto" href="#">
        <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" class="me-2" height="20"
          alt="MDB Logo" loading="lazy" />
        <small class="ms-2">Yuk Infaq</small>
      </a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled"
              >Disabled</a
            >
          </li>
        </ul> -->
        <div class="navbar-nav sidebar shadow-3-strong">
          <header class="d-flex">
            <div class="text header-text">
              <h5>Yuk Infaq</h5>
              <p class="text-muted">Investasi masa depan</p>
            </div>
          </header>
          <hr style="margin-top: -10px;">

          <div class="menu-bar">
            <div class="menu">
              <ul class="menu-links">
                <li class="nav-link">
                  <RouterLink to="/">
                    <i class="fas fa-dollar-sign icon"></i>
                    <span class="text nav-text">Infaq</span>
                  </RouterLink>
                </li>
                <li class="nav-link">
                  <RouterLink to="/berita">
                    <i class="fas fa-newspaper icon"></i>
                    <span class="text nav-text">Kabar Terkini</span>
                  </RouterLink>
                </li>
                <li class="nav-link">
                  <RouterLink to="/laporan">
                    <i class="fas fa-clipboard-list icon"></i>
                    <span class="text nav-text">Laporan Keuangan</span>
                  </RouterLink>
                </li>
                <li class="nav-link">
                  <RouterLink to="/about">
                    <i class="fas fa-info-circle icon"></i>
                    <span class="text nav-text">Tentang kami</span>
                  </RouterLink>
                </li>
                <hr>
                <li class="nav-link">
                  <RouterLink to="/">
                    <i class="fas fa-sign-in-alt icon"></i>
                    <span class="text nav-text">Masuk</span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Navbar section end -->

  <!-- Bottom navbar section start  -->

  <div class="bottom-nav shadow-3-strong">
    <RouterLink to="/" class="bot-nav-link">
      <i class="fas fa-dollar-sign icon"></i>
      <span class="bot-nav-text">Infaq</span>
    </RouterLink>
    <RouterLink to="/berita" class="bot-nav-link">
      <i class="fas fa-newspaper icon"></i>
      <span class="bot-nav-text">Kabar</span>
    </RouterLink>
    <RouterLink to="/laporan" class="bot-nav-link">
      <i class="fas fa-clipboard-list icon"></i>
      <span class="bot-nav-text">Laporan</span>
    </RouterLink>
  </div>
  <!-- Bottom navbar section end  -->

  <RouterView />
</template>



<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }
</style>