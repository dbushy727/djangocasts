import Video from "./video";

interface CollectionResponseData {
  id: number;
  title: string;
  slug: string;
  videos: {
    id: number;
    title: string;
    slug: string;
  }[];
}

class Collection {
  id: number;
  title: string;
  slug: string;
  videos: Video[];

  constructor(data: CollectionResponseData) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.videos = data.videos.map((video) => new Video(video));
  }
}

export default Collection;
