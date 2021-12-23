import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "B.Tech - Computer Science & Engineering",
      duration: "2020",
      subtitle: "GNITC, Hyderabad",
      content: "Successfully completed my B.tech in Computer science from GNITC, Hyderabad.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2016",
      subtitle: "SSC Board",
      content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Hyderabad.\n" +
        "Major: PCM.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2014",
      subtitle: "SSC Board",
      content: "Successfully completed my high school studies in 2014 from Vignana Bharathi High School, Hyderabad.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
