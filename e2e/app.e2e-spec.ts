import { DevheroTasks3Page } from './app.po';

describe('devhero-tasks3 App', function() {
  let page: DevheroTasks3Page;

  beforeEach(() => {
    page = new DevheroTasks3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
