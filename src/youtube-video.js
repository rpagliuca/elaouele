import React from 'react';
import { Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default (props) => (
    <Row className="youtube-row">
        <Col md="12">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/IM1DDW36jo0"
                    allow="encrypted-media" allowFullScreen>
                </iframe>
            </div>
        </Col>
    </Row>
);
