import React, { Component, Fragment } from 'react';
import { Menu, Affix, Image, Row, Col } from 'antd';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/custom.css';

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarTitle: 'navTitle',
            navBarLogo: whiteLogo,
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
        };
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: blackLogo,
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
            });
        } else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: whiteLogo,
                navBarBack: 'navBackground',
                navBarItem: 'navItem',
            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {
        const menuItems = [
            {
                key: 'nav1',
                label: <Image src={this.state.navBarLogo} />,
                className: this.state.navBarTitle,
            },
            { key: 'spacer', label: '', disabled: true, style: { flex: 1 } },
            { key: 'nav2', label: 'HOME', className: this.state.navBarItem },
            { key: 'nav3', label: 'ABOUT', className: this.state.navBarItem },
            { key: 'nav4', label: 'SERVICE', className: this.state.navBarItem },
            { key: 'nav5', label: 'COURSES', className: this.state.navBarItem },
            { key: 'nav6', label: 'PORTFOLIO', className: this.state.navBarItem },
            { key: 'nav7', label: 'CONTACT US', className: this.state.navBarItem },
        ];

        return (
            <Fragment>
                <Affix offsetTop={0}>
                    <Row className={`stickyNavBar ${this.state.navBarBack}`}>
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
