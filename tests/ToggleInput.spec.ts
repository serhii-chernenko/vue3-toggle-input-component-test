import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToggleInput from '../src/components/ToggleInput.vue'

describe('the toggle input component', () => {
    it('toggle the v-model value between true and false when clicked', async () => {
        const checkbox = mount(ToggleInput, {
            attachTo: document.body,
            props: {
                modelValue: false,
                modelModifiers: {
                    binary: true,
                },
            },
        })
        let counter: number = 0

        await checkbox.trigger('click')
        await checkbox.trigger('click')

        const emittedValues = () => {
            const emitted = checkbox.emitted('update:modelValue')[counter][0]

            counter++

            return emitted
        }

        expect(emittedValues()).toBe(1)
        expect(emittedValues()).toBe(0)
    })
})
