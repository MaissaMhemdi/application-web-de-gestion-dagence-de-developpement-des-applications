import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private apiUrl = 'http://localhost:3000/clients';


  constructor(private http: HttpClient) { }

  /**
   * Get all categories
   * @returns Observable<categories[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a course with the given id
   * @param id : course id
   * @returns Observable<Course>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new client
   * @param categorie new client to create
   */
  create(client: any) {
    return this.http.post(this.apiUrl, client);
  }

  /**
   * Update a client with the given id
   * @param id client id to update
   * @param client new client data
   */
  update(id: string, client: any) {
    return this.http.put(this.apiUrl + '/' + id, client);
  }

  /**
   * Delete a client with the given id
   * @param id client id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
