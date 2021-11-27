import banner from '../assets/projects/storeinstore/banner.png';
import icon from '../assets/projects/storeinstore/icon.svg';
import dmrc from '../assets/projects/dmrc/dmrc.png';
import optimize from '../assets/projects/optimize/optimize.png';
import designProcess from '../assets/projects/storeinstore/designProcess.svg';
import problemSpace from '../assets/projects/storeinstore/problemSpace.png';
import failedExperiment from '../assets/projects/storeinstore/failedExperiment.png';
import landingPage from '../assets/projects/storeinstore/landingPage.png';
import lofi from '../assets/projects/storeinstore/lofi.png';
import hifi1 from '../assets/projects/storeinstore/hifi1.png';
import hifi2 from '../assets/projects/storeinstore/hifi2.png';
import hifi3 from '../assets/projects/storeinstore/hifi3.png';
import hifi4 from '../assets/projects/storeinstore/hifi4.png';
import hifi5 from '../assets/projects/storeinstore/hifi5.png';
import { BsFillCompassFill } from 'react-icons/bs';
import {HiAdjustments} from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillEye, AiFillStar } from 'react-icons/ai';
import { useEffect } from 'react';
import { Heading } from '../Components/Heading';
import { Information } from '../Components/Information';
import { SubHeading } from '../Components/SubHeading';
import { ListElement } from '../Components/ListElement';
import { NextUpTile } from '../Components/NextUpTile';
import { ProjectBrief } from '../Components/ProjectBrief';
import Navbar from '../Components/navbar';

