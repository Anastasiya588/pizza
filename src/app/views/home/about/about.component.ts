import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  @ViewChild(PopupComponent)
  private popupComponent!:PopupComponent;
  ngAfterViewInit(): void {
    // this.modalService.open(this.popup,{});
    this.popupComponent.open()
  }
  // ngAfterViewInit(): void {
  //   const modalRef = this.modalService.open(PopupComponent);
  //   modalRef.componentInstance.data = 'About Component';
  // }
}
