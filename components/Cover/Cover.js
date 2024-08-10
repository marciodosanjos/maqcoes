import Image from "next/image"

export const Cover = ({children, background}) => {
    return (
    <>
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex center items-center">
        <Image alt="cover" src={background} fill className="mix-blend-soft-light object-cover"/>
        {children}
        </div>
    </>)
}