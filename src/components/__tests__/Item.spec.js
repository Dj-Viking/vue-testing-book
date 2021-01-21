import Vue from 'vue';
import Item from '../Item.vue';
import { test, describe, expect } from '@jest/globals';

// jest cannot parse a component by default, it is not plain javascript yet

describe('Item.vue', () => {
  test('sanity test', () => {
    expect(true).toBe(true);
  });

  test('renders "item"', () => {
    // to mount a single file component
    // need to convert copmonent options into a vue constructor
    // creating a Vue constructor with the Vue.extend() method
    const Ctor = Vue.extend(Item);

    // create a vue instance
    const vm = new Ctor().$mount();
    console.log(vm.$el.textContent);

    // access the HTML content
    // toContain looks for substring so it can include 
    // some of the string but not all of it
    expect(vm.$el.textContent).toContain('item');
    // toBe is strict equal
    expect(vm.$el.textContent).toBe('\n  item\n');
  });

  
});
