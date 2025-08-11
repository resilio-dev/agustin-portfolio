import { Injectable } from '@angular/core';
import gsap from 'gsap';

@Injectable({ providedIn: 'root' })
export class GsapService {
  to(targets: gsap.TweenTarget, vars: gsap.TweenVars) {
    return gsap.to(targets, vars);
  }

  from(targets: gsap.TweenTarget, vars: gsap.TweenVars) {
    return gsap.from(targets, vars);
  }

  fromTo(targets: gsap.TweenTarget, fromVars: gsap.TweenVars, toVars: gsap.TweenVars) {
    return gsap.fromTo(targets, fromVars, toVars);
  }

  timeline(vars?: gsap.TimelineVars) {
    return gsap.timeline(vars);
  }
}
