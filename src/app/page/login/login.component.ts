import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticacaoService } from 'src/app/core/services/authenticacao.service';
import { SwalUtils } from 'src/app/utils/SwalUtils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticacaoService,
    private router: Router,
    private swall: SwalUtils
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;
      this.authService.users(1).subscribe({
        next: (value) => {
          this.router.navigateByUrl('home');
          this.loginForm.reset();
        },
        error: (err) => {
          //comentar linha abaixo e descomentar as outras
          this.router.navigateByUrl('/home');
          // this.swall.showGenericWaring('Usuário ou senha incorreos!');
          // console.log('Problema na autenticação', err);
        },
      });
    }
  }
}
