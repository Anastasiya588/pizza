import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, tap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  // public products: ProductType[] = [
  //   {
  //     image: '1.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  //     datetime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     image: '2.png',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     datetime: '2022-12-31 10:00:00'
  //   },
  //   {
  //     image: '3.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     datetime: '2022-12-31 15:10:00'
  //   },
  //   {
  //     image: '4.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  //     datetime: '2022-12-31 15:00:10'
  //   },
  //   {
  //     image: '5.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
  //     datetime: '2022-12-31 20:00:00'
  //   },
  //   {
  //     image: '6.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     datetime: '2022-12-31 12:00:00'
  //   },
  //   {
  //     image: '7.png',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  //     datetime: '2022-01-31 15:50:00'
  //   },
  //   {
  //     image: '',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     datetime: '2022-10-31 15:30:00'
  //   }
  // ];

  constructor(private productService: ProductService, private cartService: CartService,
              private router: Router, private http: HttpClient) {
  }

  public products: ProductType[] = [];
  public loading: boolean = false;

  ngOnInit() {
    // this.lateData = new Promise<string>(function (resolve) {
    //   setTimeout(() => {
    //     resolve('Hello');
    //   }, 3000)
    // });


    // this.products = this.productService.getProducts();
    this.loading = true;
    this.productService.getProducts()
      .pipe(tap(()=>{
          this.loading=false;
      })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            // console.log('next');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }


  public addToCart(title: string): void {
    this.cartService.product = title;
    // this.router.navigate(['/order']);

    //  использование url-параметра
    this.router.navigate(['/order'], {queryParams: {product: title}});
  }
}
