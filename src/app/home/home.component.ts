import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private data: DataService) {}

  h1Style: boolean = false
  // h1StyleFromService = this.data.h1StyleFromService

  ngOnInit() {}

  firstClick = () => {
    this.h1Style = !this.h1Style
  }

  secondClick = () => {
    this.data.secondClicked()
  }
}
