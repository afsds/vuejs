<template>
  <div class="calculator">
    <input type="number" v-model.number="num1" placeholder="Número 1">
    <select v-model="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input type="number" v-model.number="num2" placeholder="Número 2">
    <input type="text" :value="result" placeholder="Resultado" readonly>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: '+',
      result: 0
    }
  },
  watch: {
    num1: 'calculate',
    num2: 'calculate',
    operator: 'calculate'
  },
  methods: {
    calculate() {
      switch(this.operator) {
        case '+':
          this.result = parseFloat(this.num1) + parseFloat(this.num2);
          break;
        case '-':
          this.result = parseFloat(this.num1) - parseFloat(this.num2);
          break;
        case '*':
          this.result = parseFloat(this.num1) * parseFloat(this.num2);
          break;
        case '/':
          this.result = parseFloat(this.num1) / parseFloat(this.num2);
          break;
        default:
          this.result = 0;
      }
    }
  }
}
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.calculator input[type="number"],
.calculator select,
.calculator input[type="text"] {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}
</style>
