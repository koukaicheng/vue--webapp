<template>
  <span class="icon" :class="add[type]"></span>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      type: {
        type: Number
      },
      size: {
        type: Number
      }
    },
    created() {
      this.classMap = ['decrease','discount','special','invoice','guarantee'];
    },
    computed: {
      add() {
        let classMap = ['decrease_','discount_','special_','invoice_','guarantee_'];
        let arr = [];
        for (let i = 0; i < classMap.length; i++) {
            arr.push(classMap[i] + this.size);
        };
        return arr;
      }
    }
  };
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixsin.styl"
  .icon
    display: inline-block
    width: 16px
    height: 16px
    vertical-align: top
    margin-right: 6px
    background-size: 16px 16px
    background-repeat: no-repeat
    &.decrease_1
      bg-image('decrease_1')
    &.decrease_2
      bg-image('decrease_2')
    &.decrease_3
      bg-image('decrease_3')
    &.decrease_4
      bg-image('decrease_4')
    &.discount_1
      bg-image('discount_1')
    &.discount_2
      bg-image('discount_2')
    &.discount_3
      bg-image('discount_3')
    &.discount_4
      bg-image('discount_4')
    &.guarantee_1
      bg-image('guarantee_1')
    &.guarantee_2
      bg-image('guarantee_2')
    &.guarantee_3
      bg-image('guarantee_3')
    &.guarantee_4
      bg-image('guarantee_4')
    &.special_1
      bg-image('special_1')
    &.special_2
      bg-image('special_2')
    &.special_3
      bg-image('special_3')
    &.special_4
      bg-image('special_4')
    &.invoice_1
      bg-image('invoice_1')
    &.invoice_2
      bg-image('invoice_2')
    &.invoice_3
      bg-image('invoice_3')
    &.invoice_4
      bg-image('invoice_4')


</style>
