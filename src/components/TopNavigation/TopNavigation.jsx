import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Affix, Image, Row, Col } from 'antd';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/custom.css';
import { NavLink } from 'react-router-dom';

const TopNavigation = ({ title }) => {
    const [navState, setNavState] = useState({
        navBarTitle: 'navTitle',
        navBarLogo: whiteLogo,
        navVariant: 'dark',
        navBarBack: 'navBackground',
        navBarItem: 'navItem',
        pageTitle: title
    });

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setNavState({
                    ...navState,
                    navBarTitle: 'navTitleScroll',
                    navBarLogo: blackLogo,
                    navBarBack: 'navBackgroundScroll',
                    navBarItem: 'navItemScroll',
                    navVariant: 'light'
                });
            } else {
                setNavState({
                    ...navState,
                    navBarTitle: 'navTitle',
                    navBarLogo: whiteLogo,
                    navBarBack: 'navBackground',
                    navBarItem: 'navItem',
                    navVariant: 'dark'
                });
            }
        };

        window.addEventListener('scroll', onScroll);
        document.title = navState.pageTitle;

        return () => {
            window.removeEventListener('scroll', onScroll);
            document.title = navState.pageTitle;
        };
    }, [navState]);

    const menuItems = [
        {
            key: 'nav1',
            label: (
                <NavLink to="/">
                    <Image src={navState.navBarLogo} />
                </NavLink>
            ),
            className: navState.navBarTitle,
        },
        { key: 'spacer', label: '', disabled: true, style: { flex: 1 } },
        { key: 'nav2', label: <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>HOME</NavLink>, className: navState.navBarItem },
        { key: 'nav3', label: <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>ABOUT</NavLink>, className: navState.navBarItem },
        { key: 'nav4', label: <NavLink to="/service" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>SERVICE</NavLink>, className: navState.navBarItem },
        { key: 'nav5', label: <NavLink to="/course" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>COURSES</NavLink>, className: navState.navBarItem },
        { key: 'nav6', label: <NavLink to="/portfolio" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>PORTFOLIO</NavLink>, className: navState.navBarItem },
        { key: 'nav7', label: <NavLink to="/contact" style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}>CONTACT US</NavLink>, className: navState.navBarItem },
    ];

    return (
        <Fragment>
            <Affix offsetTop={0}>
                <Row className={`stickyNavBar ${navState.navBarBack}`} variant={navState.navVariant}>
                    <Col span={24}>
                        <Menu
                            className={navState.navBarBack}
                            theme="dark"
                            mode="horizontal"
                            items={menuItems}
                        />
                    </Col>
                </Row>
            </Affix>
        </Fragment>
    );
};

export default TopNavigation