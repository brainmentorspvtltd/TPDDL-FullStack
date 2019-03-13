import { SpamoduleModule } from './spamodule.module';

describe('SpamoduleModule', () => {
  let spamoduleModule: SpamoduleModule;

  beforeEach(() => {
    spamoduleModule = new SpamoduleModule();
  });

  it('should create an instance', () => {
    expect(spamoduleModule).toBeTruthy();
  });
});
