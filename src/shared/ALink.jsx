export default function ALink({ children, href, newtab, style, download }) {

    const defaultStyle = style ? "text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 " : null
    const linkProps = newtab
        ? { target: '_blank', rel: 'noopener noreferrer', href }
        : { href };

    return (
        <a className={defaultStyle}{...linkProps} download={download ? download : null}>
            {children}
        </a>
    );
}
