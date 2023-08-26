import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.calculateProgressPercentage()
  }

  bikes = [
    {
      id: 1,
      name: 'Bike 1',
      speed: 85,
      email: 'bike1@example.com',
      svg: 'yellow',
      bikeImage: '../assets/bycicle.png',
      distance:0
    },
    {
      id: 2,
      name: 'Bike 2',
      speed: 50,
      email: 'bike2@example.com',
      svg: 'green',
      bikeImage: '../assets/motorbike.png',
      distance:0
    },
    {
      id: 3,
      name: 'Bike 3',
      speed: 100,
      email: 'bike2@example.com',
      svg: 'blue',
      bikeImage: '../assets/bycicle.png',
      distance:0
    }
    // Add more bikes as needed
  ];
  time = 0;
  distance = 0
  calculateProgressPercentage() {
    this.bikes.forEach(bike => {
      this.time = Math.floor(Math.random() * 5) + 1;
      bike.distance  = bike.speed * this.time;
      //console.log("Distance - ", this.distance, " Speed - ", bike.speed, " Time - ", this.time)
    });
  }
  
  findMaxDistanceBike() {
    return this.bikes.reduce((maxDistanceBike, currentBike) => {
      return currentBike.distance > maxDistanceBike.distance ? currentBike : maxDistanceBike;
    });
  }
  // distance=0;
  // time = 0;
  // ctr =0;
  // calculateWidth(speed:number){
  //     this.time = Math.floor(Math.random() * 5) + 1;
  //     this.distance = speed * this.time
  //     this.ctr +=1;
  //     console.log("counter",this.ctr,"Distance - ", this.distance, " Speed - ", speed, " Time - ", this.time)
  //   return this.distance
  // }
}
