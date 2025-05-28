import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'CodeFlow Press' },
    { codEditora: 2, nome: 'Automation Lab' },
    { codEditora: 3, nome: 'NextScript Editora' },
    { codEditora: 4, nome: 'Robotic Minds' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora = (codEditora: number): string => {
    return this.editoras.find(e => e.codEditora === codEditora)?.nome ?? '';
  };
}