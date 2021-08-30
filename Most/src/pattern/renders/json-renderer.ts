import RendererInterface from "./renderer.interface";

class JsonRenderer implements RendererInterface {

    public renderTitle(title: string): string {
        return JSON.stringify({ title });
    }

    public renderContent(content: string): string {
        return JSON.stringify({ content });
    }

    public renderParts(parts: string[]): string {
        return parts.join("\n");
    }

}

export default JsonRenderer;
