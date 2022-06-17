import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-update',
  templateUrl: './animal-update.component.html',
  styleUrls: ['./animal-update.component.css']
})
export class AnimalUpdateComponent implements OnInit {
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
    });
  }

  updateAnimal(): void {
    this.animalService.update(this.animal).subscribe(()=>{
      this.animalService.showMessage('Animal atualizado com sucesso!')
      this.router.navigate(['/animals']);
    })
  }
  cancel(): void {
    this.router.navigate(['/animals']);
  }

}
