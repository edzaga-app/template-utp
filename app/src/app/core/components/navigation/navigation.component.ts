import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'utp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  events: string[] = [];
  opened!: boolean;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  constructor() { }

  ngOnInit(): void {
  }

}
