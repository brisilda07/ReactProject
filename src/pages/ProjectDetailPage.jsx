import React, {useEffect, Fragment, useState} from 'react';
import { useParams } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';

const ProjectDetailPage = () => {
    const { projectID } = useParams();
    const { projectName } = useParams();

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Fragment>
            <TopNavigation title='Project Details' />
            <PageTop pagetitle={projectName}/>
            <ProjectDetails id={projectID}  />
            <Footer />
        </Fragment>
    );
};

export default ProjectDetailPage;