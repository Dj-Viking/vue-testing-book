import Vue from 'vue';
import Item from '../Item.vue';
import TestComponent from '../TestComponent.vue';
import { test, describe, expect } from '@jest/globals';
import { mount, shallowMount } from '@vue/test-utils';

// jest cannot parse a component by default, it is not plain javascript yet

describe('Item.vue', () => {
  test('sanity test', () => {
    expect(true).toBe(true);
  });

  test('renders "item" using Vue Constructor', () => {
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

  test('renders "item" with wrapper', () => {
    const wrapper = mount(Item);

    expect(wrapper.vm.$el.textContent).toContain('item');
    // same as above
    expect(wrapper.text()).toContain('item');
  });
  
  test('renders "item" with shallowMount', () => {
    //using shallow mount for remainder of the book
    // shallow mount allows to test the rendered output of a component
    // but not the rendered output of a child component
    const shallowWrapper = shallowMount(Item);
    debugger;
    expect(shallowWrapper.text()).toContain('item');
  });
});