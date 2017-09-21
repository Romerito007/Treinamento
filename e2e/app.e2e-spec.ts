import { ProjetoFilmesPage } from './app.po';

describe('projeto-filmes App', () => {
  let page: ProjetoFilmesPage;

  beforeEach(() => {
    page = new ProjetoFilmesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
