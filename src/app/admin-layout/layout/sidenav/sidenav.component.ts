import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  // @ViewChild('sidenav', {static : true}) sidenav: ElementRef;

  // clicked: boolean;

  // constructor() {
  //   this.clicked = this.clicked === undefined ? false : true;
  // }

  // ngOnInit() {
  // }

  // setClicked(val: boolean): void {
  //   this.clicked = val;
  // }

  ngOnInit() {
  }

}
