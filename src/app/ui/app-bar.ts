import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bar',
    template: `
    <div>
    <md-toolbar color="primary">
    <button class="app-icon-button" (click)="toggleMenu()">
        <i class="material-icons app-toolbar-menu">menu</i>
    </button>
    <span class="text-center">EON POS</span>
    <span class="app-toolbar-filler"></span>
    <search-bar></search-bar>
    <span class="app-toolbar-filler"></span>
    <button md-icon-button [md-menu-trigger-for]="menu">
      <md-icon>more_vert</md-icon>
    </button>
    
  </md-toolbar>
  <md-menu x-position="before" #menu="mdMenu">
    <button md-menu-item disabled>
    <md-icon> person </md-icon>
    <span>Welcome Jon Doe</span>
    </button>
    <button md-menu-item [routerLink]="['/login']">
    <span>Signout</span>
    </button>
  </md-menu>
  </div>
    `

})

export class AppBar {
  @Output() onToggle = new EventEmitter();

  toggleMenu() {
    this.onToggle.emit();
  }
}