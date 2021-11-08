import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin.js'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollTrigger)
