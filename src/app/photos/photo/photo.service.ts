import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Photo } from '../photo/photo';

const Api = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})



export class PhotoService {

  constructor(private http: HttpClient) {}

   listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(Api + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());
   console.log(Api + '/' + userName + '/photos', { params });
    return this.http
      .get<Photo[]>(Api + '/' + userName + '/photos', { params });
  }

}
