import { Component } from '@angular/core';

@Component({
    selector: 'search-bar',
    styles: [`
            
    .search-box {
        width: 130px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: white;
        background-image: url('../../../assets/icon/search.png');
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding: 12px 20px 12px 40px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
    }

    /* When the input field gets focus, change its width to 100% */
    .search-box:focus {
        width: 100%;
    }

    `],
    template: `
    <input class="search-box" type="text" name="search" placeholder="Search..">
    `

})

export class SearchBarInput{}
