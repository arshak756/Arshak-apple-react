

const Header = () => {
    return (
        <header class="w-full h-[500px] md:h-[900px] bg-cover bg-center flex justify-center pt-16 md:pt-8"
            style={{
                backgroundImage: 'url("https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-lineup-geo-240909_big.jpg.large_2x.jpg")',

            }}

        >
            <div class="h-fit text-black space-y-3">
                <h1 class="text-xl font-medium md:text-7xl">iPhone</h1>
                <h2 class="text-xl font-medium md:text-5xl">Meet the iphone 16 family.</h2>
                <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">Learn more</button>
                <button class="bg-transparent rounded-full ml-10 px-4 py-4 border-blue-700 border-2 md:p-3 hover:bg-blue-700">Shop iphone</button>
            </div>
        </header>
    );
};

export default Header;