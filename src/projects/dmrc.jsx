import banner from '../assets/projects/dmrc/banner.png';
import icon from '../assets/projects/dmrc/icon.png';
import fieldStudy from '../assets/projects/dmrc/fieldstudy.png';
import dataAnalysis from '../assets/projects/dmrc/dataAnalysis.png';
import initialIdea from '../assets/projects/dmrc/initialIdea.png';
import lofi from '../assets/projects/dmrc/lofi.png';
import search1 from '../assets/projects/dmrc/search1.gif';
import search2 from '../assets/projects/dmrc/search2.gif';
import menu from '../assets/projects/dmrc/menu.png';
import nearestStation from '../assets/projects/dmrc/nearestStation.png';
import stationInfo from '../assets/projects/dmrc/stationInfo.png';
import metroMap from '../assets/projects/dmrc/metroMap.gif';
import recharge from '../assets/projects/dmrc/recharge.png';
import tarun from '../assets/projects/optimize/tarun.svg';
import shruti from '../assets/projects/optimize/shruti.svg';
import lisa from '../assets/projects/optimize/lisa.svg';
import listIcon from '../assets/projects/dmrc/listicon.svg';
import { useEffect } from 'react';
import optimize from '../assets/projects/optimize/optimize.png';
import { Heading } from '../Components/Heading';
import { Information } from '../Components/Information';
import { SubHeading } from '../Components/SubHeading';
import { ListElement } from '../Components/ListElement';
import { NextUpTile } from '../Components/NextUpTile';
import { ProjectBrief } from '../Components/ProjectBrief';
import Navbar from '../Components/navbar';

