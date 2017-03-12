import { Component } from '@angular/core';

@Component({
    selector: 'search-bar',
    styles: [`
        .add-on .input-group-btn > .btn {
        border-left-width:0;left:-2px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        /* stop the glowing blue shadow */
        .add-on .form-control:focus {
        box-shadow:none;
        -webkit-box-shadow:none; 
        border-color:#cccccc; 
        width:100%
        }
        .form-control{
          -webkit-transition: width 0.4s ease-in-out;
          transition: width 0.4s ease-in-out;
        }
    `],
    template: `
    <div class="navbar-form inline-display" role="search">
    <div class="input-group add-on">
      <input class="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text">
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
      </div>
    </div>
  </div>
    `

})

export class SearchBar{}
