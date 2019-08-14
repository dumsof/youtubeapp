import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import 'rxjs/Rx'; */


@Injectable()
export class YoutubeService {
  youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  apiKey = 'AIzaSyDx-xX0OId8BPqCLsZfcqsew4vgwoUAlhs';
  constructor(public http: HttpClient) { }

  getVidoes() {
    const url = `${this.youtubeUrl}/playlistItems`;
   /*  this.http.get(url).map(respuesta => {

    })); */
  }
}
