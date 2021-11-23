import * as React from 'react'
import Layout from '../../components/layout'

import { Link } from 'gatsby'

const Index = () => {
    return (
        <Layout pageTitle="Who We Are">
            <h1>Who We Are</h1>
            
            <p>Raising the Floor is an international organization committed to the advancement 
                of social equity through digital inclusion. In our research, design and development 
                work we consider the full range of human diversity with respect to ability, language, 
                culture, gender, age, and other forms of human difference.</p>

            <p><Link to="/">Learn more about our mission and vision</Link></p>

            <h2>Global multi-disciplinary team</h2>
            <p>Our work is possible thanks to a global community of developers, designers, researchers, 
                advocates, companies, universities and organizations, in particular, the teams from the 
                Inclusive Design Research Center (IDRC) at OCAD University in Canada, and the Trace R&D 
                Center at the University of Maryland in the United States, to proactively ensure that 
                emerging technology and practices are designed inclusively.</p>


            <p>Integrating inclusive design and solutions not only benefits those for whom these efforts were originally designed for, but often has a greater impact on society as well.</p>

            <h2>Contribution to Standards</h2>
            <p>We support open standards, open access, and open source technology wherever possible in order to maximize distribution and to encourage broad participation.</p>

            <p>Our experts are also participating in a wide range of standardisation processes in Canadian, American and European standardisation bodies, contributing to make the world a more inclusive place to live.</p>

            <h2>Our community</h2>
            <p>The community working with Raising the Floor has grown to over 300 individuals and over 50 companies, universities and organizations. It includes people and organizations of all points of view and interests: consumers, developers, researchers, practitioners, policy people, vendors, and manufacturers of mainstream and assistive technology. They hail from all parts of the world including every continent except Antarctica.</p>

            <p><Link to="">Meet our community</Link></p>

            <h2>Divisions</h2>
            <p>There are three Raising the Floor divisions that work together to extend the reach and impact of our digital inclusion mission:</p>

            <ul>
                <li>Raising the Floor International (headquartered in Switzerland)</li>
                <li>Raising the Floor - US (Washington DC, US)</li>
                <li>Raising the Floor- EU (Brussels, Belgium)</li>
            </ul>

            <h2>Funders and supporters</h2>
            <p>Support for Raising the Floor comes from many sources, including:</p>
            <ul>
                <li>The European Commission, through large scale integrating project grants funded Cloud4all, Prosperity4All and SmartWork.</li>
                <li>The National Institute on Disability, Independent Living, and Rehabilitation Research (NIDILRR), Administration for Community Living through the Trace Center RERC on Universal Interface and Information Technology Access</li>
                <li>The Rehabilitation Services Administration of the US Department of Education - through the Trace Center Auto-Personalization Computing Project.</li>
                <li>Adobe Foundation.</li>
                <li>Consumer Electronics Foundation.</li>
                <li>IBM Corporation (in kind).</li>
                <li>Independent contributions.</li>
            </ul>
        </Layout>
    )
}

export default Index