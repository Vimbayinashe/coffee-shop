<template>
  <div>
    <input value="-" v-on:click="remove" type="button" />
    <span>{{ quantity }}</span>
    <input value="+" v-on:click="add" type="button" />
  </div>
</template>

<script>
export default {
  name: "quantityButton",

  data() {
    return {
      quantity: this.myQuantity
    };
  },
  methods: {
    add() {
      this.quantity = this.quantity +1
      this.$emit("addOne");
    },
    remove() {
      if(this.quantity > 0){
        this.quantity = this.quantity -1
      }
      this.$emit("removeOne");
    }
  },

  props: {
    myQuantity: Number
  }
};
</script>

<style scoped>
span{
  padding: 0.5em;
}
</style>