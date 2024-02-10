export default function Tech({ images }) {
    return (
        <div className='flex flex-row gap-2 items-center'>
            <p className='font-bold text-sm'>Technology : </p>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Tech ${index}`} className='h-6 w-6' />
            ))}
        </div>
    );
}
