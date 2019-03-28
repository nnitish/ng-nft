import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ng-nft',
  template: '<span>{{formattedNumber}}</span>',
})
export class NgNftComponent {

  @Input() nftNumber;
  @Input() nftPlaceValue;  // Value after decimal point.  Range [0-100]


  public formattedNumber: string | number;
  private placeValue: number;

  private ranges: IRanges[] = [
    { divider: 1E18, unit: 'E' },
    { divider: 1E15, unit: 'P' },
    { divider: 1E12, unit: 'T' },
    { divider: 1E9, unit: 'B' },
    { divider: 1E6, unit: 'M' },
    { divider: 1E3, unit: 'K' }
  ];

  constructor() { }

  ngOnChanges(change: SimpleChanges): void {

    if (change['nftPlaceValue']) {
      let currentPV = change['nftPlaceValue']['currentValue'];
      if (currentPV >= 0 && currentPV <= 100) {
        this.placeValue = currentPV;
      }
    }


    if (change['nftNumber']) {
      let nfNumber = +change['nftNumber']['currentValue'];

      if (nfNumber && typeof nfNumber === 'number') {
        this.nFormatter(nfNumber);

      } else {
        this.formattedNumber = '';
      }

    }
  }

  private nFormatter(nfNumber: number): void {
    let isNegative = false;

    if (nfNumber && nfNumber < 0) {
      isNegative = true;
      nfNumber = Math.abs(nfNumber); // Changing in positive number.
    }

    for (let i = 0; i < this.ranges.length; i++) {
      let range = this.ranges[i];

      if (nfNumber >= range.divider) {  // Number which is in a range.
        let rawValue: string;

        if (this.placeValue >= 0) {
          rawValue = (nfNumber / range.divider).toFixed(this.placeValue) + range.unit;

        } else {
          rawValue = (nfNumber / range.divider).toString() + range.unit;
        }


        if (isNegative) {   // Checking negative values
          this.formattedNumber = '-' + rawValue;
        } else {
          this.formattedNumber = rawValue;
        }

        return;
      }

    }

    // Number which is not in a range.
    if (isNegative) {
      this.formattedNumber = nfNumber * -1;  // Including negative values

    } else {
      this.formattedNumber = nfNumber;
    }

  }

}

interface IRanges  {
  divider: number;
  unit: string;
}
