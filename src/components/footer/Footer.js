import React from "react";
import "./footer.scss";
const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="footer-wrapper">
					<div className="copyright-text">
						<p className="para">
							Copyright &copy;2021, gunalbondre - All Rights Reserved
						</p>
					</div>
					<div class="social-list">
						<a href="#">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#">
							<i class="fab fa-instagram"></i>
						</a>
						<a href="#">
							<i class="fab fa-twitter"></i>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
