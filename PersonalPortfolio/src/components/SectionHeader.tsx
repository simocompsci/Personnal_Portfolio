type SectionHeaderProps = {
  title: string;
  eyebrow: string;
  description: string;
};
const SectionHeader = ({
    title,
    eyebrow,
    description,
}:SectionHeaderProps
) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-white text-center bg-clip-text text-transparent">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{title}</h2>
            <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">{description}</p>
        </>
    );
}

export default SectionHeader;
