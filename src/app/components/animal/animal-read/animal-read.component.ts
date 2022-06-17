import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-read',
  templateUrl: './animal-read.component.html',
  styleUrls: ['./animal-read.component.css']
})
export class AnimalReadComponent implements OnInit {

  animals: Animal[];
  displayedColumns = ['id','especie','sexo', 'nome','nomedopai','nomedamae','aniversario', 'action'];

  constructor( private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.read().subscribe(animals => {
      this.animals = animals
    })
  }

}
