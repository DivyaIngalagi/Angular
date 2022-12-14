import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todosResponse;

  constructor(private httpClient: HttpClient) {}

  onClickBasic() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe();
  }

  onClickLog() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/5')
      .subscribe((result) => {
        this.todosResponse = result;
      });
  }
}

