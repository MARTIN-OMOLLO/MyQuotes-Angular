export class Quotes {
    showDescription: boolean;
  constructor(public id: number,public name: string,public title: string,public quotebody:string,public author:string,public dateposted:Date,public likes:number,public unlike:number){
    this.showDescription=false;
  }
}
