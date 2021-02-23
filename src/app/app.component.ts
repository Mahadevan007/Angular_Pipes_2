import { Component } from '@angular/core';
import { item } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brandName: string = "peter england";
  companyMobileNumber: number = 6435267893;
  totalPrice: number = 23000;

  products: item[] = [
    {
      "type": "shirt",
      "color": "white"
    }, {
      "type": "trousers",
      "color": "blue"
    }, {
      "type": "shoes",
      "color": "brown"
    }, {
      "type": "belt",
      "color": "brown"
    }, {
      "type": "tie",
      "color": "red"
    }, {
      "type": "waist coat",
      "color": "red"
    }, {
      "type": "blazer",
      "color": "blue"
    }, {
      "type": "socks",
      "color": "blue"
    }
  ]
  filteredcolor = '';

}
