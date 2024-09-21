import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrls: ['./bookmarklist.component.css']
})
export class BookmarklistComponent{
  url: string = '';  // Holds the input URL
  bookmarkList: string[] = [];  // Holds the list of bookmarked URLs

  // Method to add the input URL to the bookmark list
  addBookmark(): void {
    if (this.url.trim()) {
      this.bookmarkList.push(this.url);
      this.url = '';  // Clear the input field
    }
  }
}

