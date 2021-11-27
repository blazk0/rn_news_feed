export interface NewsResponse {
  nextPage: number;
  results: NewsResult[];
  status: string;
  totalResults: number;
}

export interface NewsResult {
  content?: string;
  creator: string[];
  description: string;
  image_url?: string;
  keywords?: string;
  link: string;
  pubDate: string;
  source_id: string;
  title: string;
  video_url: null;
}
