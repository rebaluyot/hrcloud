import { ClarityPagesPage } from './app.po';

describe('clarity-pages App', () => {
  let page: ClarityPagesPage;

  beforeEach(() => {
    page = new ClarityPagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
