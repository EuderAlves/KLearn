import { Component } from '@angular/core';
import { FormularioService } from '../core/services/formulario.service';
import { PessoaUsuaria } from '../model/PessoaUsuaria.model';
import { CadastroService } from '../core/services/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();
    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro);
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err);
        },
      });
    }
  }
}