export default function StoreInStore() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.background = null;
      }, []);
    return (
        <div>
            <Navbar />
            <div className={`h-screen w-full bg-projectOrange flex justify-center items-center`}>
                <div className="w-3/5">
                    <img src={banner} className="w-full" alt="" srcset="" />
                </div>
            </div>
            <ProjectBrief projectName="Store in Store" icon={icon} paragraph1="Store in Store is a B2B application designed for small businesses i.e producers and store owners, to find compatible business partners and grow through cooperation while providing sustainable delivery option." paragraph2="This project was an outcome of a three-month intensive international training program offered by the Digital Product School in Munich, Germany, and company partners - AISIN (a Japanese corporation that develops and produces components and systems for the automotive industry, and are the chief suppliers for Toyota)." timeline="May 2021 - August 2021" roles={['Product Designer', 'Interaction Designer', 'User Researcher', 'UI and Visual Designer']} team={['Product Manager', 'Software Development Engineers (2)', 'AI Engineer', 'Me']} totalMembers={5} />
            <div className="mx-15p">
                <SubHeading text="Problem statement" />
                <Information text="AISIN’s innovation team required a digital product that could enhance the delivery experience for online shoppers of local goods through a sustainable solution and improved logistics between stakeholders." />
                <Information text="They also pointed us towards extant problems like lack of a local community for businesses and excess traffic due to increasing delivery vehicles in the city. " />
                <SubHeading text="The design process" />
                <Information text="
        Since we had just 3 months to provide a working prototype to our company partners, we required a highly efficient design process and also be vigilant about our time invested in each part of the process." />
                <p className="leading-loose">
                    We chose to implement key features of the <span className="font-bold">Double-Diamond Theory</span> - Discovery, Definition, Ideation, and Implementation, while being encouraged, by our mentors to adopt a Lean Startup mechanism in an Agile framework.
                </p>
                <img src={designProcess} alt="" srcset="" className="my-8" />
                <Heading text="Understanding The Problem Space" />
                <p className="leading-loose">
                    The first three of weeks of the timeline were reserved entirely for research. To find out possible directions to take and questions to answer, we conducted a <span className="font-bold">speed storming session</span>, based purely on first impressions of the problem statement. We used it further to find patterns and identify possible <span className="font-bold">stakeholders</span>.
                </p>
                <img src={problemSpace} className="mx-auto my-8" alt="" srcset=" " />
                <Information text="With our stakeholders identified, we started gathering insights and user pain points, through user interviews and surveys. We primarily interviewed end-users regarding purchase of local products online and stakeholders directly associated with the delivery of products i.e local businesses. Upon synthesizing our findings and pain points into patterns using empathy mapping and bull’s eye prioritization we found-" />
            </div>
            <div className="bg-black text-white px-15p py-16 my-16">
                <p className="uppercase mb-5 text-white text-opacity-60">
                    End-users
                </p>
                <ListElement information="Generally concerned about the quality and accuracy of the product ordered online." />
                <ListElement information="Scared of buying the wrong product as returning products online can be a hassle." />
                <ListElement information="Specific local shops that have high-quality products don’t deliver home, and their shops are far from their homes." />
                <ListElement information="Have to rely on known brands as they cannot check the quality before ordering." />
                <p className="uppercase mt-12 mb-5 text-white text-opacity-60">
                    Local businesses
                </p>
                <ListElement information="Local store owners have excess space in shops that are underutilized." />
                <ListElement information="Products cannot be displayed at supermarkets due to high premiums." />
                <ListElement information="Businesses find it hard to set up shop due to exorbitantly high rent." />
            </div>
            <div className="mx-15p">
                <Heading text="Moving Towards The Solution" />
                <p className="leading-loose">
                    Once we understood the pain points of the stakeholders involved in the problem space, we moved towards brainstorming possible solutions that could address some of these issues. We adopted the Lean Startup methodology to <span className="font-bold">fail fast</span> which meant getting out of the planning phase to the testing phase, by creating <span className="font-bold">Minimum Viable Experiments or MVEs.</span>
                </p>
                <SubHeading text="how might we..." />
                <Information text="make local products more appealing (than big brands and retail giants) to end-users in order to stimulate local businesses while providing them with a sustainable delivery option?" />
                <SubHeading text="a failed experiment" />
                <Information text="We tried to gauge users’ interest in a new online shopping-delivery service that focussed on eco-friendly deliveries. This service could pick up products from different locations and deliver them to the doorstep via an optimized route. This would also reduce over traffic and half-empty delivery vans. However, the delivery time would increase. The reduced Carbon Footprint impact would also be shared with the users." />
                <img src={failedExperiment} className="mx-auto my-8" alt="" srcset=" " />
                <Information text="This solution was not very well received and we found new information from testing and feedback." />
                <ListElement information="Users didn’t care deeply about their carbon footprint and wanted their products faster." />
                <ListElement information="They would be interested in sustainability if it wasn’t at the cost of time and efficiency." />
                <ListElement information="Businesses and stores are also liable to deliver products fast." />
                <ListElement information="Most local businesses rely solely on walk-in customers as they have perishable goods." />
                <SubHeading text="THE EXPERIMENT THAT WORKED - A HONEY POT LANDING PAGE" />
                <Information text="Our failed experiment made us realize that users are so used to super-fast “express” deliveries that any radical change in that experience or delay would be met with criticism. " />
                <Information text="Our next experiment tried to tackle other pain points that existed for local businesses. One that could make efficient use of the extra space that stores had while helping smaller businesses find an appropriate opportunity to grow." />
                <p className="mt-12">The key idea was simple.</p>
                <p className="leading-loose text-xl mb-8 font-bold">A platform for local store owners and local producers that helped them find their Ideal Match. </p>
                <Information text="We designed a simple landing page experiment for this and ran an Instagram ad campaign targeting small businesses and store owners." />
                <img src={landingPage} className="w-full my-8" alt="" srcset=" " />
                <div className="flex flex-row-reverse">
                    <button className="px-8 bg-black text-white py-1.5 rounded-lg hover:bg-orange-400 transform hover:scale-105">
                        Visit site
                    </button>
                </div>
                <Information text="As the scope of the experiment was small, we asked the visitors relevant questions regarding their products and stores and dId manual matching of businesses behind the scenes based on key metrics like similarity of themes and the space available. Finally, we sent them a list of relevant businesses by email. " />
                <Information text="Our concept tested successfully once we got a couple of businesses interested in forming a partnership. " />

                <Heading text="Next Step - MVP" />
                <p className="leading-loose">After validating our problem space and hypothesis, we narrowed down on the most necessary features for the product to make a <span className="font-bold" >viable, feasible, and desirable </span> solution through continuous iterations of interviewing, prototyping and testing.</p>
                <SubHeading text="SKETCHES" />
                <img src={lofi} className="w-full my-8" alt="" srcset=" " />
            </div>
            <div className="bg-black text-white px-15p py-16 my-16">
                <Information text="The MVP eventually took the shape of a digital web-based digital platform that allowed local producers and store owners to set up attractive profiles and choose their businesses partners based on their needs. " />
                <ListElement information="Producers could search for stores with extra space to display their products. This would ease their way into the market by removing obstacles like high rent to set up shop or high premiums to display at supermarkets or retail-chains." />
                <ListElement information="This would also help increase the reach of the products across the city of Munich in various stores, than having a single outlet. This meant end-users could now potentially find these products at their nearby local stores which would reduce delivery costs. Further,  end-users could now check the quality or fit of the product in person, before paying for it." />
                <ListElement information="Local stores also benefit as this provides them with an opportunity to use their empty shelves or space for additional income, while also providing a new product to boost their traction." />
            </div>
            <div className="mx-15p">
                <SubHeading text="hi-fidelity prototype" />
                <div className="w-full">
                    <div className="flex text-projectOrange space-x-4 items-center">
                        <span className="font-bold uppercase text-projectOrange">onboarding | profile settings</span>
                        <div className="text-xl"><HiAdjustments /></div>
                    </div>
                    <img src={hifi1} className="w-full my-8" alt="" srcset=" " />
                </div>
                <div className="w-full">
                    <div className="flex text-projectOrange space-x-4 items-center">
                        <span className="font-bold uppercase text-projectOrange">Preview Profile | Profile View</span>
                        <div className="text-xl"><AiFillEye /></div>
                    </div>
                    <img src={hifi2} className="w-full my-8" alt="" srcset=" " />
                </div>
                <div className="w-full">
                    <div className="flex text-projectOrange space-x-4 items-center">
                        <span className="font-bold uppercase text-projectOrange">Explore Local Stores</span>
                        <div className="text-xl"><BsFillCompassFill /></div>
                    </div>
                    <img src={hifi3} className="w-full my-8" alt="" srcset=" " />
                </div>
                
                <div className="w-full">
                    <div className="flex text-projectOrange space-x-4 items-center">
                        <span className="font-bold uppercase text-projectOrange">Recommendations</span>
                        <div className="text-xl"><AiFillStar /></div>
                    </div>
                    <img src={hifi4} className="w-full my-8" alt="" srcset=" " />
                </div>
                
                <div className="w-full">
                    <div className="flex text-projectOrange space-x-4 items-center">
                        <span className="font-bold uppercase text-projectOrange">Recommendations</span>
                        <div className="text-xl"><FaShoppingCart /></div>
                    </div>
                    <img src={hifi5} className="w-full my-8" alt="" srcset=" " />
                </div>
                <Heading text="Learnings and Takeaways" />

                <Information text="The most important takeaway from the entire three-month training experience for me was the realization that even though the problem statement may sometimes almost certainly point towards a very intuitive and conspicuous solution, it is not necessary that, such a solution would work in the given situation or context." />

                <Information text="Cultural differences among users belonging to different areas may lead to completely aberrant pathways in the way they interact with a product or even form mental models of it. For example, in contrast to India, end users in Germany did not care about the cost of delivery at all but were primarily interested in how fast their order would reach them." />
                <div className="my-8"></div>
                <Information text="Another thing to note was the importance of learning to fail hard and fail fast, in order to gain from it and look at newer perspectives." />
            </div>
            <div className="bg-black px-15p py-16 mt-16">
                <p className="text-white text-base mb-14 text-opacity-60 uppercase">next up</p>
                <div className="flex justify-between space-x-4">
                    <NextUpTile id="dmrc" title="DMRC App Revamp" subtitle="Redesigning the existing DMRC app experience" image={dmrc} color="projectWhite" />
                    <NextUpTile id="optimize" title="Optimize" subtitle="Experience the future of working out at home" image={optimize} color="projectBlue" />
                </div>
            </div>
        </div>
    );
}
