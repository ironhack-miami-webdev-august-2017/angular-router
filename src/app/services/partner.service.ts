import { Injectable } from '@angular/core';

@Injectable()
export class PartnerService {

  partners: any[] = [
    { id: 1,  name: 'Vatican', industry: 'Faith' },
    { id: 13, name: 'Jared Jewelry', industry: 'Jewelry' },
    { id: 24, name: 'Exxon', industry: 'Oil' },
    { id: 36, name: 'Wells Fargo', industry: 'Finance' },
    { id: 47, name: '411-PAIN', industry: 'Law' },
    { id: 55, name: 'Saul Goodman', industry: 'Law' },
  ];

  constructor() { }

  getPartners() {
      return this.partners;
  }

  getPartnerDetails(partnerId: number) {
      let foundPartner;

      this.partners.forEach((onePartner) => {
          if (onePartner.id === partnerId) {
              foundPartner = onePartner;
          }
      });

      return foundPartner;

      // PRO WAY
      // return this.partners.find(
      //   onePartner => onePartner.id === partnerId
      // );
  }

}
