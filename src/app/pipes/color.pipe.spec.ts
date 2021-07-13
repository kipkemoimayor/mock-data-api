import { ColorPipe } from './color.pipe';

describe('ColorPipe', () => {
  it('create an instance', () => {
    const pipe = new ColorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if strength is 5', () => {
    let pipe = new ColorPipe();

    expect(pipe.transform(6) === '5 (weak)')
  })

  it('should display strong if strength is 10', () => {
    let pipe = new ColorPipe();

    expect(pipe.transform(10) === '10 (strong)')
  })


});
