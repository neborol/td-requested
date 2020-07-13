import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  mobileMenuOpen = false;
  selected = 'option2';
  selectedProvice = 'Ontario';
  selectedLanguage = 'EN';
  searchValue = 'Clear';
  showSearchInput = false;

  provinces: string[] = ['Ontario', 'British Columbia', 'Quebec', 'Alberta', 'Manitoba', 'New Brunswick', 'Yukon', 'Nunavut'];
  languages: string[] = ['EN', 'FR', 'SP', 'GE', 'AF'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  getSelectedProvince(province) {
    this.mobileMenuOpen = false;
    this.selectedProvice = province;
  }

  getSelectedLanguage(language) {
    this.mobileMenuOpen = false;
    this.selectedLanguage = language;
  }

  toggleSearch() {
    this.showSearchInput = !this.showSearchInput;
  }

  clearSearchTerm() {
    this.searchValue = '';
  }

  closeAndToggleSearch() {
    this.mobileMenuOpen = false;
    this.toggleSearch();
  }

  navigatetoLink(link) {
    this.mobileMenuOpen = false;
    this.router.navigate([link]);
  }

}
