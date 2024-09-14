export default function ALink({ children, href, newtab, style, download }) {

    const defaultStyle = style ? "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg dark:bg-white-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" : null
    const linkProps = newtab
        ? { target: '_blank', rel: 'noopener noreferrer', href }
        : { href };

    return (
        <a className={defaultStyle}{...linkProps} download={download ? download : null}>
            {children}
        </a>
    );
}
