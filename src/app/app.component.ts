import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html'
  template: `
  <div><h1 innerText={{getTitle()}}></h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
  private getTitle(): string{
    return this.pageTitle;  
  }
}
