

const Hero = () => {
    return (
        <hero class="w-full h-[400px] md:h-[800px] bg-cover bg-center   flex items-end"

            style={{
                backgroundImage: 'url("https://www.apple.com/v/home/ce/images/heroes/mothers-day-2025/hero_md25__ca4cocy2qlv6_large.png")',

            }}

        >
            <div class="w-fit h-fit mx-auto mb-5 flex flex-col gap-1 md:mb-12">
                <h1 class="text-center font-medium text-xl md:text-5xl text-black">Mother's day</h1>
                <h2 class="font-light md:text-3xl text-black">It's not too late to find the perfect gift for Mom</h2>
                <button class="block mx-auto bg-blue-700 text-white p-4 px-4 py-4 rounded-full hover:bg-blue-500">Shop</button>
            </div>


        </hero>
    );
};


export default Hero;