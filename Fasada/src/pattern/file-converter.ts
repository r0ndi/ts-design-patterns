import TxtFile from "./txt-file";
import VideoFile from "./video-file";

class FileConverter {

    public getContent(content: string, format: string): string {
        if (format === "txt") {
            return new TxtFile(content).getContent();
        }

        if (format === "mp4") {
            return new VideoFile(content).getVideo();
        }

        throw new Error("Invalid file format");
    }

}

export default FileConverter;
