import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  h1StyleFromService: boolean = false

  constructor(private http: HttpClient) {}

  secondClicked = () => {
    this.h1StyleFromService = !this.h1StyleFromService
  }

  getUsers = () => {
    return this.http.get('https://reqres.in/api/users')
  }
}
