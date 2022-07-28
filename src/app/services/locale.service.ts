import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocaleProp} from "../models/locale-prop";
import {map, Observable, of} from "rxjs";
import {getFromLocalStorage, setToLocalStorage} from "../helpers/locale-storage-util";

@Injectable({providedIn: 'root'})
export class LocaleService {
  props: LocaleProp = {};
  path = './assets/locale/en_En.json'

  constructor(private http: HttpClient) {
  }

  loadLocale(): Observable<any> {
    const storageData = getFromLocalStorage(this.path);
    if (storageData) {
      this.props = JSON.parse(storageData);
      return of(this.props);
    }
    return this.http.get(this.path).pipe(map((res) => {
      this.props = JSON.stringify(res) as any;
      setToLocalStorage(this.path, res);
    }))
  }
}
