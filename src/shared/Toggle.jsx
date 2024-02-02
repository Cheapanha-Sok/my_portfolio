import React from 'react';

export default function Toggle({ Contents }) {
    return (
        <ul className='flex flex-col gap-1 p-2'>
            {Contents.map((content) => (
                <li key={content.name} className='hover hover:underline'>
                    <a className='uppercase' href={`#${content.name}`}>{content.name}</a>
                </li>
            ))}
        </ul>
    );
}
