import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { News } from './news.model';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll(): News[] {
    return this.newsService.getNews();
  }

  @Post()
  create(news: News): News {
    return this.newsService.createNews(news);
  }

  @Put()
  update(news: News): void {
    return this.newsService.updateNews(news);
  }

  @Delete()
  delete(newsId: string): void {
    return this.newsService.deleteNews(newsId);
  }
}
