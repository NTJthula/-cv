import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'paper-plane',
    'paper-plane',
    'paper-plane',
    'paper-plane',
    
  ];
  private note = [
    'frontend Developer 2019',
    
  ];
  public items: Array<{ title: string; note: string; icon: string; }> = [];
  constructor() {
    for (let i = 1; i < 2; i++) {
      this.items.push({
        title: 'The Digital Academy:',
        note: this.note[Math.floor(Math.random() * this.note.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
