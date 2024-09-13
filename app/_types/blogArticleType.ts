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
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: EyecatchType | null;
  category: any;
  thumbnail: string;

  constructor(data: any) {
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.publishedAt = data.publishedAt;
    this.revisedAt = data.revisedAt;
    this.title = data.title;
    this.content = data.content;
    this.eyecatch = data.eyecatch ? new EyecatchType(data.eyecatch) : null;
    this.category = data.category;
  }

  getThumbnailURL() {
    return this.eyecatch.url ?? "";
  }

  getCreated_at() {
    return this.createdAt;
  }
}
