import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable(
  {
  providedIn: 'root'
}
)
export class ProductService {
  private products: ProductType[] = [];


  // private products: ProductType[]= [
  //   {
  //     id: 1,
  //     image: '1.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  //     datetime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     id: 2,
  //     image: '2.png',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     datetime: '2022-12-31 10:00:00'
  //   },
  //   {
  //     id: 3,
  //     image: '3.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     datetime: '2022-12-31 15:10:00'
  //   },
  //   {
  //     id: 4,
  //     image: '4.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  //     datetime: '2022-12-31 15:00:10'
  //   },
  //   {
  //     id: 5,
  //     image: '5.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
  //     datetime: '2022-12-31 20:00:00'
  //   },
  //   {
  //     id: 6,
  //     image: '6.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     datetime: '2022-12-31 12:00:00'
  //   },
  //   {
  //     id: 7,
  //     image: '7.png',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  //     datetime: '2022-01-31 15:50:00'
  //   },
  //   {
  //     id: 8,
  //     image: '',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     datetime: '2022-10-31 15:30:00'
  //   }
  // ];

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<ProductType[]> {
    // let params = new HttpParams();
    // params = params.set('extraField', 1)
    // return this.products;
    return this.http.get<ProductType[]>(environment.apiURL+'/pizzas', {
      // return this.http.get<{ data: ProductType[] }>('https://testologia.ru/pizzas', {
      // observe: 'response',
      // headers: new HttpHeaders({
      //   Authorization: 'auth-token'
      // }),
      // params: params,
      // responseType: 'text'
    })
    // .pipe(
    //   // tap((result) => {
    //   //   //Здесь можно делать любую стороннюю операцию без затрагивания основного потока данных
    //   //   console.log(result);
    //   // }),
    //   map((result) => {
    //     return result.data
    //     // return (result.body ? result.body.data : [])
    //   }),
    // catchError(error => {
    //   // throw new Error('omg');
    //
    //   //Создаем новый массив продуктов не завершая observable
    //  return of([]);
    // }),
    // Повторяем запрос 3 раза
    //   retry(3)
    // );
  }

  getProduct(id: number): Observable<ProductType> | undefined {
    return this.http.get<ProductType>(environment.apiURL+`pizzas?id=${id}`);
    //Ajax
    // return this.products.find(item => (item.id === id));
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{ success: boolean, message?: string }>(environment.apiURL+`order-pizza`, data);

  }
}
