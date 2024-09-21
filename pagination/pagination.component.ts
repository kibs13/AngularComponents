import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']  // Optional for styles
})
export class PaginationComponent {
  items: string[] = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example items
  pageSize: number = 10;  // Number of items per page
  currentPage: number = 1;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get totalPages() {
    return Math.ceil(this.items.length / this.pageSize);
  }
}
