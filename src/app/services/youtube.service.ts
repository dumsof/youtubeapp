import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable()
export class YoutubeService {

  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDx-xX0OId8BPqCLsZfcqsew4vgwoUAlhs';

  constructor(public http: HttpClient) { }

  getVidoes() {

    /* permite crear parametros para la url */
    const parametro = new HttpParams();
    parametro.set('part', 'snippet');
    parametro.set('maxResults', '10');
    parametro.set('playlistId', this.playlist);
    parametro.set('key', this.apiKey);

    const url = `${this.youtubeUrl}/playlistItems`;
    this.http.get(url, { params: parametro }).pipe(
      map(respuesta => {
        console.log(respuesta);
      }));
  }
}
