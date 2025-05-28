import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Automação na Prática: Do Conceito ao Código',
      resumo: 'Principais técnicas e ferramentas para automatizar tarefas rotineiras, integrar sistemas e otimizar fluxos de trabalho, Ideal para profissionais que desejam soluções inteligentes.',
      autores: ['Edson Victor']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Dominando Scripts e Rotinas de Automação',
      resumo: 'Criar scripts poderosos, automatizar processos em servidores, aplicações web e rotinas administrativas com clareza e eficiência.',
      autores: ['Edson Victor']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Automação Web com JavaScript e APIs',
      resumo: 'Explore como automatizar tarefas online utilizando JavaScript, APIs REST e ferramentas modernas como Puppeteer e Axios. Uma leitura essencial para quem busca eficiência em rotinas de scraping, testes e integrações entre sistemas web.',
      autores: ['Edson Victor']
    },
    {
      codigo: 4,
      codEditora: 4,
      titulo: 'Inteligência Operacional: Automatizando Processos Empresariais',
      resumo: 'Aprenda a mapear, modelar e automatizar processos empresariais críticos com foco em produtividade e redução de erros. Inclui práticas com RPA, workflows e integração entre plataformas diversas.',
      autores: ['Edson Victor']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}