import banner from '../assets/projects/optimize/banner.png';
import icon from '../assets/projects/optimize/icon.png';
import dmrc from '../assets/projects/dmrc/dmrc.png';
import maxout from '../assets/projects/maxout/maxOut.png';
import smarterTime from '../assets/projects/optimize/smarterTime.png';
import engross from '../assets/projects/optimize/engross.png';
import solution from '../assets/projects/optimize/solution.png';
import infoArch from '../assets/projects/optimize/infoArch.png';
import colorPallete from '../assets/projects/optimize/colorpallete.png';
import typography from '../assets/projects/optimize/typography.png';
import login from '../assets/projects/optimize/login.png';
import onboarding from '../assets/projects/optimize/onboarding.png';
import feed1 from '../assets/projects/optimize/feed1.png';
import notification1 from '../assets/projects/optimize/notification1.png';
import todo from '../assets/projects/optimize/todo.gif';
import home from '../assets/projects/optimize/home.png';
import home2 from '../assets/projects/optimize/home2.png';
import home3 from '../assets/projects/optimize/home3.png';
import profile from '../assets/projects/optimize/profile.png';
import statistics from '../assets/projects/optimize/statistics.gif';
import explore from '../assets/projects/optimize/explore.gif';
import designProcess from '../assets/projects/optimize/designProcess.svg';
import tarun from '../assets/projects/optimize/tarun.svg';
import shruti from '../assets/projects/optimize/shruti.svg';
import lisa from '../assets/projects/optimize/lisa.svg';
import iconography from '../assets/projects/optimize/iconography.svg';
import listIcon from '../assets/projects/optimize/listIcon.svg';
import { AiFillLike } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { BiNotepad, BiLineChart } from 'react-icons/bi';
import { ImCompass } from 'react-icons/im';
import { FiUsers, FiAward } from 'react-icons/fi';
import { useEffect } from 'react';
import { Heading } from '../Components/Heading';
import { Information } from '../Components/Information';
import { SubHeading } from '../Components/SubHeading';
import { ListElement } from '../Components/ListElement';
import { NextUpTile } from '../Components/NextUpTile';
import { Feature } from '../Components/Feature';
import { ProjectBrief } from '../Components/ProjectBrief';
import Navbar from '../Components/navbar';
import { PassionProjectsTile } from '../Components/PassionProjectsTile';
export default function Optimize() {
    useEffect(() => {
        document.body.style.background = null;
        window.scrollTo(0, 0)
    }, []);
    return (
        <div>
            <Navbar />
            <div className={`h-screen w-full bg-projectBlue flex justify-center items-center`}>
                <div className="sm:w-3/5 mt-8">
                    <img src={banner} className="w-2/3 mx-auto" alt="" srcset="" />
                </div>
            </div>
            {/* black box 1 */}
            <ProjectBrief projectName="Optimize" icon={icon} paragraph1="Optimize is a mobile application designed for mindful and productive use of time for users (especially university students), preventing excessive wastage of free time while promoting skill development and allowing the effective balance of chores.
               " paragraph2="This was an academic project pursued in the interest of the course- Design of Interactive Systems offered by my university (IIIT-Delhi), under Prof. Rajiv Ratn Shah.
               " timeline="September 2019 - December 2020" roles={['Product Designer', 'UI-UX Designer', 'User Researcher']} team={['User Researcher (2)', 'Android App Developer', 'Me']} totalMembers={4} />
            <div className="mx-15p">
                <SubHeading text="THE DESIGN PROCESS" />
                <Information text="As this was a college project, we had to discover a problem to solve on our own. We followed a proper user-centered design process from discovery to prototyping and testing." />
                <img src={designProcess} alt="" srcset="" className="my-8" />


                <SubHeading text="ETHNOGRAPHIC RESEARCH" />
                <Information text="Ethnographic research was conducted in the college of IIIT Delhi by keenly observing day-to-day issues as college students. The targeted audience for this study was users of ages 17 - 30, majorly students and young working professionals who have considerable work pressure and often find it difficult to maintain a proper work-life balance due to unnecessarily wasting free time." />


                <SubHeading text="Contextual Inquiry" />
                <Information text="Semi-structured interviews and surveys were carried out with several users to find answers to understand the context of the problem and the need to find a solution. Users were questioned on their frustrations, expectations, and needs to understand the psychology behind not working when they can, leading to possible inconveniences in the future. The questions were segregated into what, why, and how as follows." />

            </div>
            {/* Black box 2 */}
            <div className="bg-black text-white px-15p py-16 my-16">
                <div className="sm:flex flex sm:flex-row flex-col sm:space-x-12 sm:space-y-0 space-y-12">
                    <div className="sm:w-1/3 w-full">
                        <div className="mx-auto flex justify-center">
                            <span className="font-bold text-center">WHAT...</span>
                        </div>
                        <ListElement information="What are your frustrations regarding time management" />
                        <ListElement information="What actions do you take to try to manage your time" />
                        <ListElement information="What technologies do you rely on for managing time." />
                    </div>
                    <div className="sm:w-1/3 w-full">
                        <div className="mx-auto flex justify-center">
                            <span className="font-bold text-center">How..</span>
                        </div>
                        <ListElement information="How much free time do you have in a day?" />
                        <ListElement information="How often do you feel bored during the day?" />
                        <ListElement information="How many hours on average you think you waste in a day?" />
                    </div>
                    <div className="sm:w-1/3 w-full">
                        <div className="mx-auto flex justify-center">
                            <span className="font-bold text-center">WHY...</span>
                        </div>
                        <ListElement information="Why do you think you end up wasting valuable time?" />
                        <ListElement information="Why aren’t you able to manage your time and tasks well?" />
                    </div>
                </div>
                <p className="uppercase mt-12 mb-5 text-white text-opacity-60">
                    PAIN POINTS
                </p>
                <ListElement information="Students find it hard to keep track of what all they had planned to do." />
                <ListElement information="Some make a time table in their diaries, most use a standard “note taking” app. Either option is not very convenient as using diaries involve flipping pages regularly while the notes app doesn't provide enough features like allocated time, calendar and checklists." />
                <ListElement information="Most students are addicted to social media apps and knowingly waste time scrrolling due to a force of habit." />
                <ListElement information="There are a lot of productive acitivities they want//plan to do, but find it extremely overwhelming to choose among so many different websites and courses." />
            </div>
            <div className="mx-15p">
                <SubHeading text="Problem statement" />
                <Information text="How can we create a system that can serve as a means of mindful and productive use of time for users enabling them to manage hectic schedules while developing skills and pursuing interests/hobbies?" />

                <SubHeading text="FEATURES IDENTIFIED" />
                <p className="leading-10">
                    Following the interviews, the pain points of the users were prioritized using <span className="font-bold">DOT VOTING</span> and each of these pains was tackled by a feature that would potentially solve the issue.
                </p>
                <Feature icon={<BiNotepad />} boldText="To-do lists" text=" to keep track of pending work, segregate into low and high-priority tasks." />

                <Feature icon={<BiLineChart />} boldText="Statistics" text=" that record and provide insight on your progress and track your activity. " />

                <Feature icon={<span className="font-bold sm:text-2xl text-xs">AI</span>} boldText="Smart AI task scheduler" text=" that does the decision-making for you." />

                <Feature icon={<BsBellFill />} boldText="Smart reminders" text=" to notify excessive screentime. Option to restrict certain app usage time." />

                <Feature icon={<AiFillLike />} boldText="Recommendation" text=" of content based on your areas of focus and interests." />

                <Feature icon={<ImCompass />} boldText="Explore" text=" relevant courses and fields of interest to enhance your skills in your free time." />

                <Feature icon={<FiUsers />} boldText="Community Engagement" text=" to motivate users and create healthy competition." />

                <Feature icon={<FiAward />} boldText="Abstract Rewards system" text=" that acts as a catalyst and keeps you motivated to finish your tasks promptly. " />
                <div className="py-4"></div>
                <SubHeading text="PERSONAS AND SCENARIOS" />
                <div className="flex sm:space-y-0 space-y-12 sm:space-x-16 sm:flex-row flex-col py-16">
                    <Personas svg={tarun} name="Tarun" age="21" subtitle="The Lazy Scroller" list={['Spends most of his day scrolling on social media.', 'Knows that work is pilling up and feels guilty that he is wasting his precious time.', 'There is no one to keep a check on him.']} additionalInfo="Downloads the Optimize app, fills his to-do list, and syncs his calendar. The app notifies him for his excessive screen time and suggests completing pending work. He also sets a daily usage limit on Instagram." />
                    <Personas svg={shruti} name="Shruti" age="19" subtitle="Miss Undecisive" list={['Enthusiastic learner, plans to do several things.', 'But she can never decide on where to begin.', 'She ends up wasting the whole day thinking and ultimately doesn’t make any progress.']} additionalInfo="On the Optimize app, she chooses her interests and focus-areas. She can browse and choose from a repository of several courses, add it to her list. The app suggests which course would be optimal for her given the amount of time and mood with its cool feature - Opti-matic. What’s more? She earns XP with each new course completed to show off to her friends." />
                    <Personas svg={lisa} name="Lisa" age="25" subtitle="always overworked" list={['Has been facing too much pressure at her work.', 'Has no time for herself.', 'Recentlly got some time on her hands and wants to pursue some of her long forgotten hobbies. ']} additionalInfo="The Optimize app provides her with a list of recommended material based on her interests which she could complete in a short period of time. It also advises her to rest and suggests watching some videos on the importance of mental health, based on her rough schedule." />
                </div>

                <SubHeading text="COMPETITIVE ANALYSIS" />
                <Information text="It is necessary to study the competition in the market for all products and services on similar lines in order to create a product that’s different and better than the existing solutions." />

                <div className="flex my-8 sm:flex-row flex-col sm:space-x-6 items-center">
                    <div className="sm:w-1/3">
                        <img src={smarterTime} alt="" srcset="" />
                    </div>
                    <div className="sm:w-2/3 flex flex-col space-y-8">
                        <p className="font-bold uppercase">Smarter Time</p>
                        <Information text="Effective time tracking process. It’s a phone time control and focus implement. It creates a detailed time log of all your activities based on your phone usage and location." />
                        <ListElement information="A comprehensive and automatic time tracker that generates a daily timeline." />
                        <ListElement information="Movement tracker to verify the recorded task was actually performed." />
                        <ListElement information="Automatic labelling based on time spent on the activity and the location of the activity." />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col my-8 sm:space-x-6 items-center">
                    <div className="sm:w-1/3">
                        <img src={engross} alt="" srcset="" />
                    </div>
                    <div className="sm:w-2/3 flex flex-col space-y-8">
                        <p className="font-bold uppercase">Engross</p>
                        <Information text="Engross is a combination of Pomodoro Timer with a to-do list and Planner. It will help to keep your work/studies more organized and finish things faster. The 24-hour timeline is divided into different ongoing projects for which time logs need to be maintained." />
                        <ListElement information="Labelling under Projects keeps a neat and manageable to-do list" />
                        <ListElement information="A better replacement for a Calendar application as it gives a statistics record of time spent." />
                        <ListElement information="Hit me when you are distracted button resets the phone usage and gets you back to the app screen." />
                    </div>
                </div>

                <Heading text="Moving Towards The Solution- The Blueprint" />
                <SubHeading text="WHY A SMART PHONE APP?" />
                <div className="flex sm:flex-row flex-col sm:w-3/4 mx-auto justify-between items-center">
                    <div className="flex flex-col justify-between sm:mb-0 mb-8">
                        <ListElement information="Internet access to view learning content." />
                        <ListElement information="Portable device, view content on the go." />
                        <ListElement information="Keeps track of all activity and screen time by other apps." />
                    </div>
                    <img src={solution} alt="" srcset="" />
                </div>
            </div>

            <div className="bg-black py-16 mt-16">
                <p className="text-white text-base mb-14 px-15p  text-opacity-60 uppercase">INFORMATION ARCHITECTURE</p>
                <img src={infoArch} alt="" srcset="" className="mx-auto" />
            </div>
            <div className="mx-15p">
                <Heading text="The Design" />
                <SubHeading text="COLOR PALETTE" />
                <img src={colorPallete} alt="" srcset="" className="mx-auto my-16" />
                <SubHeading text="TYPOGRAPHY" />
                <img src={typography} alt="" srcset="" className="mx-auto my-24" />
                <SubHeading text="iconography" />
                <img src={iconography} alt="" srcset="" className="mx-auto my-16" />
                <SubHeading text="HI-FIDELITY PROTOTYPE" />
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center">
                    <img src={login} alt="" srcset="" className="sm:w-1/2" />
                    <div className="sm:w-1/2">
                        <HifiHead text="Login and signup" />
                        <HifiText text="Simple login and sign-up screen." />
                        <HifiText text="Just your username and password and you’re good to go.  " />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center">
                    <div className="sm:w-1/2 h-80 flex flex-col justify-between">
                        <HifiHead text="Onboarding" />
                        <HifiText text="Choose amongst a variety of interests or areas of improvement." />
                        <HifiText text="These will be used for the recommendations of learning material." />
                        <HifiText text="Complete tasks and courses to earn XP and level up!" />
                    </div>
                    <img src={onboarding} alt="" srcset="" className="sm:w-1/2" />
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center">
                    <div className="flex flex-col sm:w-1/2">
                        <img src={home} alt="" srcset="" className="w-full" />
                        <img src={home2} alt="" srcset="" className="w-full" />
                    </div>
                    <div className="flex flex-col sm:w-1/2 space-y-12">
                        <div className="w-full flex flex-col justify-between">
                            <HifiHead text="Home" />
                            <HifiText text="Can’t decide what to do with your free time? " />
                            <HifiText text="Leave it to your personal AI companion, Opti-matic to suggest tasks based on their priority, amount of time you have, and your mood!" />
                        </div>
                        <img src={home3} alt="" srcset="" className="w-full" />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center justify-between">
                    <div className="flex sm:flex-row flex-col sm:space-x-4 w-1/2">
                        <img src={feed1} alt="" srcset="" className="" />
                        {/* <img src={feed2} alt="" srcset="" className="" /> */}
                    </div>
                    <div className="sm:w-1/2">
                        <HifiText text="Switch between feed and recommended tabs to check out what your friends are up to while going through the specially curated content for you." />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center justify-between">
                    <img src={explore} alt="" srcset="" className="sm:w-1/4" />
                    <div className="sm:w-1/2">
                        <HifiHead text="Explore" />
                        <HifiText text="Simple login and sign-up screen." />
                        <HifiText text="Just your username and password and you’re good to go.  " />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center justify-between">
                    <div className="sm:w-1/2">
                        <HifiHead text="Statistics" />
                        <HifiText text="Check your daily progress in terms of XP gained." />
                        <HifiText text="Set usage reminders, time limits or simply block the apps that cause distraction, all up to you." />
                    </div>
                    <img src={statistics} alt="" srcset="" className="sm:w-1/4" />
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center justify-between">
                    <img src={todo} alt="" srcset="" className="sm:w-1/4" />
                    <div className="sm:w-1/2 sm:h-40 flex flex-col justify-between">
                        <HifiHead text="To-Do list" />
                        <HifiText text="Set tasks as urgent or trivial." />
                        <HifiText text="Sync your Google calendar with one tap and add it to your to-do list." />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center justify-between">
                    <div className="sm:w-1/2">
                        <HifiHead text="Profile" />
                        <HifiText text="Weighted distribution of your XP in various fields of interest." />
                        <div className="py-4"></div>
                        <HifiText text="Your level, total XP, and your connections form your identity on Optimize for yourself and the community." />
                    </div>
                    <img src={profile} alt="" srcset="" className="sm:w-1/4" />
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:space-x-28 items-center justify-between">
                    <div className="flex sm:w-1/2">
                        <img src={notification1} alt="" srcset="" className="" />
                    </div>
                    <div className="sm:w-1/2 sm:h-40 flex flex-col justify-between">
                        <HifiHead text="To-Do list" />
                        <HifiText text="Set tasks as urgent or trivial." />
                        <HifiText text="Sync your Google calendar with one tap and add it to your to-do list." />
                    </div>
                </div>
            </div>
            <div className="mx-15p">
                <Heading text="Learnings and Takeaways" />
                <Information text="The team was able to discover and validate pain points among college students and young working professionals. We prototyped Optimize and it underwent several rounds of testing for improving the experience and usability. However, we still faced considerable setbacks. We didn’t realize that the scope of this project was considerably large for an academic project that spanned over 3 months as a result of which the app development suffered. We were only able to develop the front-end with only a few of the intelligent functionalities that we proposed.
" />
                <Information text="It is easy to design and propose intelligent solutions but we often forget that a product needs to be viable and feasible also while being desirable. It is better to create a complete and usable product with vital functionality than to set unrealistic targets. " />
            </div>

            <div className="bg-black px-15p py-16 mt-16 w-full justify-start flex flex-col">
                <p className="text-white text-base mb-14 text-opacity-60 uppercase">next up</p>
                <PassionProjectsTile />
            </div>
        </div>
    );
}

function HifiHead(props) {
    return (
        <div className="my-5 flex text-projectBlue font-bold uppercase text-base items-center space-x-5">
            <img src={listIcon} alt="" srcset="" className="h-4" />
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
    return (
        <div className="sm:w-1/3 w-full flex flex-col  justify-start">
            <div className="mx-auto flex flex-col items-center">
                <img src={props.svg} alt="" className="mb-2" />
                <p><span className="font-bold">{props.name}</span>, {props.age}</p>
                <p className="text-opacity-50 text-black capitalize">{props.subtitle}</p>
            </div>
            <div className="my-4">
                {props.list.map((x) => <ListElement information={x} />)}
            </div>
            <Information text={props.additionalInfo} />
        </div>
    )
}