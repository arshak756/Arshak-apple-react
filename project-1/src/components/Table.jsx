

const Table = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-6">
            <div
                className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
                style={{
                    backgroundImage:
                        'url("https://www.apple.com/v/home/ce/images/promos/macbook-air/promo_macbook_air_avail__e8ksaudoisey_large.jpg")',
                }}

            >
                <div className="w-fit h-fit mx-auto mt-6 flex flex-col gap-1 md:mt-24 md:p-4">
                    <h1 className="text-center font-semibold text-xl md:text-5xl">MacBook Air</h1>
                    <h3 className="text-center font-semibold text-xl">Sky blue colour.</h3>
                    <h3 className="text-center  font-semibold text-xl">Sky high performance with M4.</h3>
                    <div className="flex justify-center gap-4 mt-2">
                        <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">Learn more</button>
                        <button class="bg-transparent border border-blue-700 text-black px-4 py-4 p-3 mt-3 rounded-full hover:bg-blue-700 hover:text-white transition">Buy</button>
                    </div>
                </div>
            </div>


            <div
                className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
                style={{
                    backgroundImage:
                        'url("https://www.apple.com/in/home/promos/college-students/images/promo_college_students__bxqdcoxgjzw2_large.jpg")',
                }}

            >
                <div className="w-fit h-fit mx-auto mt-6 flex flex-col gap-1 md:mt-24 md:p-4">
                    <h1 className="text-center font-semibold text-xl md:text-5xl">College Students</h1>
                    <h3 className="text-center  font-semibold text-xl">Mac and iPad.</h3>
                    <h3 className="text-center  font-semibold text-xl">Major. In any field.</h3>
                    <div className="flex justify-center gap-4 mt-2">
                        <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">Learn more</button>

                    </div>
                </div>
            </div>



            <div
                className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
                style={{
                    backgroundImage:
                        'url("https://www.apple.com/v/home/ce/images/promos/ipad-air/promo_ipad_air__bfbxzvw65c02_large.jpg")',
                }}

            >
                <div className="w-fit h-fit mx-auto mt-6 flex flex-col gap-1 md:mt-24 md:p-4">
                    <h1 className="text-center font-semibold text-xl md:text-5xl">iPad air</h1>
                    <h3 className="text-center  font-semibold text-xl">Now supercharged by the M3 chip.</h3>
                    <div className="flex justify-center gap-4 mt-2">
                        <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">Learn more</button>
                        <button class="bg-transparent border border-blue-700 text-black px-4 py-4 p-3 mt-3 rounded-full hover:bg-blue-700 hover:text-white transition">Buy</button>

                    </div>
                </div>
            </div>


            <div
                className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
                style={{
                    backgroundImage:
                        'url("https://www.apple.com/v/home/ce/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_large.jpg")',
                }}

            >
                <div className="w-fit h-fit mx-auto mt-6 flex flex-col gap-1 md:mt-24 md:p-4">
                    <h1 className="text-center font-semibold text-xl md:text-5xl text-white">MacBook Pro</h1>
                    <h3 className="text-center  font-semibold text-xl text-white">A work of smart.</h3>
                    <div className="flex justify-center gap-4 mt-2">
                        <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">Learn more</button>
                        <button class="bg-transparent border border-blue-700 text-blue-700 px-4 py-4 p-3 mt-3 rounded-full hover:bg-blue-700 hover:text-white transition">Buy</button>

                    </div>
                </div>
            </div>



            <div
                className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
                style={{
                    backgroundImage:
                        'url("https://www.apple.com/v/home/ce/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg")',
                }}

            >
                <div className="w-fit h-fit mx-auto mb-6 flex flex-col gap-1 pt-20 md:pt-32 md:p-4">

                    <h1 className="text-center font-semibold text-xl md:text-5xl text-white">AirPods 4</h1>
                    <h3 className="text-center  font-semibold text-xl text-white">Iconic. Now supersonic.</h3>
                    <h3 className="text-center  font-semibold text-xl text-white">Available with Active Noise Cancellation.</h3>
                    <div className="flex justify-center gap-4 mt-2">
                        <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">Learn more</button>
                        <button class="bg-transparent border border-blue-700 text-blue-700 px-4 py-4 p-3 mt-3 rounded-full hover:bg-blue-700 hover:text-white transition">Buy</button>

                    </div>
                </div>
            </div>



            <div
                className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
                style={{
                    backgroundImage:
                        'url("https://www.apple.com/v/home/ce/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg")',
                }}

            >
                <div className="w-fit h-fit mx-auto mb-6 flex flex-col gap-1 pt-20 md:pt-32 md:p-4">

                    <h1 className="text-center font-semibold text-xl md:text-5xl text-black">
                        <span className="flex items-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                        Trade In
                        </span>
                        </h1>
                    <h3 className="text-center  font-semibold text-xl text-black">Upgrade and save.It's that easy.</h3>
                    
                    <div className="flex justify-center gap-4 mt-2">
                        <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">Get your estimate</button>
                        

                    </div>
                </div>
            </div>







        </div>





    );
};

export default Table;
