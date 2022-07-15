<template>
  <div id="product-list-one">
    <h2>Product List one</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>

    <input type="text" v-model="amount" />
    <button @click="reducePrice(amount)">Reduce Price</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
  methods: {
    reducePrice(amount) {
      this.$store.dispatch("reducePrice", amount);
    },
  },
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0, 0, 2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#procduct-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>