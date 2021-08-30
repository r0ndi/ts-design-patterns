class VideoFile {
    private readonly content: string;

    public constructor(content: string) {
        this.content = content;
    }

    public getVideo(): string {
        return this.content;
    }
}

export default VideoFile;
