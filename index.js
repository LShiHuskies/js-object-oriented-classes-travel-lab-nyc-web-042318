class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    this.regular = startDate;
  }

yearsExperienceFromBeginningOf(year) {

    return (year - this.regular.slice(this.regular.length - 4));
  }

}


class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
  //   if (this.endingLocation["vertical"] && this.beginningLocation["vertical"]) {
  //   return Number(this.endingLocation["vertical"]) - Number(this.beginningLocation["vertical"])
  // } else if (this.endingLocation["horizontal"] && this.beginningLocation["horizontal"]) {
  //   let array = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  //     let endThing = array.indexOf(this.endingLocation["horizontal"]);
  //     let beginningThing = array.indexOf(this.beginningLocation["horizontal"]);
  //     return endThing - beginningThing;
  // }
  let array = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  let h = 0;
  let start = array.indexOf(this.beginningLocation["horizontal"])
  let end = array.indexOf(this.endingLocation["horizontal"]);
  if (start > end) {
    h = start - end;
  } else if (end > start) {
    h = end - start;
  }
let v = 0
  if (this.beginningLocation["vertical"] > this.endingLocation["vertical"]) {
    v = this.beginningLocation["vertical"] - this.endingLocation["vertical"];
  } else if (this.beginningLocation["vertical"] < this.endingLocation["vertical"]) {
    v = this.endingLocation["vertical"] - this.beginningLocation["vertical"];
  }
  return h + v;

  }


  estimatedTime (peakTime) {
    if (peakTime) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }




}
