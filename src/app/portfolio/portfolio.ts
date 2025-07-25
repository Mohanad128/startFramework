import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  portfolioImages = [
    '/images/port1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/port1.png',
    '/images/port2.png',
    '/images/port3.png',
  ];

  selectedImagePath: string | null = null;

  openImage(imagePath: string) {
    this.selectedImagePath = imagePath;
  }

  closeImage() {
    this.selectedImagePath = null;
  }
}
