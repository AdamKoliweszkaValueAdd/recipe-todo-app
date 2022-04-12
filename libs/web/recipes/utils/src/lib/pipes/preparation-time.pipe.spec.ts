import { PreparationTimePipe } from './preparation-time.pipe';

describe('PreparationTimePipe', () => {
  it('create an instance', () => {
    const pipe = new PreparationTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "70" to "1h 10m"', () => {
    const pipe = new PreparationTimePipe();
    expect(pipe.transform(70)).toBe('1h 10m');
  });

  it('transforms "50" to "50m"', () => {
    const pipe = new PreparationTimePipe();
    expect(pipe.transform(50)).toBe('0h 50m');
  });

  it('transforms "180" to "3h 0m"', () => {
    const pipe = new PreparationTimePipe();
    expect(pipe.transform(180)).toBe('3h 0m');
  });
});
