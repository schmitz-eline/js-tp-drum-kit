(
    function () {
        const drumKit = {
            divKeyElements: document.querySelectorAll('.key'),
            initData() {
                for (const audioElementHTML of document.querySelectorAll('audio')) {
                    this.audios[audioElementHTML.dataset.key] = {
                        div: document.querySelector(`div[data-key=${audioElementHTML.dataset.key}]`),
                        audio: audioElementHTML
                    };
                }
            },
            init() {
                document.documentElement.classList.add('js-enabled');
                this.audios = {};
                this.initData();
                console.log(this.audios);
                this.addEventListeners();
            },
            removeClasses(event) {
                if (event.propertyName === 'transform') {
                    document.body.classList.remove(event.currentTarget.dataset.key);
                    event.currentTarget.classList.remove('playing');
                }
            },
            addClasses(letter) {
                if (Object.keys(this.audios).includes(letter)) {
                    this.audios[letter].audio.play();
                    this.audios[letter].div.classList.add('playing');
                    document.body.classList.add(letter);
                }
            },
            addEventListeners() {
                for (const divKeyElement of this.divKeyElements) {
                    divKeyElement.addEventListener('transitionend', (event) => {
                        this.removeClasses(event);
                    });
                    divKeyElement.addEventListener('click', (event) => {
                        this.addClasses(event.currentTarget.dataset.key);
                    });
                }
                window.addEventListener('keydown', (event) => {
                    this.addClasses(event.key);
                });
            }
        }
        drumKit.init();
    }
)();