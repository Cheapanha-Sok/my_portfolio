export default function Button({ onClick, children }) {
    return (
        <button className='p-2 md:px-2 md:py-3 rounded-full border-2'>
            {children}
        </button>
    )
}
