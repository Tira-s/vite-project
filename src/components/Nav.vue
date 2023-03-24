<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark ">
    <div class="container-fluid mx-175 justify-content-around gap-5">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="logo" height="87"/>
        <span class="text-logo"> Lorem <span class="text-logo shadow-green">ipsum</span></span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="gap:30px">
          <li class="nav-item">
            <a class="nav-link active " aria-current="page" href="#">LOREM</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              LOREM
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">LOREMIPSUM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">LOREM & IPSUM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">LOREM</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.mx-175{
    margin-left: 175px;
    margin-right: 175px;
  }
  .blank-space{
    width: 50%
  }
  .text-logo{
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #FFFFFF;
    /* shadow green */
  }
  .shadow-green{
    color: #D9EF0C;
    text-shadow: 0px 4px 30px #21612F;
  }
  a.nav-link , a.nav-link.active {
    color: #FFFFFF;
  }
  
</style>
