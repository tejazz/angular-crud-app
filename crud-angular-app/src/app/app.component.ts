import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: any = []
  callSingleUser = new User()
  updateBtn: boolean = true

  constructor(private getAllData: GetDataService) {
    this.getPosts();
  }

  ngOnit() {
  }

  // Adding a data point
  postCurrent(user: User) {
    console.log("I am in post")
    console.log(this.callSingleUser)

    this.getAllData.postData(user)
      .subscribe(data => { console.log("Success"); this.getPosts() });
  }

  // Fetching all the data from the database
  getPosts() {
    this.getAllData.getData()
      .subscribe(data => { this.userData = data.message; console.log(this.userData); })
  }

  //Get particular data
  getSinglePost(userID: string) {
    this.updateBtn = false
    console.log("I am in getting single post")
    this.getAllData.getSingleData(userID)
      .subscribe(data => {
        this.callSingleUser = data.message; console.log(this.callSingleUser.userEmail)
      })
  }

  //Update single post
  updatePost(userID: string) {
    this.updateBtn = true
    console.log(this.callSingleUser)
    this.getAllData.updateData(this.callSingleUser, userID)
      .subscribe(data => { console.log("Updated data " + userID); this.getPosts() })
  }


  // Deleting a particular data from list
  deletePost(userID: string) {
    console.log("Inside delete function")

    this.getAllData.deleteData(userID)
      .subscribe(data => { console.log("Deleted: " + userID); this.getPosts() })
  }

}
