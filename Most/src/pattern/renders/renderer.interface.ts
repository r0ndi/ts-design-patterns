interface RendererInterface {

    renderTitle(title: string): string;

    renderContent(content: string): string;

    renderParts(parts: string[]): string;

}

export default RendererInterface;
