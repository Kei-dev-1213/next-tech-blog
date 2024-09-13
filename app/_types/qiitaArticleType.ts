class UserType {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;

  constructor(data: any) {
    this.description = data.description;
    this.facebook_id = data.facebook_id;
    this.followees_count = data.followees_count;
    this.followers_count = data.followers_count;
    this.github_login_name = data.github_login_name;
    this.id = data.id;
    this.items_count = data.items_count;
    this.linkedin_id = data.linkedin_id;
    this.location = data.location;
    this.name = data.name;
    this.organization = data.organization;
    this.permanent_id = data.permanent_id;
    this.profile_image_url = data.profile_image_url;
    this.team_only = data.team_only;
    this.twitter_screen_name = data.twitter_screen_name;
    this.website_url = data.website_url;
  }
}

export class QiitaArticleType {
  rendered_body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: any;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: any[];
  title: string;
  updated_at: string;
  url: string;
  user: UserType;
  page_views_count: number;
  team_membership: any;
  organization_url_name: string;
  slide: boolean;
  thumbnail: string;
  eyecatch: { url: string };

  constructor(data: any) {
    this.rendered_body = data.rendered_body;
    this.coediting = data.coediting;
    this.comments_count = data.comments_count;
    this.created_at = data.created_at;
    this.group = data.group;
    this.id = data.id;
    this.likes_count = data.likes_count;
    this.private = data.private;
    this.reactions_count = data.reactions_count;
    this.stocks_count = data.stocks_count;
    this.tags = data.tags;
    this.title = data.title;
    this.updated_at = data.updated_at;
    this.url = data.url;
    this.user = new UserType(data.user);
    this.page_views_count = data.page_views_count;
    this.team_membership = data.team_membership;
    this.organization_url_name = data.organization_url_name;
    this.slide = data.slide;
    this.eyecatch = data.eyecatch;
  }
}
