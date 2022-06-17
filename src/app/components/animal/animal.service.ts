import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseUrl = "http://localhost:3001/animals";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.baseUrl, animal)
  }
  read():Observable<Animal[]> {
      return this.http.get<Animal[]>(this.baseUrl);
  }
  readById(id: any): Observable<Animal> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Animal>(url)
  }
  update(animal: Animal): Observable<Animal> {
    const url = `${this.baseUrl}/${animal.id}`
    return this.http.put<Animal>(url, animal)
  }
  delete(id: any): Observable<Animal> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Animal>(url)
  }
}
