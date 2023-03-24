<script setup>
</script>

<template>
  <section>
    <div class="container-fluid bg-dark h-25 text-center pt-5">
      <div class="center text-start justify-content-center d-flex ">
        <div class="flex-row pt-5" >
          <p class="text-logo m-0 p-0" style="width: fit-content;"> Lorem </p>
          <p class="text-logo shadow-green m-0 p-0 mb-5" style="width: fit-content;">ipsum</p>
          <p class="text-p p-0" style="width: fit-content;">Lorem Ipsum is simply Lorem Ipsum is <br/> simply Lorem Ipsum is simply</p>
          <p class="text-p2 p-0" style="width: fit-content;">Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry. Lorem Ipsum<br/> has been the industry's </p>
        </div>
        <div class="">
          <img src="../assets/bicycle.png" alt="bicycle" height="550" class="pb-5">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.text-p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }
  .text-p2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
  }
  .text-logo{
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    line-height: 117px;
    text-transform: uppercase;
    /* shadow green */
  }
  .shadow-green{
    color: #D9EF0C;
    text-shadow: 0px 4px 30px #21612F;
  }
</style>
