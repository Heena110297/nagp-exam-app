import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
import { CartComponent } from '../cart/cart.component';
import { Cart} from '../models/cart.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  id: any;
  product: Product;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productsService: DataService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getProductDetail(this.id);
    console.log(this.product);
  }

  getProductDetail(id) {
    return this.productsService.getProduct(id).subscribe((result: Product) => {
      this.product = result;
    });
  }

  addToCart() {
    if (this.product.quantity > 1) {

      //if(!(localStorage.getItem('cart')===null && !localStorage.getItem('cart') ===undefined);
      localStorage.setItem('cart', JSON.stringify({}))
      this.toastrService.success('Product added to cart');
      this.router.navigate(['cart']);

    }
    else {
      this.toastrService.error('Product not available');
    }
  }


}
