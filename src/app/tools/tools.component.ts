// tools.component.ts
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

interface Tool {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-tools',
  standalone: true,
  templateUrl: './tools.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  // categories for filter bar
  categories = ['All', 'Power Tools', 'Hand Tools', 'Measuring', 'Safety'];

  // static “catalog”
  tools: Tool[] = [
    {
      id: 1,
      name: 'DeWalt Cordless Drill',
      category: 'Power Tools',
      price: 129.99,
      desc: '18V brushless motor, 2‑speed gearbox, LED work light.',
      img: 'img/tools/drill.jpg'
    },
    {
      id: 2,
      name: 'Hand Saw with Wood Handle',
      category: 'Hand Tools',
      price: 39.50,
      desc: '24" steel blade, oak handle.',
      img: 'img/tools/saw.jpg'
    },
    {
      id: 3,
      name: 'Precision Laser Level',
      category: 'Measuring',
      price: 59.00,
      desc: 'Self‑leveling, 360 degree projection.',
      img: 'img/tools/level.jpg'
    },
    {
      id: 4,
      name: 'ArmorGuard Safety Glasses',
      category: 'Safety',
      price: 15.25,
      desc: 'ANSI‑rated, anti‑fog, wraparound protection.',
      img: 'img/tools/glasses.jpg'
    },
    {
      id: 5,
      name: 'Tape Measure',
      category: 'Measuring',
      price: 12.75,
      desc: 'Classic design, made from recycled materials.',
      img: 'img/tools/tape.jpg'
    }
  ];

  // UI state
  selectedCat = 'All';
  search = '';

  get filteredTools() {
    return this.tools.filter(t =>
      (this.selectedCat === 'All' || t.category === this.selectedCat)
      && t.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  addToCart(tool: Tool) {
    // static UI only: just show a Bootstrap toast or console.log
    console.log(`🛒 added "${tool.name}" (price: $${tool.price})`);
  }
}
