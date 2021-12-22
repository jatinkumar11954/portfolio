import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/jatinkumar11954",
    linkedin: "https://www.linkedin.com/in/v-jatin-kumar-a7a02a17b/",
    gmail: "print.coder@gmail.com",
    instagram : "https://www.instagram.com/jatinkumar11954",
    facebook: "https://www.facebook.com/jatinkumar"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
