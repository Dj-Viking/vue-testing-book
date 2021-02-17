<template>
  <div>
    <ul 
      v-for="(item, i) in items"
      :key="i"
    >
    
      <span>Item # {{i + 1}}</span>
      <li>
        <Item :item="item" />
      </li>
      
    </ul>
  </div>
</template>

<script>
import Item from '../components/Item.vue';
// import api from '../api/api';

// Warning: @vue/test-utils should use version 1.0.0-beta.20. To install, use:
// npm install --save-dev @vue/test-utils@1.0.0-beta.20
//

export default {
  components: {
    Item
  },
  props: {
    items: Array
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
  }
  span {
    font-weight: bold;
  }
</style>
