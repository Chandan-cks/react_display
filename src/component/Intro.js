const Intro = ({Name, Desc, Buttons }) => {
return (
        <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{Name}</h1>
            <p className="lead text-muted">{Desc}</p>       
            <p>{Buttons}</p>
            </div>
        </div>
        </section>
);
};
export default Intro;