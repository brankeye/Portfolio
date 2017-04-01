import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItem: HTMLElement;

  constructor(
    private _route: ActivatedRoute) { }

  getCurrentRoute() {
    return this._route.snapshot.firstChild.url[0].path;
  }

  ngOnInit() {
    const self = this;
    const mainNavList = document.getElementById('main-nav-list');
    const collection = [].slice.call(mainNavList.children);
    document.addEventListener('DOMContentLoaded', function(event) {
      const pathName = self.getCurrentRoute();
      for (const element of collection) {
        const tempNavItem = element.children[0];
        if (tempNavItem.innerHTML.toLocaleLowerCase() === pathName) {
          self.navItem = tempNavItem;
          self.navItem.classList.add('selected-nav');
          self.navItem.classList.add('lower-border');
        }
      }
    });
    for (const element of collection) {
      const link = element.children[0];
      link.addEventListener('click', function() {
        if (self.navItem) {
          self.navItem.classList.remove('lower-border');
          self.navItem.classList.remove('selected-nav');
        }
        self.navItem = link;
        self.navItem.classList.add('selected-nav');
        self.navItem.classList.add('lower-border');
      });
    }
  }

}
