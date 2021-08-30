import RendererInterface from "./renders/renderer.interface";

class Page {
    private title: string;
    private content: string;

    private renderer: RendererInterface;

    public constructor(renderer: RendererInterface) {
        this.renderer = renderer;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(value: string): void {
        this.title = value;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public view(): string {
        return this.renderer.renderParts([
           this.renderer.renderTitle(this.getTitle()),
           this.renderer.renderContent(this.getContent()),
        ]);
    }
}

export default Page;
