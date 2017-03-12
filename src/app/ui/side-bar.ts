import { Component } from '@angular/core';

@Component({
  selector: 'eon-side-bar',
  styles: [`
  .app-header {
    align-items: center;
    background: #3f51b5;
    box-shadow: 0 0.1em 1.5em rgba($dark-grey, 0.5);
    color: $white;
    display: flex;
    }
    .header-bar {
        width:100%;
    }
    .toggle-menu {
        background: transparent;
        border: 0.15rem solid #fff;
        border-left: 0;
        border-right: 0;
        font-size: 0;
        height: 1.5rem;
        margin-right: 1rem;
        position: relative;
        width: 2rem;
        &::after {
            background: $white;
            content: '';
            height: 0.15rem;
            left: 0;
            margin-top: -0.075rem;
            position: absolute;
            top: 50%;
            width: 100%;
            }
    }

    .toggle-sidebar {
        padding: 2em 1em;

        &.ng-sidebar--over {
            box-shadow: 0 0 2.5em rgba(85, 85, 85, 0.5);
        }
    }
`],

  template: `
    <!-- Container for sidebar(s) + page content -->
    <ng-sidebar-container>

      <!-- A sidebar -->
      <ng-sidebar 
      [(opened)]="_opened"
      [mode]="'push'"
      [position]="'left'"
      [closeOnClickOutside]=true
      [sidebarClass]="'toggle-sidebar'">
        <p>Menu item</p>
        <a closeSidebar>Closes the sidebar</a>
        <md-menu #menu="mdMenu">
        <button md-menu-item>
        <span>Sales Report</span>
        </button>
        <button md-menu-item>
        <span>Product List</span>
        </button>
        <button md-menu-item>
        <span>Gas Price</span>
        </button>
        <button md-menu-item>
        <span>Gas Sales</span>
        </button>
        
    </md-menu>
      </ng-sidebar>

      <!-- Page content -->

      <header class="app-header">
        <app-bar class="header-bar" (onToggle)="_toggleSidebar()"></app-bar>
      </header>

      <div class="col-md-12">
        <ngb-tabset>
        <ngb-tab>
            <template ngbTabTitle>
            <a [routerLink]=" ['./home'] " routerLinkActive="active">
                Sales Report
                </a>
            </template>
            <template ngbTabContent>
            <h3>Sales Report content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab>
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            Product List
            </a>
            </template>
            <template ngbTabContent>
            <h3>Product List content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab label="Gas Price">
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            Gas Price
            </a>
            </template>
            <template ngbTabContent>
            <h3>Gas Price content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab>
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            Gas Sales
            </a>
            </template>
            <template ngbTabContent>
            <h3>Gas Sales content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab>
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            Stock Managment
            </a>
            </template>
            <template ngbTabContent>
            <h3>Stock Managment content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab>
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            Reports
            </a>
            </template>
            <template ngbTabContent>
            <h3>Reports content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab>
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            Profit Analysis
            </a>
            </template>
            <template ngbTabContent>
            <h3>Profit Analysis content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab>
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            Promotions
            </a>
            </template>
            <template ngbTabContent>
            <h3>Promotions content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        <ngb-tab>
            <template ngbTabTitle> 
            <a [routerLink]=" ['./detail'] " routerLinkActive="active">
            User Managment
            </a>
            </template>
            <template ngbTabContent>
            <h3>User Managment content</h3>
            <p>...</p>
            </template>
        </ngb-tab>
        </ngb-tabset>
        </div>

        <router-outlet></router-outlet>

    </ng-sidebar-container>
  `
})
export class EonSideBar {
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}