import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnChanges{
  @Input() menu:Array<Link> = [];

  constructor(){
    console.log(this.menu);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
