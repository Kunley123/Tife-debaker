import aboutImg from '../../assets/images/IMG_0839.PNG'


export const About = () => {
    return (
        <section id="about" className="md:min-h-screen mx-2 flex items-center justify-center py-20">

            <div className="md:mx-8 md:w-full md:max-w-5xl">
                <div className="flex flex-row rounded-xl p-8 border-black/10 border w-full mx-auto transition-all hover:shadow-lg">
                    <div className="flex flex-col w-full items-center justify-center pt-3">
                        <h2 className="text-3xl font-bold mb-2 text-[#3e2c23] md:text-6xl text-center">
                            About Us
                        </h2>
                        <p className="text-[#6b5a4c] w-full md:text-lg sm:text-sm">
                            We are dedicated to creating delicious pasteries using the finest ingredients and recipe. <br />My story began with a passion for baking and a leve for sweet treats.

                        </p>
                    </div>

                    <img src={aboutImg} className="p-4 w-[100px] md:w-[300px] h-auto object-cover" alt="image" />
                </div>
            </div>
        </section>
    )
}