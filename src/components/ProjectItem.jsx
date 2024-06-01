import { useState } from 'react';
import ALink from "../shared/ALink";
import Tech from "./Tech";

const ProjectItem = ({ title, description, link, codeLink, techImages, img1, img2, accountInfo }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex flex-row border border-gray-800 rounded-xl items-center gap-5 p-5'>
            <div className="hidden md:block transition-all duration-500 ease-in-out transform hover:scale-105">
                <img
                    src={isHovered ? img2 : img1}
                    width="1000px"
                    alt={`${title} Image`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-lg font-bold'>{title}</p>
                <p>{description}</p>
                {accountInfo && (
                    <div className="space-y-1">
                        {Object.entries(accountInfo).map(([key, value]) => (
                            <p key={key}><span className="font-bold">{key}:</span> {value}</p>
                        ))}
                    </div>
                )}
                <div className='flex flex-row gap-2'>
                    {link && <ALink style={true} href={link} newtab={true}>Live Demo</ALink>}
                    <ALink style={true} href={codeLink} newtab={true}>Code</ALink>
                </div>
                <Tech images={techImages} />
            </div>
        </div>
    );
};

export default ProjectItem;
