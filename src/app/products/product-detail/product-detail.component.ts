import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  //selector: 'pm-product-detail', // No need for a selector since we are not gonna nest it in another component
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  currentProductId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.currentProductId = this.route.snapshot.paramMap.get('id');
    console.log(this.currentProductId);
  }



  ngOnInit(): void {

    let currentId = Number(this.currentProductId);

    this.productService.getProduct(currentId).subscribe(value => {
      this.product = value;
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}

