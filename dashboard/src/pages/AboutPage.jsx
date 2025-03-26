import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../App';

export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: AboutPage
  })

function AboutPage() {
    const headerStyling = "text-primary text-2xl";
    const paragraphStyling = "text-md my-2";
    const paragraphSpacing = "mb-12";
    return (
        <div className="mx-8 md:mx-32">
        <div className={paragraphSpacing}>
            <h1 className={headerStyling}>What is the point of this project?</h1>
            <p className={paragraphStyling}>
                Municipal governments provide the services most likely to impact the daily 
                life of Ontarians, and yet in general municipal governments get very little 
                coverage about their decisions on what services to allocate money to.
            </p>

            <p className={paragraphStyling}>
                Even if you were to look at the proposed budget of your municipality, the numbers may seem arbitrary
                on their own. This project aims to provide an easy to use interactive dashboard that aggregates data 
                from municipalities across Ontario allowing citizens to easily compare their local communities 
                spending on the services they care about.
            </p>
        <p className={paragraphStyling}>
            This project aims to make no statement about politics. We all have differing opinions on what services
            are most important to us, and this project simply aims to provide the information required for citizens
            to come to their own conclusions.
        </p>
        </div>

        <div className={paragraphSpacing}>
        <h1 className={headerStyling}>Where is the data from?</h1>
        <p className={paragraphStyling}>
            The raw expense data that appears on this site was collected from Financial Information Returns published on
            the <a href="https://data.ontario.ca/dataset/financial-information-return-fir-for-municipalities" className="text-primary font-bold">
             Data Ontario Site</a>. 
            The population data used was gathered in Statistics Canada's 2016 Census Profile. 
        </p>
        </div>

        <div className={paragraphSpacing}>
            <h1 className={headerStyling}>Why does it say my municipality spent $0 for a category?</h1>
            <p className={paragraphStyling}>
                Many municipalities in Ontario are tiered. Meaning that a county or region above your municipality 
                may handle or contribute to a certain category. Regional Municipalities leadership is generally
                elected officials from the sub-municipalities in the region.
            </p>
        </div>

        <div className={paragraphSpacing}>
            <h1 className={headerStyling}>Final Remarks</h1>
            <p className={paragraphStyling}>
                This project was created by me as a personal project with the primary goal of developing skills while exploring a personal interest.
                While I have done my best to gather and display data accurately, there is always a chance that something may not be
                correct. If something doesn't look right I would suggest following the links to the data I have provided and pulling
                the data yourself for analysis.
            </p>
        </div>
        </div>
    )
}