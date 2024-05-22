import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaUsuaria } from 'src/app/model/PessoaUsuaria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrar(novoCadastro: PessoaUsuaria): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/`, novoCadastro);
  }
}
