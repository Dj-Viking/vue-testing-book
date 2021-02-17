import TestComponent from '../TestComponent.vue';
import { describe, test, expect } from '@jest/globals';
import { shallowMount } from '@vue/test-utils';

describe('TestComponent.vue', () => {
  test('renders "Hello World!', () => {
    const wrapper = shallowMount(TestComponent);
    expect(wrapper.text()).toContain("Hello World!");
  });
});