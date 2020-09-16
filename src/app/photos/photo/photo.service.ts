import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photoComment/photo-comment'

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

    upload(description: string, allowComments: boolean, file: File) {

      const formData = new FormData();
      formData.append('description', description);
      formData.append('allowComments', allowComments ? 'true' : 'false');
      formData.append('imageFile', file);

      return this.http.post(Api + '/photos/upload', formData);
    }

    findById(id: number) {

      return this.http.get<Photo>(Api + '/photos/' + id);
    }

    getComments(photoId: number) {

      return this.http.get<PhotoComment[]>(
          Api + '/photos/' + photoId + '/comments');
    }

    addComment(photoId: number, commentText: string) {

      return this.http.post(
          Api + '/photos/' + photoId + '/comments',
          { commentText }
      );
    }
}
