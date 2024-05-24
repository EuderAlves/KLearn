import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/model/Menu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.apiUrl}/menu`)

  }
}
