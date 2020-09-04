import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Product } from './models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const products: Product[] = [
      { id: 1, name: 'product1', description: 'dog biscuits', quantity: 5, category: 'dog-food', image: 'https://www.google.com/search?q=dog+food+image&rlz=1C1GCEU_en-gbIN820IN820&sxsrf=ALeKk000rl1G0-LIdQIILh5Yar4WQQnRtA:1599197641695&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjBk--6487rAhVmwjgGHcwFAIgQ_AUoAXoECA0QAw&biw=1280&bih=578#imgrc=dPNOcOPiV_CPkM' },
      { id: 2, name: 'product2', description: 'dog biscuits royal', quantity: 5, category: 'dog-food', image: 'image' },
      { id: 3, name: 'product3', description: 'dog biscuits drools', quantity: 5, category: 'dog-food', image: 'image' },
      { id: 4, name: 'product4', description: 'dog chain', quantity: 5, category: 'dog-toy', image: 'image' },
      { id: 5, name: 'product5', description: 'dog chew toy', quantity: 0, category: 'dog-toy', image: 'image' }
    ];
    return {products};
  }
}
