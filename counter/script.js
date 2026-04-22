class Counter {
            constructor() {
                this.count = 0;
                this.clickCount = 0;
                this.maxValue = 0;
                this.init();
            }

            init() {
                this.counterDisplay = document.getElementById('counter');
                this.clickCountDisplay = document.getElementById('clickCount');
                this.maxValueDisplay = document.getElementById('maxValue');
                
                document.getElementById('incrementBtn').addEventListener('click', () => this.increment());
                document.getElementById('decrementBtn').addEventListener('click', () => this.decrement());
                document.getElementById('resetBtn').addEventListener('click', () => this.reset());
                document.getElementById('randomBtn').addEventListener('click', () => this.random());
                
                // Keyboard support
                document.addEventListener('keydown', (e) => {
                    switch(e.key) {
                        case 'ArrowUp':
                        case '+':
                            this.increment();
                            break;
                        case 'ArrowDown':
                        case '-':
                            this.decrement();
                            break;
                        case 'r':
                        case 'R':
                            this.reset();
                            break;
                    }
                });
            }

            updateDisplay() {
                this.counterDisplay.textContent = this.count;
                
                // Animation effect
                this.counterDisplay.classList.add('animate');
                setTimeout(() => {
                    this.counterDisplay.classList.remove('animate');
                }, 200);
                
                this.clickCountDisplay.textContent = this.clickCount;
                this.maxValueDisplay.textContent = this.maxValue;
            }

            increment() {
                this.count++;
                this.clickCount++;
                if (this.count > this.maxValue) {
                    this.maxValue = this.count;
                }
                this.updateDisplay();
            }

            decrement() {
                this.count = Math.max(0, this.count - 1);
                this.clickCount++;
                this.updateDisplay();
            }

            reset() {
                this.count = 0;
                this.clickCount++;
                this.updateDisplay();
            }

            random() {
                this.count = Math.floor(Math.random() * 1000);
                this.clickCount++;
                if (this.count > this.maxValue) {
                    this.maxValue = this.count;
                }
                this.updateDisplay();
            }
        }

        // Initialize counter
        const counter = new Counter();