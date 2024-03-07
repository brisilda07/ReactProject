import React, {Component, Fragment} from 'react';
import {Col, Row, Typography} from "antd";

class RefundDescription extends Component {
    render() {
        return (
            <div style={{padding:'0 10%'}}>
    <Fragment>
        <Row style={{marginTop:'30px'}}>
            <Col lg={24} md={24} sm={24}>
                <Typography.Title className="serviceName" level={1}>
                    Data Protection Principles
                </Typography.Title>
                <hr />
                <p className="serviceDescription">
                    <ul>
                        <li>
                            The Data Protection Act 2018 is the UK’s implementation of the General Data Protection Regulation (GDPR).
                            <ul>
                                <li>
                                    race
                                </li>
                                <li>
                                    ethnic background
                                </li>
                                <li>
                                    political opinions
                                </li>
                            </ul>
                        </li>
                        <li>
                            There is stronger legal protection for more sensitive information, such as:
                            <ul>
                                <li>
                                    race
                                </li>
                                <li>
                                    ethnic background
                                </li>
                                <li>
                                    political opinions
                                </li>
                            </ul>
                        </li>
                        <li>
                            Under the Data Protection Act 2018, you have the right to find out what information the government and other organisations store about you. These include the right to:
                            <ul>
                                <li>
                                    be informed about how your data is being used
                                </li>
                                <li>
                                    access personal data
                                </li>
                                <li>
                                    have incorrect data updated
                                </li>
                                <li>
                                    have data erased
                                </li>
                                <li>
                                    stop or restrict the processing of your data
                                </li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p className="serviceDescription">
                   <b> Why does this principle matter?</b><br /><br />
                    It is crucial that the individual is clearly informed and aware of how their
                    data is going to be processed, and by whom. If there is an intention to share
                    the data of an individual with a third party but the data controller is not
                    transparent about this fact and the data subject is not clearly informed, it is
                    likely that their personal data was obtained unfairly, and the process will not
                    be considered transparent.<br /><br />
                    <b>For example</b><br /><br />
                    In Ireland, an insurance company contacted one of its
                    customers to inform them about a new credit card, but it was unclear to the
                    customer that it was not the insurance company who would be providing
                    the new card, but that the data was instead transferred to bank to process
                    – i.e. the bank was the data controller, but this had not been made clear to
                    the individual in the communication that they received from their insurance
                    company. It was therefore judged to have been unfairly processed.1<br /><br />
                    It is not enough to just be clear about what you are doing with people’s data,
                    but the lawful criteria included in this principle means that an entity must be
                    justified in doing so by satisfying a legal ground.<br /><br />
                    <b>39/98A Guide for Policy Engagement on Data Protection</b><br /><br />
                        PART 3: Data Protection Principles
                    All personal data should be collected for a determined, specific, and legitimate
                    purpose. Any further processing must not be incompatible with the purposes
                    specified at the outset (i.e. the point of collection). This essentially means that it is
                    not acceptable to state that you need a person’s data for one purpose, and then
                    use it for something else without notice or justification.<br /><br />
                    Technological developments (and the mass generation, collection, and analysis of
                    data which accompany them) mean that these principles are ever more important.
                    The purpose of processing and the proposed use of the data must be clearly
                    defined and explained to the data subject. If the data is to be used for a purpose
                    other than the original purpose, then the data subject should be adequately
                    informed of this and a legal condition for this processing identified; this may
                    necessitate obtaining further consent. It is particularly important that sensitive
                    personal data is not processed for purposes other than those originally specified.<br /><br />
                    This is particularly relevant to big data and other data analysis processes. For
                    example, the data broker industry thrives off the re-purposing of data:2 they amass
                    data from a vast array of sources, then compile, analyse, profile, and share insights
                    with their clients. This means that a lot of data shared for one purpose is
                    re-purposed in ways they might not expect, including targeted advertising.
                </p>

            </Col>
        </Row>
    </Fragment>
                </div>
        );
    }
}

export default RefundDescription;