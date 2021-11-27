import banner from '../assets/projects/rangde/banner.png';
import onboarding from '../assets/projects/rangde/onboarding.png';
import dashboard from '../assets/projects/rangde/dashboard.png';
import alignment from '../assets/projects/rangde/alignment.png';
import decision from '../assets/projects/rangde/decision.png';
import investPage from '../assets/projects/rangde/investPage.png';
import kyc1 from '../assets/projects/rangde/kyc1.png';
import kyc2 from '../assets/projects/rangde/kyc2.png';
import kyc3 from '../assets/projects/rangde/kyc3.png';
import card1 from '../assets/projects/rangde/card1.png';
import card2 from '../assets/projects/rangde/card2.png';
import card3 from '../assets/projects/rangde/card3.png';
import card4 from '../assets/projects/rangde/card4.png';
import ds1 from '../assets/projects/rangde/ds1.png';
import ds2 from '../assets/projects/rangde/ds2.png';
import ds3 from '../assets/projects/rangde/ds3.png';
import ds4 from '../assets/projects/rangde/ds4.png';
import ideation from '../assets/projects/rangde/ideation.png';
import prototyping from '../assets/projects/rangde/prototyping.png';
import dmrc from '../assets/projects/dmrc/dmrc.png';
import storeinstore from '../assets/projects/storeinstore/storeInStore.png';
import icon from '../assets/projects/rangde/icon.svg';
import { useEffect } from 'react';
import { Heading } from '../Components/Heading';
import { Information } from '../Components/Information';
import { SubHeading } from '../Components/SubHeading';
import { ListElement } from '../Components/ListElement';
import { NextUpTile } from '../Components/NextUpTile';
import { ProjectBrief } from '../Components/ProjectBrief';
import Navbar from '../Components/navbar';

