/* import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {
    this.contentArray = [];
  }

  getContentArray(): Content[] {
    return this.contentArray;
  }

  addContent(content: Content): void {
    this.contentArray.push(content);
  }

  getContentCount(): number {
    return this.contentArray.length;
  }

  getContentDetails(index: number): string {
    const contentItem = this.contentArray[index];

    if (!contentItem) {
      return 'Invalid index or content item not found.';
    }

    const imgTag = contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="Image">` : '';

    return `
      <h3>${contentItem.title}</h3>
      <p>Description: ${contentItem.description}</p>
      <p>Creator: ${contentItem.creator}</p>
      ${imgTag}
      <p>Type: ${contentItem.type}</p>
    `;
  }
} */
