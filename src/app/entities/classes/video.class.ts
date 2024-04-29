export default class Video {
  constructor(
    public id: string,
    public titel: string,
    public description: string,
    public publishedAt: Date,
    public thumbnail: string,
    public statistics: {
      viewCount: string,
      likeCount: string,
      dislikeCount: string,
      commentCount: string,
    },
  ) {}
}
