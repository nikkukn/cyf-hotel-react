import React from "react";

const TouristInfoCard = props => (
  <div className="card col">
    <img alt="" src={props.imageUrl} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{props.cityName}</h5>
      <p className="card-text">{props.description}</p>
      <a href={props.linkUrl} className="btn btn-primary">
        Visit {props.cityName}
      </a>
    </div>
  </div>
);

const TouristInfoCards = () => {
  return (
    <div className="App-content">
      <div className="container">
        <div className="row ">
          <TouristInfoCard
            cityName="Glasgow"
            linkUrl="http://peoplemakeglasgow.com"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/River_Clyde_2021.jpg/536px-River_Clyde_2021.jpg"
            description="Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene. "
          />
          <TouristInfoCard
            cityName="Manchester"
            linkUrl="http://visitmanchester.com"
            imageUrl="https://a.cdn-hotels.com/gdcs/production106/d980/dfbdfe50-5862-11e8-b0ec-0242ac11000c.jpg"
            description="Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre."
          />
          <TouristInfoCard
            cityName="London"
            linkUrl="http://visitlondon.com"
            imageUrl="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
            description="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
          />
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
