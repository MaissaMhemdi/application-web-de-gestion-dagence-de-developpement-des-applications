import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CategorieService {

  private apiUrl = 'http://localhost:3000/categories';


  constructor(private http: HttpClient) { }

  /**
   * Get all categories
<<<<<<< HEAD
   * @returns Observable<Categorie[]>
=======
   * @returns Observable<categories[]>
>>>>>>> a00359c7d6392317621d4ecb5a97ff5a787694e0
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a categorie with the given id
   * @param id : categorie id
   * @returns Observable<Categorie>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new categorie
   * @param categorie new categorie to create
   */
  create(categorie: any) {
    return this.http.post(this.apiUrl, categorie);
  }

  /**
   * Update a categorie with the given id
   * @param id categorie id to update
   * @param categorie new categorie data
   */
  update(id: string, categorie: any) {
    return this.http.put(this.apiUrl + '/' + id, categorie);
  }

  /**
   * Delete a categorie with the given id
   * @param id categorie id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
