<template>

<v-container>
    <ul class="pageBar">
            <li class="goLeft pbLiH"><a class="navTextG" href=""><router-link to="/knownledge">ความรู้เรื่องภาษี</router-link></a></li>
            <li class="goLeft pbLiH"><a class="navTextG" href=""><router-link to="/advice">คำแนะนำเกี่ยวกับภาษี</router-link></a></li>
            <li class="goLeft pbLiH"><a class="navTextG" href=""><router-link to="/calDiscount">คำนวณส่วนลดหย่อนภาษี</router-link></a></li>
            <li class="goLeft pbLiH"><a class="navTextG" href=""><router-link to="/adviceDiscount">วิธีลดหย่อนภาษีเพิ่มเติม</router-link></a></li>
            <li class="goLeft pbLiH"><a class="navTextG" href=""><router-link to="/contact">ติดต่อเรา</router-link></a></li>
        </ul>
    <center>
        
        <div class="textNormal goBottom">
            <h1>คำนวณภาษีเองง่ายๆ ได้ทุกที่ด้วย EZ-Tax</h1>
        </div>
        <div class="jumbotron"><router-link to="/calculate">
        <a href="" class="button">เริ่มคำนวณภาษี</a></router-link></div>
    </center>
</v-container>
</template>

<script>
  export default {
  }
</script>

<style>
            .textNormal{
                font-family: spmk;
                color: #707070;
            }

            .goBottom{
                margin-top: 350px;
                margin-bottom: 0%;
            }

            .jumbotron {
                font-family: spmk;
                font-size: 16px;
                padding: 20px 0px;
                background-size: cover;
                text-align: center;
                color: #fff;
                position: relative;
            }

            .button {
                font-family: spmk;
                display: inline-block;
                border: 2px solid #11144C;
                padding: 10px 20px;
                color: #11144C;
                text-decoration: none;
                transition: 0.3s;
                line-height: 30px;
                border-radius: 100px;
            }

            .button:hover {
                background: #11144C;
                color: white;
            }

            .pageBar {
                font-family: spmk;
                font-size: 16px;
                list-style-type: none;
                width: 740px;
                margin: 50px auto;
                padding: 5px 40px;
                overflow: auto;
                background-color: white;
                line-height: 1.33;
                border-radius: 100px;
            }
            .goLeft {
                float: left;
            }
            .goRight {
                float: right;
            }
            .navTextG {
                display: block;
                color: #989898;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            .pbLiH a:hover {
                color: #11144C;
            }

            @font-face {
            font-family: spmk;
            src: url('supermarket.ttf') format('truetype');
           }
</style>
