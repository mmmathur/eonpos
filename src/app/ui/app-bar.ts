import { Component } from '@angular/core';

@Component({
    selector: 'app-bar',
    styles: [`
        .app-bar {
        height: 65px;
        padding: 5px 30px;
        background-color: #00BCD4;
        }
        .logo {
        color: white;
        font-size: 30px;
        font-weight: 300;
        cursor: pointer;
        }
        .link {
        color: white;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer; 
        }
        .user {
            color: black;
            font-size: 14 px;
            font-weight: 400;
            cursor: default;
        }
    `],
    template: `
    <header class="app-bar row middle-xs">
    <span class="logo col-xs-10">
        EON POS
    </span>
    <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
        <span class="user">Welcome Jon Doe</span>
        <span class="link" [routerLink]="['/login']">Signout</span>
        </div>
    </nav>
    </header>
    `

})

export class AppBar {}