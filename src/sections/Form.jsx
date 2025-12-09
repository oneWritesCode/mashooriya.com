
export default function Form() {
    return (
        <div className="relative bg-Yellow min-h-screen flex justify-center items-start p-5">
            <div className="pointer-events-none absolute h-[full] -inset-1 bg-Dark [clip-path:polygon(0_90%,100%_85%,100%_100%,0_100%)]" />
            <div className="w-full max-w-[65%] h-full md:max-w-[60%] sm:max-w-full">

                <form className="w-full flex flex-col gap-10 justify-around h-full">
                    <div className="w-full flex flex-col gap-20 justify-around h-full">

                        {/* NAME */}
                        <div className="relative border-[6px] border-Dark p-4">
                            <span className="absolute -top-12 left-3 bg-Dark text-Yellow px-4 py-2 font-bold text-2xl md:text-4xl rotate-[-6deg]">
                                NAME
                            </span>

                            <input
                                type="text"
                                placeholder="ENTER YOUR NAME"
                                className="w-full bg-transparent outline-none text-Dark text-3xl font-bold"
                            />

                            <div className="absolute left-4 right-4 bottom-4 h-[6px] bg-Dark"></div>
                        </div>

                        {/* EMAIL */}
                        <div className="relative border-[6px] border-Dark p-4">
                            <span className="absolute -top-12 left-3 bg-Dark text-Yellow px-4 py-2 font-bold text-2xl md:text-4xl rotate-[-6deg]">
                                EMAIL
                            </span>

                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="w-full bg-transparent outline-none text-Dark text-3xl font-bold"
                            />

                            <div className="absolute left-4 right-4 bottom-4 h-[6px] bg-Dark"></div>
                        </div>

                        {/* MESSAGE */}
                        <div className="relative border-[6px] border-Dark p-4 pb-6 bg-Yellow">
                            <span className="absolute -top-12 left-3 bg-Dark text-Yellow px-4 py-2 font-bold text-2xl md:text-4xl rotate-[-6deg]">
                                MESSAGE
                            </span>

                            <textarea
                                placeholder="ENTER YOUR MESSAGE"
                                className="w-full h-[200px] bg-transparent outline-none resize-y text-Dark text-3xl font-bold leading-[2.8rem]
              [background-image:repeating-linear-gradient(transparent,transparent_2.6rem, #1A2027 2.6rem, #1A2027, 3rem)] bg-local"
                            ></textarea>

                        </div>

                    </div>
                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-Dark text-Yellow md:text-5xl text-4xl font-bold py-4"
                    >
                        HIT UPP!
                    </button>

                </form>

            </div>
        </div>
    );
}
