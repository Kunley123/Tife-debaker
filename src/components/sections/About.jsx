import aboutImg from '../../assets/images/IMG_0839.PNG'


export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl w-full mx-auto px-4">

                <div className="flex flex-row rounded-xl p-8 border-black/10 border  transition-all hover:shadow-lg">
                    <div className="flex flex-col pt-3">
                        <h2 className="text-3xl font-bold mb-8 text-[#3e2c23] md:text-6xl text-center">
                            About Us
                        </h2>
                        <p className="text-[#6b5a4c] ml-10">
                            We are dedicated to creating delicious pasteries using the finest ingredients and recipe. <br />My story began with a passion for baking and a leve for sweet treats.

                        </p>
                    </div>

                    <img src={aboutImg} className=" ml-10 pb-10 w-full h-auto md:w-1/2" alt="image" />
                </div>
            </div>
        </section>
    )
}