import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel',
  imports: [ReactiveFormsModule],
  templateUrl: './explore.html',
  styleUrl:'./explore.css'
})
export class Explore {
  travelForm: FormGroup;
  showAgencies = false;

 
  locations: string[] = ['Gangtok', 'Pelling', 'Lachung', 'Namchi', 'Siliguri'];
  destinations: string[] = ['Gangtok', 'Pelling', 'Lachung', 'Namchi', 'Siliguri'];
 //backend part hobe kintu dummy dilam
  allAgencies = [
    { route: 'Gangtok-Pelling', name: 'Sikkim Travels', vehicle: 'SUV', fare: 1200 },
    { route: 'Gangtok-Pelling', name: 'Himalaya Tours', vehicle: 'Tempo Traveller', fare: 900 },
    { route: 'Gangtok-Lachung', name: 'Eco Ride', vehicle: 'Hatchback', fare: 600 },
    { route: 'Siliguri-Gangtok', name: 'Mountain Express', vehicle: 'Sedan', fare: 800 },
    { route: 'Namchi-Gangtok', name: 'Travel Hub', vehicle: 'SUV', fare: 1000 }
  ];

  agencies: any[] = []; 

  constructor(private fb: FormBuilder) {
    this.travelForm = this.fb.group({
      presentLocation: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  searchAgencies() {
    if (this.travelForm.valid) {
      const present = this.travelForm.value.presentLocation;
      const destination = this.travelForm.value.destination;

      const route = `${present}-${destination}`;

      
      this.agencies = this.allAgencies.filter(a => a.route === route);

      this.showAgencies = this.agencies.length > 0;
    }
  }
}

