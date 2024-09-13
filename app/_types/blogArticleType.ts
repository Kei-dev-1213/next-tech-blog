class EyecatchType {
  url: string;
  height: number;
  width: number;

  constructor(data: any) {
    this.url = data.url;
    this.height = data.height;
    this.width = data.width;
  }
}

export class BlogArticleType {
  id: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: EyecatchType | null;
  category: any;
  thumbnail: string;

  constructor(data: any) {
    this.id = data.id;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
    this.published_at = data.publishedAt;
    this.revisedAt = data.revisedAt;
    this.title = data.title;
    this.content = data.content;
    this.eyecatch = data.eyecatch ? new EyecatchType(data.eyecatch) : null;
    this.category = data.category;
  }
}
