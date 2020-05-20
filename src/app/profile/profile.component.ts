import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: UserProfile;
  // newProfile: UserProfile = {
  //   name: '',
  //   contact: '',
  //   bio: '',
  // };
  //injecting service
  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.service.getUserProfile();
  }
}