export default function DMRC(props) {
    useEffect(() => {
        document.body.style.background = '#EEF2F5';
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="">
            <Navbar />
            <div className={`h-screen w-full bg-projectWhite flex justify-center items-center`}>
                <div className="w-3/5">
                    <img src={banner} className="w-full mx-auto" alt="" srcset="" />
                </div>
            </div>
            {/* black box 1 */}
            <ProjectBrief projectName="DMRC APP REVAMP" icon={icon} paragraph1="A large population in Delhi depends on the Delhi metro for their commute. This project aims to improve the Delhi Metro mobile application to enhance the user’s metro experience in terms of comfort, cost, convenience (with a special focus on last-mile connectivity); and eventually motivate more users to choose the metro as their preferred mode of travel." paragraph2="This project was undertaken in the Human-Computer Interaction course under the guidance of Dr. Pushpendra Singh at Indraprastha Institute of Information Technology, Delhi." timeline="May 2020 - August 2020" roles={['Product Designer', 'UI-UX Designer', 'Interaction Designer']} team={['User Researcher (2)', 'UI Designer', 'Me']} totalMembers={4} />
            <div className="mx-15p">
                <Heading text="Gathering Data" />
                <SubHeading text="ONLINE SURVEYS" />
                <Information text="To start digging into the problem space, we surveyed 66 people who had experienced either traveling in the Delhi metro or with the Delhi Metro Rail Corporation(DMRC) App or both. The objective of the online survey was to gather people’s metro usage frequency, preferences/habits, and their pains/motivations for using the app. This produced several interesting findings." />

                <ListElement information="75% of the surveyed individuals were frequent users of the Delhi metro while only 16% of the people used the DMRC app or even knew about it." />
                <ListElement information="Most of the app users found it hard to use or understand due to its UI and usability shortcomings." />
                <ListElement information="Among the demotivation, we found that people had no information on the app regarding last-mile connectivity as a result of which were not confident to use the metro to go to new places. " />
                <ListElement information="The app also lacked a structured train schedule and information regarding delays which were frustrating for the users. " />

                <SubHeading text="INFORMAL INTERVIEWS" />
                <Information text="Semi-structured interviews were conducted to gain further insights into the user’s mind. This was what they had to say" />
                <div class="grid sm:grid-cols-3 gap-x-16 gap-y-14 font-bold my-6">
                    <div>“CABS ARE PREFERABLE IN GROUP TRAVEL, OR FOR SHORTER DISTANCES WHEN THE DIFFERENCE IN FARE ISN’T TOO MUCH”</div>
                    <div>“PREFER USING METRO FOR LONGER DISTANCES SINCE SAVINGS ARE MORE”</div>
                    <div>“FEEL MORE SECURE WHILE TRAVELLING IF INFORMATION ABOUT THE DESTINATION/ROUTE IS EASILY AVAILABLE”</div>

                    <div>“WOULD FEEL MORE SECURE USING THE METRO IF LAST MILE CONNECTIVITY IS PROVIDED”</div>
                    <div>“WOULD WANT TO KNOW INFORMATION ABOUT AND METRO ROUTES”</div>
                    <div>“WILL BE MORE LIKELY TO USE THE METRO IF LAST MILE CONNECTIVITY INFORMATION IS PROVIDED”</div>

                    <div>“WILL BE WILLING TO ANSWER LAST MILE CONNECTIVITY QUESTIONS FOR REWARDS”</div>
                    <div>“WHY AREN’T ANY SCHEDULES PROVIDED. HOW DO I CHECK IF A THE NEXT TRAIN IS DELAYED”</div>
                    <div>“WOULD LOVE IT IF I KNOW WHICH GATE LEADS TO WHERE INSTEAD OF LOOKING AT BOARDS. WHERE ARE THE BATHROOMS?”</div>
                </div>

                <SubHeading text="THINK ALOUD SESSIONS" />
                <Information text="3 users were given simple tasks to perform on the existing DMRC app and observed." />
                <div class="grid sm:grid-cols-3 gap-x-16 gap-y-14 font-bold my-6">
                    <div>“ANNOYING UI, TOUGH TO NAVIGATE!”</div>
                    <div>“OLD LAYOUT, LOOKS LIKE A TYPICAL GOVERNMENT APP!”</div>
                    <div>“VISUALLY UNAPPEALING...”</div>

                    <div>“BACK AND HOME BUTTONS TOO SMALL”</div>
                    <div>“THESE TIMINGS ARE WRONG, THE CROSSOVER AT KALKAJI MANDIR IS WAY MORE!”</div>
                    <div>“HOW DO I FIND THIS STATION? WHERE IS THE ROUTE SECTION?”</div>

                    <div>“THIS NEEDS INFORMATION ABOUT THE TOILETS AND GATES”</div>
                </div>

                <SubHeading text="PERSONAS" />
                <div className="flex space-x-14 sm:flex-row flex-col items-end">
                    <Personas svg={tarun} name="Frequent User" additionalInfo="Wants to be cost-effective and punctual. Wants the application to give them the most efficient route." />
                    <Personas svg={shruti} name="Occasional User" additionalInfo="Cannot cross-check information, as not well-versed with routes. Needs reliable information." />
                    <Personas svg={lisa} name="Convenience User" additionalInfo="Would want to use the metro if the availability of information was much more convenient." />
                </div>

                <SubHeading text="FIELD STUDY" />
                <Information text="We visited the station Kalkaji Mandir situated near our university to note the sort of information that may be required by the average user for a more informed and enhanced app experience." />
                <img src={fieldStudy} alt="" className="my-4 w-full" />
                <ListElement information="Information related to exit gates and their respective landmarks, platform interchange distance and time, location of lifts, stairs, and escalators, and toilets." />
                <ListElement information="Predicted times at which the station might face crowding causing low availability of seats." />
                <ListElement information="Kind of last-mile connectivity available outside stations, like e-bikes, auto-rikshaws, taxis, etc. " />
                <ListElement information="Schedules of train arrivals and intervals along with any unforeseen delays or breakdowns." />
            </div>
            {/* Black box 2 */}
            <div className="bg-black text-white px-15p py-16 my-16">
                <Heading text="Data Analysis" />
                <Information text="After we had completed our research on gathering problems and background knowledge, it was time to analyze the information in order to converge into relevant solutions." />
                <p className="uppercase mt-12 mb-5 text-white text-opacity-60">Features and PRIORITIzATION</p>
                <Information text="A priority list of the identified features was created using the ratings given by 35 users. Top features were-" />
                <div className="sm:w-5/6 w-full mx-auto">
                    <ListElement information="INFORMATION ABOUT GATES AND LANDMARKS." />
                    <ListElement information="ALTERNATE STATIONS FOR THE SAME DESTINATION, KEEPING IN MIND THE MOST CONVENIENT LINE, INTERCHANGES, LAST-MILE CONNECTIVITY, ETC." />
                    <ListElement information="ALTERNATE ROUTES TO THE SAME STATION, KEEPING IN VIEW THE INTERCHANGES, ETC." />
                    <ListElement information="INFORMATION AND SUGGESTIONS ABOUT LAST-MILE CONNECTIVITY (WALKING, AUTO, ETC.)" />
                    <ListElement information="ESTIMATED TIME INCLUDING INTERCHANGE(S) TIME." />
                    <ListElement information="PLAN YOUR ROUTE/TRIP TO BE ABLE TO ADD STOPS." />
                    <ListElement information="INFORMATION ABOUT DISTANCE(S) BETWEEN INTERCHANGE PLATFORMS." />
                    <ListElement information="INFORMATION ABOUT CROWD AT A PARTICULAR STATION/ IN A PARTICULAR LINE AT A SPECIFIC TIME." />
                </div>
                <p className="uppercase mt-12 mb-5 text-white text-opacity-60">CARD SORTING & THEMATIC ANALYSIS</p>
                <Information text="13 users grouped the features according to their understanding, in order to understand which features should go together in the application." />
                <img src={dataAnalysis} alt="" className="my-4 w-full" />

                <p className="uppercase mt-12 mb-5 text-white text-opacity-60">Themes Identified</p>
                <div className="flex space-x-20 sm:flex-row flex-col items-end sm:space-y-0 space-y-12">
                    <div className="w-full text-left">
                        <p className="font-bold">PLANNING THE ROUTE/INITIAL INFORMATION</p>
                    </div>
                    <div className="w-full text-left">
                    <p className="font-bold">AFTER TRIP/ DESTINATION INFORMATION</p>
                    </div>
                    <div className="w-full text-left">
                    <p className="font-bold">OTHER INFORMATION/MISCELLANEOUS</p>
                    </div>
                </div>
            </div>
            <div className="mx-15p">

                <Heading text="The Solution" />
                <SubHeading text="INITIAL IDEA & USER FLOW" />
                <Information text="An initial outline of the application was formed." />
                <img src={initialIdea} alt="" srcset="" className="w-full my-4" />

                <SubHeading text="LOW FIDELITY PROTOTYPE & USABILITY TESTING" />
                <Information text="A wireframe for the mobile application was created and was tested by 10 users. The prototype was also evaluated using Neilsen’s Heuristics of evaluation. There were two rounds of prototyping and testing." />
                <img src={lofi} alt="" srcset="" className="w-full my-4" />

                <SubHeading text="HI-FIDELITY: FINAL PROTOTYPE" />
                <HifiHead text="Search" />
                <HifiText text="Find the optimum metro route for your destination - location or metro station." />
                <div className="mx-auto sm:w-3/4 w-full">
                    <img src={banner} alt="" />
                    <div className="flex sm:flex-row flex-col justify-between items-center">
                        <div className="flex flex-col space-y-16 sm:w-1/2">
                            <HifiText text="Optimized route suggestions incorporating last-mile connectivity." />
                            <HifiText text="Complete route description including time, cost, interchanges, and destinations on the go." />
                        </div>
                        <img src={search1} alt="" className='sm:w-1/2' />
                    </div>
                    <div className="flex sm:flex-row flex-col justify-between items-center">
                        <img src={search2} alt="" className='sm:w-1/2'/>
                        <div className="flex flex-col space-y-16 sm:w-1/2">
                            <HifiText text="Add or remove stops to incorporate detours." />
                        </div>
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col justify-between items-center">
                    <div className="flex flex-col sm:w-1/3">
                        <HifiHead text="Menu" />
                        <HifiText text="An intuitive menu which puts all your information in one place." />
                    </div>
                    <img src={menu} alt="" className='sm:w-2/3' />
                </div>

                <div className="flex sm:flex-row flex-col justify-between items-center">
                    <img src={nearestStation} alt="" />
                    <div className="flex flex-col">
                        <HifiHead text="nearest stations" />
                        <HifiText text="Find nearest metro stations based on any location." />
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col justify-between items-center">
                    <div className="flex flex-col">
                        <HifiHead text="STATION INFORMATION" />
                        <div className="flex flex-col space-y-4">
                            <HifiText text="Detailed information about all platforms at the given metro station." />
                            <HifiText text="Interchange details between lines at the metro station." />
                            <HifiText text="Complete information about gates including landmarks and last-mile connectivity. " />
                            <HifiText text="Additional information about facilities like toilets, elevators, etc." />
                        </div>
                    </div>
                    <img src={stationInfo} alt="" className='sm:w-1/3' />
                </div>

                <div className="flex sm:flex-row flex-col justify-between items-center">
                    <img src={metroMap} alt="" className="w-1/3" />
                    <div className="flex flex-col">
                        <HifiHead text="METRO MAP" />
                        <HifiText text="Easily navigable map of the entire Delhi Metro network." />
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col justify-between items-center sm:my-64">
                    <img src={recharge} alt="" className='sm:w-1/2 sm:absolute sm:right-64' />
                    <div className="flex flex-col sm:relative z-50">
                        <HifiHead text="METRO CARD RECHARGE" />
                        <HifiText text="Hassle-free online recharge for your metro card." />
                    </div>
                </div>
                <Heading text="Learnings and Takeaways" />
                <Information text="While trying to enhance the user experience of a product or an app, it is important to consider expanding the scope at times to not just the in-app experience but to the entire service. Our detailed research into finding pain points of the app users led us to discover certain key issues with traveling in the Delhi Metro in general. This drove us towards focusing on the last-mile connectivity problem. Just providing simple information about the transportation available at the station exit gates made people feel much more confident about using that particular station or the metro in general, especially when traveling to new locations." />
                <Information text="The field study also proved to be extremely beneficial as it made us realize the possible use cases of the DMRC app while traveling. " />
            </div>
            <div className="bg-black px-15p py-16 mt-16">
                <p className="text-white text-base mb-14 text-opacity-60 uppercase">next up</p>
                <div className="flex justify-center">
                    <NextUpTile id="optimize" title="Optimize" image={optimize} color="projectBlue" />
                </div>
            </div>
        </div>
    );
}

function HifiHead(props) {
    return (
        <div className="my-5 flex text-black font-bold uppercase text-base items-center space-x-5">
            <img src={listIcon} alt="" srcset="" className="h-4 fill-current stroke-current" />
            <p>{props.text}</p>
        </div>
    )
}

function HifiText(props) {
    return (
        <p className="text-black text-opacity-50 leading-10">{props.text}</p>
    )
}

function Personas(props) {
    console.log(props.list);
    return (
        <div className="sm:w-1/3 w-full flex flex-col mt-8">
            <div className="mx-auto flex flex-col items-center">
                <img src={props.svg} alt="" className="mb-2" />
                <p><span className="font-bold">{props.name}</span>, {props.age}</p>
                <p className="text-opacity-50 text-black capitalize">{props.subtitle}</p>
            </div>
            <div className="py-4">
                {/* {props.list.map((x) => <ListElement information={x} />)} */}
            </div>
            <Information text={props.additionalInfo} />
        </div>
    )
}