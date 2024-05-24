import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu } from 'src/app/model/Menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  public menu!: Menu[]
  constructor(private menuService: MenuService,private router: Router) { }
ngOnInit(): void {
    this.listarmenu()
}
  listarmenu() {
    this.menuService.getMenu().subscribe((resp) => {
      this.menu =resp
    })
  }

  routeSystem(rota: string) {
    this.router.navigate(['/login']);
  }

}
