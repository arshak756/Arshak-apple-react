

const Article = () => {
    return (
        <section class="w-full h-[400px] md:h-[800px] bg-cover bg-center   flex items-start"

            style={{
                backgroundImage: 'url("https://www.apple.com/in/home/heroes/apple-watch-family/images/hero_apple_watch_family__dktodkf3g7au_large.jpg")',

            }}

        >

            <div class="w-full max-w-screen-xl mx-auto pt-24 px-4 flex flex-col items-center text-center gap-4">
                
                <h1 class="text-5xl font-bold tracking-wide">
                    <span className="flex items-center justify-center gap-1">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                    WATCH
                    </span>
                </h1>
                <h2 class="text-5xl font-semibold md:text-xl text-black max-w-md">
                    Live healthier. Train better. Stay connected.
                </h2>
                <div class="flex gap-4 mt-4">
                    <button class="bg-blue-700 text-white rounded-full p-3 mt-3 px-4 py-4">
                        Learn more
                    </button>
                    <button class="bg-transparent border border-blue-700 text-black px-4 py-4 p-3 mt-3 rounded-full hover:bg-blue-700 hover:text-white transition">
                        Shop Watch
                    </button>
                </div>
            </div>


            

           




        </section>
           
          







    );
};

export default Article;