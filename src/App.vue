<template>
  <div id="app">
    <!--    导航栏-->
    <div class="nav">
      <img src="./assets/img/zzz.png" alt="">
      <about @click="showModal=true" class="btn">关于作者</about>
    </div>
    <!--    关于作者-->
    <div class="mask" v-if="showModal" @click="showModal=false"></div>
    <div class="about" v-if="showModal">
      <div class="black">
        <div class="info">
          <h3>曹峻玮</h3>
          <div>意向：前端开发工程师/实习</div>
          <div>邮箱：c1502581704@126.com</div>
          <div>电话：15651088686</div>
          <div>学校：金陵科技学院</div>
          <div>毕业时间：2020年7月</div>
        </div>
        <div class="letter">
          <div>尊敬的公司领导：</div>
          <div style="text-indent: 2em">您好！</div>
          <p style="text-indent: 2em">感谢您在百忙之中阅读我的邮件，我想应聘前端开发的职位，我相信我能够胜任这份工作。
            我目前就读于金陵科技学院计算机科学专业，本科的学习让我对计算机软硬件的原理都比较了解。在校期间我获得了南京市教育系统优秀团员，多次获得校三创学生，优秀学生干部，校奖学金。我对开发抱有极大的热情，早早就定下了从事前端工程师的目标，并且一直以来都在不断地学习，自学掌握了前端开发的技术，培养了良好的学习能力。在校期间我担任学生干部，并负责大型活动，具备良好的沟通协调与合作能力。
            我在2020年的暑期即将结束本科的学习，我热切的盼望能够有与您面对面交谈的机会，如果今后可以一同奋斗，我会以最大的热情和认真的态度回报公司。
          </p>
          <div style="text-indent: 2em">此致</div>
          <div>盼复！</div>
          <div style="float: right">曹峻玮</div>
          <br>
          <div style="float: right">2020年2月22日</div>
        </div>
      </div>
    </div>
    <!--    路由填充位-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    this.$notify({
      message: '对了，你点点顶部的关于作者',
      duration: 0,
      offset: 350
    })
  }
}
</script>

<style>
  .nav {
    color: #ffffff;
    line-height: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.7);
    text-decoration: underline;
    text-align: center;
    font-size: 18px;
  }

  .nav :hover {
    color: pink;
  }

  .nav img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    margin: 4px;
    vertical-align: middle;
  }

  .mask {
    background: black;
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3
  }
  .black{
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #121213c4;
    box-sizing: border-box;
  }

  .about {
    color: #ffffff;
    background-color: #000 ;
    position: absolute;
    top: 100px;
    left: 300px;
    width: calc(100% - 600px);
    height: calc(100% - 260px);
    z-index: 6;
    box-sizing: border-box;
    line-height: 30px;
  }

  .about::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
  }
  /* 于上面类似,做一个面积比box略大的矩形,并通过改变层叠次序,置于box的下层,达到给box设置边框的效果 */
  .about::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    /* 滤镜属性  给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。 */
    filter: blur(40px);
  }
  .about::before,
  .about::after {
    /* linear-gradient() 函数用于创建一个线性渐变的 "图像"。 参数1:用角度值指定渐变的方向（或角度）  12点钟方向为0deg*/
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
  }

  .info {
    width: 300px;
    float: left;
  }

  .letter {
    width: 435px;
    float: right;
  }

</style>
