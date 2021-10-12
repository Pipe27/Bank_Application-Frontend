import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  documentTypeEndpoint = `${environment.apiUrl}/document-type/api/v1/document-type`;

  constructor(public httpClient: HttpClient) { }

  findAll(): Observable<DocumentType[]> {
    return this.httpClient.get<DocumentType[]>(this.documentTypeEndpoint);
  }

  findById(id: number): Observable<DocumentType[]>{
    return this.httpClient.get<DocumentType[]>(`${this.documentTypeEndpoint}/${id}`);
  }


}

