<template>
  <div>
    <div class="post-container">

      <span class="small-span">
        Post Id: {{item.id}}
      </span>

      <span class="small-span">
        Post By: <span class="post-by">{{item.by}}</span>
      </span>

      <span class="item-title">
        Title: {{item.title}}
      </span>

      <a :href="item.url">
        <button class="post-button">
            Link To Post
        </button>
      </a>

      <span class="small-span">
        Last Updated: {{unparsedDateTime | moment('MM/DD/YYYY hh:mm:ss a')}}
      </span>

      <span class="small-span">
        Post Type: {{item.type}}
      </span>

      <span class="small-span">
        Post Score: <span class="post-score">{{item.score}}</span>
      </span>

    </div>
  </div>
</template>;

<script>
//item shape
// __lastUpdated: 1613536789064
// ​​​
// by: "polm23"
// ​​​
// descendants: 66
// ​​​
// id: 26161846
// ​​​
// kids: Array(32) [ 26162427, 26162434, 26162441, … ]
// ​​​
// score: 161
// ​​​
// time: 1613528490
// ​​​
// title: "Done Answering Questions Stack Overflow"
// ​​​
// type: "story"
// ​​​
// url: "https://games.greggman.com/game/done-with-stackoverflow/"
export default {
  props: {
    item: Object
  },
  data() {
    return {
      unparsedDateTime: new Date(this.item.__lastUpdated)
    }
  }
}
</script>

<style scoped>
  .post-container {
    display: flex;
    width: 100%;
    background-color: skyblue;
    color: black;
    flex-direction: column;
    padding: 10px;
  }

  .post-by {
    color: rgb(255, 58, 58);
  }

  .post-score {
    color: rgb(255, 58, 58);
  }

  .item-title {
    font-size: 30px;
  }

  .small-span {
    font-size: 20px;
  }

  .post-button {
    cursor: pointer;
    width: 100px;
    height: 30px;
    border-radius: 10px;
  }
  .post-button:hover {
    background-color: black;
    color: white;
  }
</style>