export default function RangDe() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.background = null;
      }, []);
    return (
        <div>
            <Navbar />
            <div className={`h-screen w-full bg-projectPurple flex justify-center items-center`}>
                <div className="w-3/5">
                    <img src={banner} className="w-full" alt="" srcset="" />
                </div>
            </div>
            <ProjectBrief projectName="Rang De" icon={icon} paragraph1="Rang De is India’s first peer-to-peer social investment platform, that aims to provide loans to the millions of Indians who either cannot afford or are denied credit by the banks. By tapping into the power of many, and decentralising the source of funds, the mission is to significantly reduce interest rates on loans." paragraph2="I joined Rang De as UX Designer to give enhance the app and web platforms and soon took a lead role in shaping the future of this product on the digital front." timeline="September 2021 - Ongoing" roles={['User Experience Designer', 'User Researcher', 'Interaction Designer', 'UI and Visual Designer']} team={['Product Managers (App + Web)', 'Software Development-Engineers', 'Associate UI Designer', 'Me' ]} totalMembers={4} buttonComponent={<button className="px-8 bg-projectPurple text-black py-1.5 rounded-lg transform hover:scale-105">
                    Website
                </button>} />
            <div className="mx-15p">
                <SubHeading text="More about my role" />
                <p className="leading-loose mb-8">
                    When I became a part of Rang De, the product, especially the app was undergoing major upscaling, redesign and rebranding. The job was as demanding as it was thrilling and fulfilling.
                    I underwent serious professional growth and expanded my skillset to share tasks of the Product Manager and Graphic Designer as well. I worked alongside several software developers, two Product Managers, a UI Designer, and the Growth and Engagement team.<p />
                </p>
                <p>
                    During my time at Rang De till now I have sucessfully implemented several important projects and tasks such as -
                </p>

                <ListElement title="Set up a proper design pipeline and process." information=" Before this, the company had to resort to external design agencies for the web and app designs. I was able to establish a solid structure and transparency among everyone involved in the product. This helped create a sense of direction and a better understanding between SDEs, PMs and Designers." />

                <ListElement title="App and Website Revamp." information="My arrival marked the advent of considerable changes in the product’s interface, experience and usability and consistency. In some cases pages and features underwent a complete overhaul in several installments. " />

                <ListElement title="Establishing a design system. " information="This primarily helped improving the product’s visual and interactive consistency across the website and the app, while also reducing the time spent on design and development at later stages. " />

                <SubHeading text="The design process" />
                <p className="leading-loose">At Rang De, we follow a <span className="font-bold" >modified Design Sprint</span> to address already existing issues and for the addition of innovative new experiences and interactions to enhance user experience. Our Design Sprints last for 1-2 weeks, which is longer than the typical 5-day sprint in order to put additional efforts into user research and testing prototypes. The sprints are conducted by the Sprint planners that are usually me and the product manager.  The steps involved in the process are -</p>

                <ListElement title="Alignment." information=" In this step, we discuss our issues, pain points, and reviews from our users that have been gathered since the release of the previous features. We then converge on one or more Sprint Questions that represent the problems that we try to solve using empathy mapping.  " />
                <img src={alignment} alt="" className="w-full my-8" />

                <ListElement title="Ideation." information=" Here we gather inspirations from other products and research how others solved similar problems as there is no point reinventing the wheel. Then we filter the most interesting ideas and try to merge them with our needs and our own ideas. Following this, we put our thoughts on paper to create sketches of user flows and describe how each of our ideas can potentially solve the problem. " />
                <img src={ideation} alt="" className="w-full my-8" />

                <ListElement title="Decision." information=" All the solution sketches are put up anonymously on the board and the whole team critiques each concept and the best solutions are converged upon using dot-voting. Then together, we create the ideal user-journey map. " />
                <img src={decision} alt="" className="w-full my-8" />

                <ListElement title="Prototyping." information=" The user journey is rapidly converted into prototypes on Figma. This step is almost completely done by me from designing individual elements and then stitching the steps together. " />
                <img src={prototyping} alt="" className="w-full my-8" />

                <ListElement title="Testing." information=" Finally, the PM and I together finalize the ultimate user flow and develop an interview script. User-testing is then conducted with 10-15 users that are picked from our actual users. " />
            </div>
            <div className="bg-black px-15p py-16 mt-16 text-white">
                <Heading text="Understanding The Problems" />
                <Information text="Before I had joined the company, the designs for both the app and the website were created by separate external design agencies who did not know the core values and the driving purpose of our product or the needs of the users who would be interacting with it. This led to the rise of completely different experiences for the web and the app product. The lack of consistency across the platforms had a negative effect on the brand image and also cause significant development and implementation problems. " />
                <div className="py-4"></div>
                <Information text="My first agenda at Rand De was to design a simple, clean, and consistent user experience across both the platforms - the web and the app by studying the user needs and feedback. These issues were addressed in the design sprints based on which we formalized the sprint questions that led to new features, interfaces, and interactions. " />
            </div>
            <div className="mx-15p">
                <Heading text="New Welcome Experience" />
                <SubHeading text="ONBOARDING" />
                <Information text="From analyzing user interviews, it was inferred that users are more likely to support and invest in social causes that align with their interests. A change in the onboarding approach of new users was required where they would be asked to choose their interests among a set of areas and the profiles that were shown to these users would be based on their interests. This was also done for the existing users in the form of a pop-up questionnaire. " />
                <img src={onboarding} alt="" className="mx-auto" />

                <SubHeading text="KYC Verification Flow" />
                <Information text="Since Rang De is essentially an investment platform, it has to abide by the Government’s financial regulations, Know Your Customer Verification is, therefore, a mandatory process. However, testing proved that the cumbersome and time taking verification caused a high dropout rate. A simple and more intuitive flow was thus designed to make onboarding fast. " />
            </div>
            <div className="flex w-full justify-between flex-wrap mx-auto my-8">
                <img src={kyc1} alt="" />
                <img src={kyc2} alt="" />
                <img src={kyc3} alt="" />
            </div>
            <div className="mx-15p">
                <Heading text="Investment Flow Redesign" />
                <SubHeading text="INVESTEE CARDS AND THE INVEST PAGE" />
                <Information text="One of the major challenges for the platform was to be able to display the information about the individual investees in a concise yet informative manner while providing a quick method to invest. " />
                <div className="flex w-full justify-between flex-wrap mx-auto my-8 sm:space-y-0 space-y-8">
                    <img src={card1} alt="" />
                    <img src={card2} alt="" />
                    <img src={card3} alt="" />
                    <img src={card4} alt="" />
                </div>

                <Information text="A simple card-based display system worked best for the users as it resembled the typical items display for an online shopping website. " />
                <img src={investPage} alt="" className="w-full my-8" />

                <Heading text="Dashboard" />
                <Information text="The Rang De Dashboard is the environment where a user can track the progress of his/her investments and credits while also being able the measure the magnitude of the impact that he/she has created towards a more developed India." />
                <img src={dashboard} alt="" className="w-full my-8" />

            </div>
            <div className="bg-black py-16 mt-16 text-white">
                <div className="px-15p">
                    <Heading text="A Design System" />
                    <Information text="Apart from designing a good interface and experience, it is important to maintain consistency among various platforms during scaling. As Rang De was in a state of rapid transformation, a design system was urgently required so that the Design and the Software teams could be on the same page and work more efficiently. " />
                    <Information text="I worked along with our UI Designer, Brand Manager to create the style guide while the Front-end Developers created the interaction snippets. " />
                </div>
                
                <div className="flex w-full sm:justify-start flex-wrap sm:space-y-0 space-y-8 sm:space-x-8 my-8">
                    <img src={ds1} alt="" />
                    <img src={ds2} alt="" />
                </div>
                <div className="flex w-full sm:justify-end flex-wrap sm:space-y-0 space-y-8 sm:space-x-8 my-8">
                    <img src={ds3} alt="" />
                    <img src={ds4} alt="" />
                </div>
            </div>
            <div className="mx-15p">
                <Heading text="Learnings and Takeaways" />
                <div className="flex flex-col space-y-8">
                    <Information text="Being the sole UX Designer and Design Strategist can be extremely challenging and comes with its own set of learning experiences. It was the first time that my decisions were shaping the future of the product. " />
                    <Information text="One of the most important things that I have learned during my time here is that it’s impossible to create a product that appeals to every audience equally. Several targeted users may not like or understand your product. At such a time it is important to create that one persona to whom the product will definitely appeal and then shape it around them, gradually expanding it to the needs of the others. " />
                    <Information text="Further, I gained a lot of skills as a strategist and facilitator. I learned how to create and implement design systems and conduct design sprints for the organization, " />
                </div>
            </div>
            <div className="bg-black px-15p py-16 mt-16">

                <p className="text-white text-base mb-14 text-opacity-60 uppercase">next up</p>
                <div className="flex justify-between sm:space-x-4 sm:flex-row flex-col">
                    <NextUpTile id="storeinstore" title="Store in Store" subtitle="Redesigning the existing DMRC app experience" image={storeinstore} color="projectOrange" />
                    <NextUpTile id="dmrc" title="DMRC App Revamp" subtitle="Redesigning the existing DMRC app experience" image={dmrc} color="projectWhite" />
                </div>
            </div>
        </div>
    );
}


