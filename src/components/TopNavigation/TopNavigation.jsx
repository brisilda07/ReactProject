import React, { Component, Fragment } from 'react';
import { Menu, Affix, Image, Row, Col } from 'antd';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/custom.css';
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarTitle: 'navTitle',
            navBarLogo: whiteLogo,
            navVariant:"dark",
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
            pageTitle:props.title
        };
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: blackLogo,
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navVariant:'light'
            });
        } else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: whiteLogo,
                navBarBack: 'navBackground',
                navBarItem: 'navItem',
                navVariant:'dark'
            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        document.title = this.state.pageTitle; // Set the document title
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        document.title = this.state.pageTitle; // Update the document title if it changes
    }

    render() {
        const menuItems = [
            {
                key: 'nav1',
                label: <Image src={this.state.navBarLogo} />,
                className: this.state.navBarTitle,
            },
            { key: 'spacer', label: '', disabled: true, style: { flex: 1 } },
            { key: 'nav2', label: <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>HOME</NavLink>, className: this.state.navBarItem },
            { key: 'nav3', label: <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>ABOUT</NavLink>, className: this.state.navBarItem },
            { key: 'nav4', label: <NavLink to="/service" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>SERVICE</NavLink>, className: this.state.navBarItem },
            { key: 'nav5', label: <NavLink to="/course" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>COURSES</NavLink>, className: this.state.navBarItem },
            { key: 'nav6', label: <NavLink to="/portfolio" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>PORTFOLIO</NavLink>, className: this.state.navBarItem },
            { key: 'nav7', label: <NavLink to="/contact" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>CONTACT US</NavLink>, className: this.state.navBarItem },
        ];

        return (
            <Fragment>
                <Affix offsetTop={0}>
                    <Row className={`stickyNavBar ${this.state.navBarBack}`} variant={this.state.navVariant}>
                        <Col span={24}>
                            <Menu
                                className={this.state.navBarBack}
                                theme="dark"
                                mode="horizontal"
                                items={menuItems}
                            />
                        </Col>
                    </Row>
                </Affix>
            </Fragment>
        );
    }
}

export default TopNavigation;
