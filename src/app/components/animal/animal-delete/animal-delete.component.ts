import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-delete',
  templateUrl: './animal-delete.component.html',
  styleUrls: ['./animal-delete.component.css']
})
export class AnimalDeleteComponent implements OnInit {

  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.animalService.readById(id).subscribe(animal => {
      this.animal = animal
    })
  }

  deleteAnimal(): void {

    this.animalService.delete(this.animal.id).subscribe(()=> {
      this.animalService.showMessage('Animal excluido com sucesso!')
      this.router.navigate(['/animals']);
    })
  }

  cancel(): void {
    this.router.navigate(['/animals']);
  }

}
