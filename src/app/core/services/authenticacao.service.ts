import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaUsuaria } from 'src/app/model/PessoaUsuaria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticacaoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  autenticar(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, { email, senha });
  }
  users(email: string): Observable<PessoaUsuaria[]> {
   // https://api-fake-k-learn.vercel.app/user?email=aried@klearn.com
    return this.http.get<PessoaUsuaria[]>(`${this.apiUrl}/user?email=${email}`);
  }
}
