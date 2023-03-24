<script setup>
  
</script>
<script>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  export default {
    components: { VueDatePicker },
    data() {
      return {
        date: null,
      };
    }
  }
</script>
<template>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <section>
    <div class="container-fluid bg-dark h-25 text-center content">
      <div class="center text-start justify-content-center d-flex ">
          <img src="../assets/bicycle.png" alt="bicycle" height="500" class="pb-5">
          <div class="w-100">
            <h1 class="text-h">ติดต่อเรา</h1>
            <form >
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="txtname" placeholder="ชื่อ - นามสกุล">
                <label for="txtname">ชื่อ - นามสกุล</label>
              </div>
              <div class="form-floating mb-3">
                <input type="tel" class="form-control" id="txttel" placeholder="เบอร์ติดต่อ">
                <label for="txttel">เบอร์ติดต่อ</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="txtemail" placeholder="อีเมล">
                <label for="txtemail">อีเมล</label>
              </div>
              <div class="form-floating mb-3">
                <VueDatePicker v-model="date" placeholder="วันที่"></VueDatePicker>
                <p class="text-p2">Lorem Ipsum is simply dummy text <br />
                    Lorem Ipsum is simply dummy te</p>
              </div>

              <button type="submit" class="btn btn-submit text-button">Lorem</button>
            </form>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-button{
  width: 150px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  /* or 90% */

  text-align: center;
  letter-spacing: 0.1px;

  color: #000000;
}
.btn-submit{
    /* green t-rex */

    background: linear-gradient(180deg, #DEE34B 0%, #D9EF0C 35.94%, #87A30D 100%);
    /* shadow */

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.35);
    border-radius: 50px;
}
.form-control{
    background-color: #000  ;
    border:unset;
    border-radius: unset;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #F5F5F5;
    color: #FFFFFF;
}
.form-floating>label{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #EDEDEE;
}
.content{
    padding: 200px 15% 10% 15% ;
  }
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
    font-size: 16px;
    line-height: 140.9%;
    /* or 23px */
    color: #FFFFFF;
  }
  .text-h{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 73px;
    text-transform: capitalize;

    color: #FFFFFF;
  }
  .shadow-green{
    color: #D9EF0C;
    text-shadow: 0px 4px 30px #21612F;
  }
</style>
