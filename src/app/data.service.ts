import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  h1StyleFromService: boolean = false

  constructor() {}

  secondClicked = () => {
    this.h1StyleFromService = !this.h1StyleFromService
  }
}
