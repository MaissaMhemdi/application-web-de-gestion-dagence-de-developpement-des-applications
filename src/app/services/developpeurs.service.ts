import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeveloppeursService {

 
  private apiUrl = 'http://localhost:3000/developpeurs';


  constructor(private http: HttpClient) { }

  /**
   * Get all developpeurs
   * @returns Observable<Developpeur[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a developpeur with the given id
   * @param id : developpeur id
   * @returns Observable<Course>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new developpeur
   * @param developpeur new developpeur to create
   */
  create(developpeur: any) {
    return this.http.post(this.apiUrl, developpeur);
  }

  /**
   * Update a developpeur with the given id
   * @param id developpeur id to update
   * @param developpeur new developpeur data
   */
  update(id: string, developpeur: any) {
    return this.http.put(this.apiUrl + '/' + id, developpeur);
  }

  /**
   * Delete a developpeur with the given id
   * @param id developpeur id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}