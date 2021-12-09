import rangde from '../assets/projects/rangde/rangDe.png';
import storeInStore from '../assets/projects/storeinstore/storeInStore.png';
import dmrc from '../assets/projects/dmrc/dmrc.png';
import optimize from '../assets/projects/optimize/optimize.png';
import { ProjectTile } from "./ProjectTile";
import { PassionProjectsTile } from './PassionProjectsTile';


export function RecentProjects(props) {
    return (
        <div className="bg-black w-full py-16 " ref={props.reference} >
            <p className="text-white text-base mb-14 ml-15p">My Recent Projects</p>
            <ProjectTile id="rangde" title="Rang De" subtitle="Peer-2-peer social investment" image={rangde} color="projectPurple" />
            <ProjectTile id="storeinstore" title="Store in Store" subtitle="Find your ideal business partner" image={storeInStore} color="projectOrange" />
            <ProjectTile id="dmrc" title="DMRC App Revamp" subtitle="Redesigning the existing DMRC app experience" image={dmrc} color="projectWhite" />
            {/* <ProjectTile id="maxout" title="Max Out" subtitle="Experience the future of working out at home" image={maxout} color="projectRed" /> */}
            <ProjectTile id="optimize" title="Optimize" subtitle="Make the most out of your day" image={optimize} color="projectBlue" />
            <div className="mx-15p">
                <p className="text-white text-base mt-14 mb-8">My Passion Projects</p>
                <PassionProjectsTile />
            </div>
        </div>
    );
}

