import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from '../core/models/customer';
import { CustomerParams } from '../core/models/customer-params';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CustomerResponse } from '../core/models/customer-response';

@Injectable()
export class CustomerService {

  constructor(private httpClient: HttpClient) { }


  public getCustomers(customerParams: CustomerParams): Observable<CustomerResponse | any> {
    return this.httpClient.get("https://5e943250c7393c0016de4f4b.mockapi.io/customerapi/customers", {
      params: {
          filter: customerParams.filter,
          order: customerParams.sortDirection,
          sortby: customerParams.sortby,
          pageIndex: customerParams.pageIndex.toString(),
          pageSize: customerParams.pageSize.toString()
      }
    })
    .pipe(
      map((data: any[]) => {
          return this.getAllCustomers(data,customerParams)
      })
    );
  }
  private getAllCustomers(data: any[], params: CustomerParams){
    return {
      total: data.length,
      customers: data.slice((params.pageIndex) * params.pageSize, (params.pageIndex + 1) * params.pageSize)
    }
  }
}