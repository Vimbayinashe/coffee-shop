<template>
  <div>
    <b-button type="is-danger" @click="remove"> - </b-button>
    <span>{{ quantity }}</span>
    <b-button type="is-success" @click="add"> + </b-button>
  </div>
</template>

<script>
export default {
  name: "quantityButton",
//is-success
  data() {
    return {
      quantity: this.myQuantity
    };
  },
  methods: {
    add() {
      this.quantity = this.quantity +1
      this.$emit("addOne", this.quantity);
    },
    remove() {
      if(this.quantity > 0){
        this.quantity = this.quantity -1
      }
      this.$emit("removeOne", this.quantity);
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