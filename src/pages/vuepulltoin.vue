<template>
  <pull-to
    @infinite-scroll="loadmore">
    <ul class="list">
      <li v-for="item in dataList">
        {{ item }}
      </li>
    </ul>
    <div class="loading-bar">
      <img src="../assets/img/timgss.gif" alt="" style="width:20px;margin-right:10px;">
      <!-- <svg class="icon icon-loading"
           aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg> -->
      加载中...
    </div>
  </pull-to>
</template>

<style scoped >
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .scroller-view {
        flex: 1;
    }

    .slogan {
        margin-top: 50px;   
    }

    .slogan p {
      margin-top: 8px;
      font-size: 16px;
      text-align: center;
    }

    .slogan .icon-face {
      margin-top: 15px;
      width: 100%;
      height: 100px;
    }
    h1 {
        font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
        text-align: center;
        font-size: 35px;
        font-weight: 500;
    }

    .list {
        margin-top: 30px;
        font-size: 16px;

    }
  
    .list li:nth-child(even) {
      background: #eee;
    }

    .list li {
      padding-left: 15px;
      height: 50px;
      line-height: 50px;
      background: #fff;

      
    }
    .list a {
        display: block;
        height: 100%;
    }

    .list .icon-arrow {
        display: inline-block;
        float: right;
        margin-right: 15px;
        height: 100%;
        width: 20px;
        color: #444;
    }
    .bottom-load-wrapper {
        line-height: 50px;
        text-align: center;
    }

    .icon-arrow {
        transition: .2s;
        transform: rotate(180deg);
    }

  .loading-bar {
    height: 40px;
    text-align: center;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>

<script type="text/babel">
  import PullTo from '@/components/vue-pull-to.vue';

  export default {
    name: 'infinite-scroll',
    components: {
      PullTo
    },
    data() {
      return {
        dataList: [
          '(ง •̀_•́)ง', '(´・ω・`) ', '（/TДT)/ ', '>ㅂ<',
          'o(*≧▽≦)ツ', '(≖ ‿ ≖)✧', '(o^∇^o)ﾉ', ' (´・ω・)ﾉ',
          '(´・ω・`)', 'ヽ(･ω･｡)ﾉ', '(｀･ω･´)', '╰(*°▽°*)╯',
          '╮(￣▽￣)╭', '(￣▽￣)~*', '(⊙ˍ⊙)', '(￣0 ￣)y'
        ],
        iconLink: ''
      };
    },
    methods: {
      loadmore() {
        setTimeout(() => {
          this.dataList = this.dataList.concat(this.dataList);
        }, 500);
      }
    }
  };
</script>
