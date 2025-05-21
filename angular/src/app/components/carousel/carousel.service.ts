// src/app/carousel/galeria.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CarouselItem } from './carousel.model';

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    private apiUrl = `${environment.CAROUSEL}`;

    constructor(private http: HttpClient) { }

    getGalerias(): Observable<{ data: any[] }> {
        const response = this.http.get<{ data: any[] }>(this.apiUrl);
        return response;
    }
}
