import { Injectable } from '@nestjs/common';
import { News } from './news.model';

@Injectable()
export class NewsService {
  private readonly nbOfDays = 10;

  private news: News[] = [...Array(this.nbOfDays).keys()].map((i) =>
    this.generateRandomNews(i),
  );

  getNews(): News[] {
    return this.news;
  }

  createNews(news: News): News {
    this.news.push(news);
    return news;
  }

  updateNews(newsToUpdate: News) {
    let foundNews = this.news.find((c) => c.id === newsToUpdate.id);
    if (foundNews) {
      foundNews = { ...newsToUpdate };
    }
  }

  deleteNews(idNewsToDelete: string) {
    this.news = this.news.filter((c) => c.id !== idNewsToDelete);
  }

  private generateRandomNews(index: number): News {
    return {
      id: crypto.randomUUID(),
      author: 'Akira toriyama',
      content: 'content' + index,
      description: 'super news',
      publishedAt: '',
      title: 'title',
      url: 'ddd',
      urlToImage: 'dde',
    };
  }
}
