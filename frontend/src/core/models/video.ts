interface VideoResponseData {
  id: number;
  title: string;
  slug: string;
}

class Video {
  id: number;
  title: string;
  slug: string;

  constructor(data: VideoResponseData) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
  }
}

export default Video;
