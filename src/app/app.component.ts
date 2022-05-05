import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpCurso';
  constructor() {
  type HttpResponse = {code: number, data: string};
  const observable = new Observable<HttpResponse>(subscriber => { 
    console.log("inside subscriber");
    subscriber.next({code: 200, data: 'this is data 1'});
    subscriber.next({code: 200, data: 'this is data 2'});
    subscriber.next({code: 200, data: 'this is data 3'});

    setTimeout(() => {
      subscriber.next({code: 200, data: 'this is data more data...'});
      subscriber.complete();
    }, 3 * 1000);
  });

  observable.subscribe({
    next(response: HttpResponse) {
      console.log('got response: ', response);
    },
    error(error: any) {
      console.log('something wrong occurred', error);
    },
    complete(){}
  })
  }
}
