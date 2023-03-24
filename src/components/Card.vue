<script setup>
</script>

<template>
  <section>
    <div class="container-fluid bg-D9EF0C h-25 text-center content">
      <h1 class="text-h">LOREM IPSUM</h1>
      <div class="text-start justify-content-center d-flex mt-5 gap-3 ">
          <div class="card" style="width: 19rem; " >
            <img src="../assets/card.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-start">Lorem Ipsum is simply</h5>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
          </div>
          <div class="card" style="width: 19rem; ">
            <img src="../assets/card.jpg" class="card-img-top" alt="..." >
            <div class="card-body">
              <h5 class="card-title text-start">Lorem Ipsum is simply</h5>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
          </div>
          <div class="card" style="width: 19rem; ">
            <img src="../assets/card.jpg" class="card-img-top" alt="..." >
            <div class="card-body">
              <h5 class="card-title text-start">Lorem Ipsum is simply</h5>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card img{
  height:150px;
  object-fit: cover;
}
  .card-title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
    color: #333333;
  }
  .card-text{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    padding-bottom: 50px;
  }
  .content{
    padding: 100px 15% 10% 15% ;
  }
  .text-h{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 82px;
    /* identical to box height, or 137% */
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #000000;
  }
  .bg-D9EF0C{
    background-color: #D9EF0C !important;
  }
</style>
