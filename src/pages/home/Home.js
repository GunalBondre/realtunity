import React from "react";
import "./home.scss";
import Images from "../../images/index";
const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="hamburger">
					<div className="line line-1"></div>
					<div className="line line-2"></div>
					<div className="line line-3"></div>
				</div>
				<header className="header">
					<div className="img-wrapper">
						<img src={Images.bg} alt="" />
					</div>
					<div className="banner">
						<h1>Architecture & interior design</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
						<button className="theme-btn">Discover Now</button>
					</div>
				</header>

				<section className="about-us">
					<div className="section-header">
						<h1 className="section-heading">About Us</h1>
						<div className="underline"></div>
					</div>
					<div className="services">
						<div className="service">
							<div className="service-header">
								<i className="fas fa-pen-nib"></i>
								<h3>Interior</h3>
							</div>
							<p className="service-text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Doloremque, officia!
							</p>
						</div>
						<div className="service">
							<div className="service-header">
								<i className="fas fa-paint-roller"></i>
								<h3>Exterior</h3>
							</div>
							<p className="service-text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Doloremque, officia!
							</p>
						</div>
						<div className="service">
							<div className="service-header">
								<i className="fas fa-pencil-alt"></i>
								<h3>Design</h3>
							</div>
							<p className="service-text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Doloremque, officia!
							</p>
						</div>
						<div className="service">
							<div className="service-header">
								<i className="fas fa-paint-brush"></i>
								<h3>Decoration</h3>
							</div>
							<p className="service-text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Doloremque, officia!
							</p>
						</div>
						<div className="service">
							<div className="service-header">
								<i className="fas fa-ruler-combined"></i>
								<h3>Planning</h3>
							</div>
							<p className="service-text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Doloremque, officia!
							</p>
						</div>
						<div className="service">
							<div className="service-header">
								<i className="far fa-building"></i>
								<h3>Execution</h3>
							</div>
							<p className="service-text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Doloremque, officia!
							</p>
						</div>
						<div className="about-us-img-wrapper">
							<img src={Images.house} />
						</div>
					</div>
				</section>

				<section className="team">
					<div className="section-header">
						<h1 className="section-heading">Team</h1>
						<div className="underline"></div>
					</div>
					<div className="cards">
						<div className="cards-wrapper">
							<div className="cards-img-wrapper">
								<img src={Images.person1} alt="ceo" />
							</div>
							<div className="cards-info">
								<h3>John Smith</h3>
								<h3 className="post">CEO</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Commodi, nulla.
								</p>
								<button className="theme-btn">Read More</button>
							</div>
						</div>
						<div className="cards-wrapper">
							<div className="cards-img-wrapper">
								<img src={Images.person2} alt="ceo" />
							</div>
							<div className="cards-info">
								<h3>jenna Smith</h3>
								<h3 className="post">Designer</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Commodi, nulla.
								</p>
								<button className="theme-btn">Read More</button>
							</div>
						</div>
						<div className="cards-wrapper" data-tilt>
							<div className="cards-img-wrapper">
								<img src={Images.person3} alt="ceo" />
							</div>
							<div className="cards-info">
								<h3>sara cena</h3>
								<h3 className="post">Architect</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Commodi, nulla.
								</p>
								<button className="theme-btn">Read More</button>
							</div>
						</div>
					</div>
				</section>

				<section className="contact">
					<div className="contact-wrapper">
						<div className="contact-left"></div>
						<div className="contact-right">
							<h2 className="contact-heading">Contact</h2>
							<form action="">
								<div className="form-group">
									<input type="text" />
									<label htmlFor="">FULL NAME</label>
								</div>
								<div className="form-group">
									<input type="email" /> <label htmlFor="">EMAIL</label>
									<label htmlFor="">EMAIL</label>
								</div>
								<div className="form-group">
									<textarea name="" id="" cols="30" rows="5"></textarea>
									<label htmlFor="" className="msg">
										MESSAGE
									</label>
								</div>
								<button className="theme-btn">SUBMIT</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
