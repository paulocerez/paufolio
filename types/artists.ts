export interface ImageObject {
  url: string;
  width: number;
  height: number;
}
export interface Artist {
  name: string;
  uri: string;
  followers: Followers;
  imageUrl: string;
  images: ImageObject[];
}

export interface Followers {
  href: string;
  total: number;
}
