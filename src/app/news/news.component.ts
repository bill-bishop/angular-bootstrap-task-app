import { Component } from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';

interface NewsCard {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

@Component({
  selector: 'app-news',
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsCards: NewsCard[] = [
    {
      id: 0,
      title: 'Electric Cars Hit Record Range',
      description: 'Latest EVs now exceed 400 miles per charge, making long-distance trips easier than ever.',
      image: '/img/news/1.jpg',
      date: '2025-07-19'
    },
    {
      id: 1,
      title: 'Fast-Charge Stations Nationwide',
      description: 'New government funding will install thousands of ultra-fast chargers along major highways.',
      image: '/img/news/2.jpg',
      date: '2025-07-20'
    },
    {
      id: 2,
      title: 'Battery Recycling Breakthrough',
      description: 'A team of engineers developed a process to recover 95% of critical minerals from old EV batteries.',
      image: '/img/news/3.jpg',
      date: '2025-07-23'
    }
  ];

  trackByTitle(index: number, card: { title: string }): string {
    return card.title;
  }
}
