import { PWAPage } from './app.po';

describe('pwa App', function() {
  let page: PWAPage;

  beforeEach(() => {
    page = new PWAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
