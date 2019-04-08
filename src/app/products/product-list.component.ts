import {Component } from '@angular/core'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = 'Product List';

    //simple defination 

private demoObject()
{
    let object = {
        name:"Danyal",
        phone:"03005151588"
    }

    console.log("object info",object.name);
    
}



}