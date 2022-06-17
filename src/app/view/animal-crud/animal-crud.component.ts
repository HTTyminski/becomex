import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-crud',
  templateUrl: './animal-crud.component.html',
  styleUrls: ['./animal-crud.component.css']
})
export class AnimalCrudComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navigateToAnimalCreate(): void {
    this.router.navigate(['/animals/create'])
  }

}
