// content-card.component.ts

import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    // Add at least 3 valid items to the ContentList
    this.contentList.addContent({
      id: 1,
      title: 'Post 1',
      description: 'Description for Post 1',
      creator: 'John Doe',
      imgURL: 'https://example.com/image1.jpg',
      type: 'Blog',
      tags: ['Tag1', 'Tag2']
    });

    this.contentList.addContent({
      id: 2,
      title: 'Post 2',
      description: 'Description for Post 2',
      creator: 'Jane Smith',
      imgURL: 'https://example.com/image2.jpg',
      type: 'News',
      tags: ['Tag3', 'Tag4']
    });

    this.contentList.addContent({
      id: 3,
      title: 'Post 3',
      description: 'Description for Post 3',
      creator: 'Bob Johnson',
      type: 'Article',
      tags: ['Tag5', 'Tag6']
    });
  }

  ngOnInit(): void {
  }
}
