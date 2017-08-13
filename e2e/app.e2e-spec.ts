import { POCPage } from './app.po';

describe('poc App', () => {
  let page: POCPage;

  beforeEach(() => {
    page = new POCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
