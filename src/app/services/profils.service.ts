import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  private apiUrl = 'http://localhost:3000/profils';


  constructor(private http: HttpClient) { }

  /**
   * Get all profils
   * @returns Observable<profils[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a profils with the given id
   * @param id : profils id
   * @returns Observable<profils>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new profils
   * @param profile new profils to create
   */
  create(profile: any) {
    return this.http.post(this.apiUrl, profile);
  }

  /**
   * Update a profil with the given id
   * @param id profil id to update
   * @param profil new profils data
   */
  update(id: string, nom: any) {
    return this.http.put(this.apiUrl + '/' + id, nom);
  }

  /**
   * Delete a profils with the given id
   * @param id profils id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
