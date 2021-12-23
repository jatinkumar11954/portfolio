import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: "Infosys",
      duration: "current",
      content: "Upcoming Full stack develover at Infosys!",
      className: "direction-r"
    },
    {
      heading: "B.Tech",
      duration: "2017 - 2021",
      content: "Successfully completed my B.tech in Computer science from GNITC, Hyderabad.",
      className: "direction-l"
    },
    {
      heading: "Intermediate",
      duration: "2015-2016",
      content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Hyderabad.\n" +
        "Major: PCM.",
      className: "direction-r"
    },
    {
      heading: "High School",
      duration: "2013-2014",
      content: "Successfully completed my high school studies in 2014 from Vignana Bharathi High School, Hyderabad.",
      className: "direction-l"
    }

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
