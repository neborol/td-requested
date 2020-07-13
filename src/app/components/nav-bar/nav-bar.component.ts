import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  mobileMenuOpen = false;  // Keeps the mobile devices menu closed until triggered
  selectedProvice = 'Ontario';  // Initializes the selected province
  selectedLanguage = 'EN';  // Initializes the selected language
  searchValue = 'Clear';  // Place holder for the search term in the search box
  showSearchInput = false; // Initially hides the search input box until the search icon is clicked.

  // Array from where the provinces will be read by the dropdown menu, as well as that for the language
  provinces: string[] = ['Ontario', 'British Columbia', 'Quebec', 'Alberta', 'Manitoba', 'New Brunswick', 'Yukon', 'Nunavut'];
  languages: string[] = ['EN', 'FR', 'SP', 'GE', 'AF'];

  // Inject the router, so as to use it to trigger a new route to navigate the user to.
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // When called toggles the mobile devices menu
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // when called, chooses the province, and then closes the mobile menu
  getSelectedProvince(province) {
    this.mobileMenuOpen = false;
    this.selectedProvice = province;
  }

  // When called, chooses the language, and then closes the mobile menu
  getSelectedLanguage(language) {
    this.mobileMenuOpen = false;
    this.selectedLanguage = language;
  }

  // When called, toggles the search input box.
  toggleSearch() {
    this.showSearchInput = !this.showSearchInput;
  }

  // When called, clears the search input field.
  clearSearchTerm() {
    this.searchValue = '';
  }

  // Search toggle helper method
  closeAndToggleSearch() {
    this.mobileMenuOpen = false;
    this.toggleSearch();
  }

  // Route navigation helper method.
  navigatetoLink(link) {
    this.mobileMenuOpen = false;
    this.router.navigate([link]);
  }

}
