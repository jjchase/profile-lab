import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile: UserProfile = {
    name: 'Jack Chase',
    contact: 'jack@gmail.com',
    bio: '22 years strong',
  };

  constructor() {}

  getUserProfile(): UserProfile {
    return this.profile;
  }

  setUserProfile(profile: UserProfile) {
    this.profile = profile;
    console.log('setUserProfile WAS CALLED');
    console.log(this.profile);
  }
}
