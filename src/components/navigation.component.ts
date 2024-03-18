import { NgComponentOutlet, AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";

@Component ({
    selector: 'app-root',
    standalone: true,
    imports: [NgComponentOutlet, AsyncPipe],
    template: `
    <router-outlet>
    <a routerLink = "/random">Test</a>
  </router-outlet>
    `,
})
export class NavigationComponent {

}