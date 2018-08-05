import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  //A traves de TypeScript agrega una fila por cada carta agregada para votar
  @HostBinding('attr.class') cssClass = 'row';

  @Input() link : Link;

  constructor() { }

  ngOnInit() {
  }

}
