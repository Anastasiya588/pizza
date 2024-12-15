import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
// export class TitleComponent implements OnInit {
export class TitleComponent {

  @Input() title: string = '';

  // @ContentChild('second')
  // private second!: ElementRef

  constructor() {
  }

  // ngOnInit(): void {
  // }

  toUpper() {
    return this.title.toUpperCase()
  }

  toLower() {
    return this.title.toLowerCase()
  }

  // ngAfterViewInit() {
  //   console.log(this.second)
  // }
}
