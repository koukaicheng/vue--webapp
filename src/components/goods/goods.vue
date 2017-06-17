<template>
  <div class="goods">
    <div class="menu-wrapper" v-el:menu-wrapper>
      <ul>
        <li v-for="item in goods" class="menu-item" :class="{'current':currentIndex===$index}" @click="selectMenu($index,$event)">
          <span class="text border-1px" >
            <icon v-show="item.type>0" :type="item.type" :size="2"></icon>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" v-el:foods-wrapper>
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food,$event)"  v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <price :food="food"></price>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart v-ref:shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
  <food :food="selectedFood" v-ref:food></food>
</template>

<script type="text/ecmascript-6">
  import icon from 'components/icon/icon';
  import Bscroll from 'better-scroll';
  import shopcart from 'components/shopcart/shopcart';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import food from 'components/food/food';
  import price from 'components/price/price';
 const ERR_OK = 0;

 export default{
     props: {
       seller: {
         type: Object
       }
     },
     data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      };
     },
     computed: {
       currentIndex() {
           for (let i = 0; i < this.listHeight.length; i++) {
             let height1 = this.listHeight[i];
             let height2 = this.listHeight[i + 1];
             if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                 return i;
             }
           }
         return 0;
       },
       selectFoods() {
          let foods = [];
          this.goods.forEach((good) => {
              good.foods.forEach((food) => {
                if (food.count) {
                  foods.push(food);
                }
              });
          });
          return foods;
       }
     },
     created() {
       this.$http.get('/api/goods').then((response) => {
         response = response.body;
         if (response.errno === ERR_OK) {
           this.goods = response.data;
           this.$nextTick(() => {
             this._initScroll();
             this._calculateHeight();
           });
         }
       });
     },
    methods: {
      selectMenu(index,event) {
       if (!event._constructed) {
           return;
       }
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      _initScroll() {
        this.menuScroll = new Bscroll(this.$els.menuWrapper, {
            click: true
        });
        this.foodsScroll = new Bscroll(this.$els.foodsWrapper, {
            click: true,
            probeType: 3,
            preventDefault: true,
            preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
          let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
          let height = 0;
          this.listHeight.push(height);
          for (let i = 0; i < foodList.length; i++) {
           let item = foodList[i];
           height += item.clientHeight;
           this.listHeight.push(height);
          };
      },
      _drop(target) {
          // 体验优化，异步下执行动画
          this.$nextTick(() => {
            this.$refs.shopcart.drop(target);
          });
      },
      selectFood(food,event) {
        if (!event._constructed) {
          return;
        }
        this.selectedFood = food;
        this.$refs.food.show();
      }
    },
    components: {
      icon,
      shopcart,
      cartcontrol,
      food,
      price
    },
   events: {
     'cart.add'(target) {
       this._drop(target);
     }
   }
 };
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixsin.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        &.current
          position: relative
          font-size: 12px
          margin-top: -1px
          z-index: 10
          background: #fff
          font-weight: 700
          .text
            border-none()
        .text
          display: table-cell
          width: 56px
          border-1px(rgba(7,17,27,0.1))
          vertical-align: middle
          font-size: 12px
          .icon
            margin-right: 2px
    .foods-wrapper
      flex 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147,153,159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7,17,27,0.1))
        &:list-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .desc, .extra
            font-size: 10px
            color: rgb(147, 153, 159)
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              line-height: 10px
              margin-right: 12px
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
