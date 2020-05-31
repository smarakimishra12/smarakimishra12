import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from '../../Constants/constants';
import { handleError } from '../../Constants/service-helper';
import { catchError } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  updateUser(data) {
    return this.http.post( 'http://localhost:3000/regnewuser', data)
    .pipe(catchError(handleError));
  }
}
