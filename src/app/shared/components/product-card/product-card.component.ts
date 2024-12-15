import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  providers: [CartProductService],
})
// export class ProductCardComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class ProductCardComponent {

  @Input() product: ProductType;

  // @Input()
  // get product(): ProductType {
  //   return this._product
  // };
  //
  // set product(param: ProductType) {
  //   param.title = param.title.toUpperCase();
  //   this._product = param;
  // }
  //
  // private _product: ProductType;

  // @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: '',
    }
    // this._product = {
    //   image: '',
    //   title: '',
    //   description: ''
    // }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes)
  // }
  //
  // ngOnInit(): void {
  //   console.log("ngOnInit")
  // }
  //
  // ngDoCheck(): void {
  //   console.log("ngDoCheck")
  // }
  //
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit")
  // }
  //
  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked")
  // }
  //
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit',this.elem)
  // }
  //
  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked")
  // }
  //
  // ngOnDestroy() {
  //   console.log("ngOnDestroy")
  // }

  // addProductToCart(product: ProductType) {
  //   this.addToCartEvent.emit(this.product);
  // }

  addProductToCart(): void {
    // addProductToCart(title: string):void {
    // this.addToCartEvent.emit(title);
    this.cartProductService.count++;
    this.addToCartEvent.emit(this.titleComponent.toUpper());
  }
}

