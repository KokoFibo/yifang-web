// src/scripts/scrollReveal.js
//
// Shared helpers for the "fade/slide in on scroll" pattern that used to be
// copy-pasted (with gsap.registerPlugin(ScrollTrigger) + a bespoke
// gsap.timeline/gsap.from call) into ~27 different component <script>
// blocks across the site. Import only what a component needs.

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginRegistered = false;
function ensurePlugin() {
  if (!pluginRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginRegistered = true;
  }
}

const DEFAULTS = {
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  start: "top 85%",
  toggleActions: "play none none none",
};

/**
 * Fade/slide-reveal a target (element, selector, or array of selectors)
 * the moment it scrolls into view. Pass y/x/scale/stagger/etc like a
 * normal gsap.from() call — they're merged over sensible defaults.
 *
 *   revealGroup(".stat-card", { y: 20, stagger: 0.2 });
 */
export function revealGroup(target, opts = {}) {
  ensurePlugin();
  const {
    trigger = target,
    start = DEFAULTS.start,
    toggleActions = DEFAULTS.toggleActions,
    ...rest
  } = opts;

  return gsap.from(target, {
    ...DEFAULTS,
    ...rest,
    scrollTrigger: { trigger, start, toggleActions },
  });
}

/**
 * Same idea as revealGroup, but for a component that can appear more than
 * once on a page (e.g. a repeated card): every match of `selector` gets
 * its own independent ScrollTrigger instead of sharing one.
 *
 *   revealEach(".card-text", { x: 50 });
 */
export function revealEach(selector, opts = {}) {
  ensurePlugin();
  gsap.utils.toArray(selector).forEach((el) => {
    revealGroup(el, { ...opts, trigger: el });
  });
}

/**
 * A GSAP timeline gated by a single ScrollTrigger — for sequenced,
 * multi-step reveals (header -> media -> cards, etc). Chain .from()
 * calls onto the returned timeline as usual.
 *
 *   revealTimeline("#services-section", "top 80%")
 *     .from(header, { opacity: 0, y: 30 })
 *     .from(cards, { opacity: 0, y: 40, stagger: 0.1 }, "-=0.4");
 */
export function revealTimeline(
  trigger,
  start = DEFAULTS.start,
  toggleActions = DEFAULTS.toggleActions,
) {
  ensurePlugin();
  return gsap.timeline({ scrollTrigger: { trigger, start, toggleActions } });
}

/** Endless gentle float/bob loop — floating badges, logos, icons. */
export function floatLoop(target, opts = {}) {
  gsap.to(target, {
    y: 15,
    duration: 2.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    ...opts,
  });
}
