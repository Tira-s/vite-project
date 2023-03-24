<script setup>
</script>

<template>
  <section>
    <div class="container-fluid bg-dark h-25 text-center pt-5">
      <h1 class="text-logo pt-5">LOREM IPSUM <span class="text-green">LOREM</span></h1>
      <div class="d-flex flex-row justify-content-between align-items-center mt-150 mb-50">
        <button class="btn prev">&#10229; </button>
        <img src="../assets/human.jpeg" alt="Human" class="img-thumbnail" >
        <button class="btn next">&#8594;</button>
      </div>
      <h5 class=" text-p text-white">Lorem Ipsum is simply</h5>
      <p class="text-white w-35 mx-auto pb-150 m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  </section>
</template>

<style scoped>
  .btn{
    margin-top: 100px;
    width: 55px; 
    height: 55px; 
  }
  .btn.prev {
    background-color: #C4C4C4;
    color: black;
  }

  .btn.next {
    background-color: #D9EF0C;
    color: black;
  }
  .mt-150 {
    margin-top: 150px;
  }
  .mb-50{
    margin-bottom: 50px;
  }
  .pb-150{
    padding-bottom: 150px !important;
  }
  .w-35{
    width: 35% !important;
  }
  .text-logo{
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    text-align: center;
    text-transform: uppercase;
    /* shadow green */
  }
  .text-p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
    /* identical to box height */
    text-align: center;
  }

  .text-p2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */

    text-align: center;
  }
  .text-green{
    color: #D9EF0C;
  }

  .img-thumbnail {
    
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid var(--bs-border-color);
    border-radius: 100px;
    max-width: 200px;
    height: 200px;
    object-fit: cover;
  }   
</style>
