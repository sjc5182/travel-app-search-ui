class Quotes{
  constructor(OriginStation, DestinationStation, Departure, Arrival, Carriers){
    this.OriginStation = OriginStation;
    this.DestinationStation = DestinationStation;
    this.Departure = Departure;
    this.Arrival = Arrival;
    this.Carriers = Carriers;
    this.segments
  }
  static legs(itinerary, leg, segments) {
    let newQuoteArray = []
    for(let i = 0; i<leg.length; i++){
      if(itinerary[i].OutboundLegId===leg[i].Id)
        newQuoteArray.push(new this(leg[i].OriginStation, leg[i].DestinationStation, leg[i].Departure, leg[i].Arrival, leg[i].Carriers[0]));
    }
    return newQuoteArray
  }
}
export default Quotes;