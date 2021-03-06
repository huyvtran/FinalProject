import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { EmergencyContact } from './../../models/emergency-contact';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'contacts-list-page-map',
  templateUrl: 'contacts-list.html',
  styleUrls: ['./contacts-list.scss']
})
export class ContactsListPage implements OnInit {
  // Fields
  contacts: EmergencyContact[] = [];
  newEmergencyContact: EmergencyContact = new EmergencyContact();
  viewNewContactForm = false;

  // Constructors
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    private contactService: ContactService
  ) {}

  // Methods
  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.contactService.index().subscribe(
      good => {
        this.contacts = good;
      },
      bad => {
        console.error(bad);
      }
    );
  }

  showContactForm() {
    this.viewNewContactForm = true;
  }

  ionViewDidEnter() {
    this.contactService.index().subscribe((contacts: EmergencyContact[]) => {
      this.contacts = contacts;
    });
  }

  addContact() {
    this.contactService.create(this.newEmergencyContact).subscribe(
      good => {
        this.viewNewContactForm = false;
        this.newEmergencyContact = null;
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.reload();
      }
    );
  }
}
