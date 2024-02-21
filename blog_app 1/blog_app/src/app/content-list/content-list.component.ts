import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';
import {FilterTypePipe} from '../filter-type.pipe';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
      id: 1,
      title: 'Post 1',
      description: 'Description for Post 1',
      creator: 'John Doe',
      imgURL: 'https://example.com/image1.jpg',
      tags: ['Tag1', 'Tag2'],
      type: "Food blogs"
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'Description for Post 2',
      creator: 'Jane Smith',
      imgURL: 'https://example.com/image2.jpg',
      tags: ['Tag3', 'Tag4'],
      type: "Travel blogs"
    },
    {
      id: 3,
      title: 'Post 3',
      description: 'Description for Post 2',
      creator: 'Jane Smith',
      imgURL: 'https://example.com/image2.jpg',
      tags: ['Tag5', 'Tag6'],
        type: "Travel blogs", 
    },
    {
      id: 4,
      title: 'Post 4',
      description: 'Description for Post 2',
      creator: 'Jane Smith',
      imgURL: 'https://example.com/image2.jpg',
      tags: ['Tag7', 'Tag8'],
      type: "Lifestyle blogs", 
    },
    {
      id: 5,
      title: 'Post 5',
      description: 'Description for Post 2',
      creator: 'Jane Smith',
      imgURL: 'https://example.com/image2.jpg',
      tags: ['Tag9', 'Tag10'],
      type: "Travel blogs", 
    },
    {
      id: 6,
      title: 'Post 6',
      description: 'Description for Post 2',
      creator: 'Jane Smith',
      imgURL: 'https://example.com/image2.jpg',
      tags: ['Tag11', 'Tag12'],
        type: "Lifestyle blogs", 
    },
    
    {
      id: 7,
      title: 'Post 7',
      description: 'Description for Post 2',
      creator: 'Jane Smith',
      imgURL: 'https://example.com/image2.jpg',
      tags: ['Tag13', 'Tag14']
    },
  ];

  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  constructor(){

  }
}
