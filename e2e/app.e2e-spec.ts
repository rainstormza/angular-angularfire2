import { ProplistingsMaster4Page } from './app.po';

describe('proplistings-master4 App', () => {
  let page: ProplistingsMaster4Page;

  beforeEach(() => {
    page = new ProplistingsMaster4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
