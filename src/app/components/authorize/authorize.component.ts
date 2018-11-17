import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'btf-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.fragment);
  }

  

}
