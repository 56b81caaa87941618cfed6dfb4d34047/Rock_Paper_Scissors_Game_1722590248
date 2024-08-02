Vue.component("simple_hero_component_1722590561", {
    template: `
        <section id="hero-section" class="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 animate-gradient-x flex-1 min-h-screen">
            <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                    
                    <div id="hero-title-container-text" class="flex">
                        <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white animate-pulse transition-all duration-500">{{ heroTitle }}</h1>
                    </div>

                    <div id="hero-subtitle-container" class="flex">
                        <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl transition-all duration-500">{{ heroSubtitle }}</p>
                    </div>

                    <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div id="hero-button-1-container" class="flex">
                            <a id="hero-button-1" href="#" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-pink-600 rounded-lg sm:w-auto hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 transition-all duration-300">Play Now</a>
                        </div>

                        <div id="hero-button-2-container" class="flex">
                            <a id="hero-button-2" href="#" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-transparent border border-white rounded-lg sm:w-auto hover:bg-white hover:text-purple-800 focus:ring-4 focus:ring-purple-300 transition-all duration-300">Learn the Rules</a>
                        </div>
                    </div>
                    
                </div>
                <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img id="hero-image" src="./images/hero.png" alt="hero image">
                </div>
            </div>
        </section>            
    `,
    data() {
        return {
            heroTitle: 'Rock Paper Scissors Showdown!',
            heroSubtitle: 'The Ultimate Classic Game Reimagined',
            titles: ['Rock Paper Scissors Showdown!', 'Battle of Hands!', 'Epic RPS Duel!'],
            subtitles: ['The Ultimate Classic Game Reimagined', 'Test Your Strategy and Luck', 'Are You Ready for the Challenge?']
        };
    },
    mounted() {
        this.animateTitles();
    },
    methods: {
        // Start of animateTitles method
        animateTitles() {
            let index = 0;
            setInterval(() => {
                this.heroTitle = this.titles[index];
                this.heroSubtitle = this.subtitles[index];
                index = (index + 1) % this.titles.length;
            }, 3000);
        }
        // End of animateTitles method
    }
});