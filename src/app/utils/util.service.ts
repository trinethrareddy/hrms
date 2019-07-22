import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  filterActiveItems(list, properyKey, valueKey) {
    return list.filter((val) => {
      return val[properyKey] === valueKey && val.isActive;
    });
  }
  getServices(servicesString: string) {
    if (servicesString) {
      return servicesString.split(',');
    } else {
      return [];
    }
  }
}
