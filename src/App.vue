<template>
  <ItemList :items="items" />
</template>

<script>
import ItemList from './views/ItemList.vue'

export default {
  components: {
    ItemList
  },
  data() {
    return {
      items: window.items
    }
  }
}
</script>
