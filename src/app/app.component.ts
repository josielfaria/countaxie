import { Component, OnInit } from '@angular/core';
import { AxieCardModel, AxieModel } from './shared/models/axie-model.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  energy = 3;
  round = 1;
  roundBack = false;

  public removeEnergy(): void {
    if (this.energy > 0) {
      this.energy--;
    }
  }

  public addEnergy(): void {
    if (this.energy < 10) {
      this.energy++;
    }
  }

  public nextRound(): void {
    this.addEnergy();
    this.addEnergy();
    this.round++;
    this.roundBack = true;
  }
  public prevRound(): void {
    if (this.energy > 0 && this.roundBack) {
      this.energy -= 2;
      this.round--;
      this.roundBack = false;
    }
  }

  public reset(): void {
    this.energy = 3;
    this.round = 1;
    this.roundBack = false;
  }
}
