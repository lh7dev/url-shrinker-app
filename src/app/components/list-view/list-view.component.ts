import { Component, OnInit, ViewChild } from '@angular/core';
import { UrlShrinkerService, UrlRelationship } from 'src/app/url-shrinker.service';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  displayCols = ['shortUrl', 'originalUrl'];
  dataSource = new MatTableDataSource<UrlRelationship[]>([]);

  length: number = 0; // ← used in the template
  pageIndex = 0;
  pageSize = 25;
  pageSizeOptions = [25, 100, 500, 1000, 5000];
  pageEvent: PageEvent;

  loading = true;

  baseUrl;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private srv: UrlShrinkerService) {}

  ngOnInit(): void {
    this.refreshList();
    this.baseUrl = this.srv.baseUrl;
  }

  ngAfterViewInit() {
    this.initPaginators();
  }

  refreshList(): void {
    this.loading = true;

    this.srv.getList().subscribe((result) => {
      console.log('list response');
      console.log(result);
      if (result.success) {
        this.dataSource = new MatTableDataSource<UrlRelationship[]>(result.data);
        this.loading = false;
        this.initPaginators();
      } else {
        console.log('refresh list failed');
        console.log(result);
      }
    });
  }

  initPaginators() {
    this.paginator.pageSize = this.pageSize;
    this.paginator.pageIndex = this.pageIndex;
    this.dataSource.paginator = this.paginator;
    this.loading = false;
  }

  onSearchChaged(searchArg: string) {
    let filter = searchArg.trim();
    filter = filter.toLowerCase();
    this.dataSource.filter = filter;
  }

  onPageChange(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
  }
}
