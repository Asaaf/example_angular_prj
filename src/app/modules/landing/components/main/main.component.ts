import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  menuList: Array<Link> = new Array();

  constructor() {
  }

  ngOnInit(): void {
    let link1 = new Link(0, "Iniciar sesión", "login");
    let link2 = new Link(1, "Registro", "registry");
    this.menuList = [
      link1,
      link2
    ];
  }
  
}
