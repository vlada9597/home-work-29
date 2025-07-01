const { ageClassification, weekFn } = require('./functions');

describe('ageClassification', () => {
  test('повертає null для значень понад 122', () => {
    expect(ageClassification(122.01)).toBeNull();
    expect(ageClassification(150)).toBeNull();
  });

  test('повертає null для нульового або від’ємного віку', () => {
    expect(ageClassification(-1)).toBeNull();
    expect(ageClassification(0)).toBeNull();
  });

  test('класифікує правильно для всіх меж', () => {
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
    expect(ageClassification(65.1)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
  });
});

describe('weekFn', () => {
  test('повертає назви днів тижня для чисел 1–7', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe('П\'ятниця');
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
  });

  test('повертає null для неправильних значень', () => {
    expect(weekFn(0)).toBeNull();
    expect(weekFn(8)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
    expect(weekFn(null)).toBeNull();
    expect(weekFn(undefined)).toBeNull();
  });
});
