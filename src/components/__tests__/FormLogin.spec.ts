import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FormLogin from '../FormLogin.vue'

describe('FormLogin', () => {
  it('renders properly', () => {
    const wrapper = mount(FormLogin, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
