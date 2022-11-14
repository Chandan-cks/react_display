import PortfolioImg from "../asset/img/portfolio.webp"
const Portfolio =({Projects})=>{
    return (
        <div class="album py-5 bg-light" id="Portfolio">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        {Projects && Projects.length > 0 && Projects.map(Projects, key => <div class="col" key={key}>
          <div class="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Projects.Image} alt="Portfolio" arial-label="Image" focusable="false" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View Project</button>
                </div>
                <small class="text-muted">Frontend</small>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  </div>
    )
};
export default Portfolio;