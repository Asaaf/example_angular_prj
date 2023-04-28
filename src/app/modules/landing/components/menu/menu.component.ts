import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu:Array<Link> = [];
}
