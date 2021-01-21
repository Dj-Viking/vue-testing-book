import Vue from 'vue';
import Item from '../Item.vue';
import { test, describe, expect } from '@jest/globals'

//jest cannot parse a component by default, it is not plain javascript yet

describe('Item.vue', () => {
  test('sanity test', () => {
    expect(true).toBe(true);
    console.log(Item);
  });
}); 