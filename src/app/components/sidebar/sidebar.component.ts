import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isCollapsed: boolean = true;
  isLoggedIn: boolean = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }
}
