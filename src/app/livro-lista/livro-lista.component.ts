import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html'
})
export class LivroListaComponent implements OnInit {
  public livros: Livro[] = [];
  public editoras: Editora[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Catálogo de Livros');
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}