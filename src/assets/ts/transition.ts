import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export class TransitionLeave {
	constructor() {
		gsap.registerPlugin(ScrollToPlugin);
		gsap.set(window, { duration: 0,  scrollTo: 0 });
    // gsap.to('#app', { duration: 1, opacity: 0 });
	}
}

export class TransitionMount {
	constructor() {
		// gsap.timeline()
    //   .to(window, { opacity: 0, duration: 1 })
    //   .to(window, { opacity: 1, duration: 1 });
    // gsap.set('#app', { opacity: 0 });
    // gsap.to('#app', { duration: 1, delay: 0.5, opacity: 1 });
	}
}
