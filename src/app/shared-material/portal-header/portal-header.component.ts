import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.scss']
})
export class PortalHeaderComponent implements OnInit {

  pageTitle = 'PRODUCT-MANAGEMENT_PORTAL';
  constructor() { }

  ngOnInit(): void {
  }

}
