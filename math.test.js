import { expect, test } from 'vitest'
import { add, getFormattedDate } from './math'

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
})

test('return date in correct format', () => {
    const date = getFormattedDate();

    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})