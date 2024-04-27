export class Video {
    constructor(
        public id: string,
        public titel: string,
        public description: string,
        public publishedAt: string,
        public thumbnail: string,
        public tags: string[],
        public statistics: {
            viewCount: string,
            likeCount: string,
            dislikeCount: string,
            commentCount: string,
        },
    ) {}
}