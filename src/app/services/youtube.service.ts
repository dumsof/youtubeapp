import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class YoutubeService {
  youtubeUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
  apiKey = 'AIzaSyDx-xX0OId8BPqCLsZfcqsew4vgwoUAlhs';
  constructor(public http: HttpClient) { }

  getVidoes() {

  }
}
