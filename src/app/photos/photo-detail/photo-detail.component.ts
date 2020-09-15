import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { PhotoComment } from '../photo/photoComment/photo-comment';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  photo$: Observable<Photo>
  comments$: Observable<PhotoComment[]>;

  constructor(
      private route: ActivatedRoute,
      private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId)
    this.comments$ = this.photoService.getComments(photoId);
  }

}
