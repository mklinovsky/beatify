import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'btf-authorize',
  template: '',
})
export class AuthorizeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private spotifyAuth: SpotifyAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const fragment = this.route.snapshot.fragment;
    this.auth.storeToken(this.spotifyAuth.getTokenFromFragment(fragment));

    this.router.navigate(['/']);
  }
}
