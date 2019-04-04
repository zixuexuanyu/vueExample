<template>
  <pull-to
    :bottom-load-method="loadmore"
    @bottom-state-change="stateChange">
    <ul class="list">
      <li v-for="item in dataList">
        {{ item }}
      </li>
    </ul>
    <!-- vue 2.5 use slot-scope -->
    <template slot="bottom-block" slot-scope="props">
      <div class="bottom-load-wrapper">
      <img src="../assets/img/timgss.gif" alt="" style="width:20px;margin-right:10px;">
        <!-- <svg class="icon"
             :class="{
                'icon-arrow': props.state === 'trigger',
                'icon-loading': props.state === 'loading'
             }"
             aria-hidden="true" >
          <use :xlink:href="iconLink"></use>
        </svg> -->
        {{ props.stateText }}
      </div>
    </template>
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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-arrow {
        transition: .2s;
        transform: rotate(180deg);
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
  import PullTo from '@/components/vue-pull-to';

  export default {
    name: 'simple-pull-to-loadmore',
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
      loadmore(loaded) {
        setTimeout(() => {
          this.dataList = this.dataList.concat(this.dataList);
          loaded('done');
        }, 2000);
      },

      stateChange(state) {
        if (state === 'pull' || state === 'trigger') {
          this.iconLink = '#icon-arrow-bottom';
        } else if (state === 'loading') {
          this.iconLink = '#icon-loading';
        } else if (state === 'loaded-done') {
          this.iconLink = '#icon-finish';
        }
      }
    }
  };
</script>
