import RendererInterface from "./renderer.interface";

class HtmlRenderer implements RendererInterface {

    public renderTitle(title: string): string {
        return `<p>${title}</p>`;
    }

    public renderContent(content: string): string {
        return `<p>${content}</p>`;
    }

    public renderParts(parts: string[]): string {
        return parts.join("\n");
    }

}

export default HtmlRenderer;
