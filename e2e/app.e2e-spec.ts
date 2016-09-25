import { Ng2cliCodeshipPage } from './app.po';

describe('ng2cli-codeship App', function() {
  let page: Ng2cliCodeshipPage;

  beforeEach(() => {
    page = new Ng2cliCodeshipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
