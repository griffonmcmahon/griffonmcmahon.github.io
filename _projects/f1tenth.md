---
layout: page
title: F1TENTH Autonomous Racing
description: First place internationally with self-driving RC cars
img: assets/img/f1tenth/thumbnail.jpg
importance: 1
category: Course-Related Projects
---




This project started as coursework and ended with a first-place finish at the F1TENTH (now [RoboRacer](https://f1tenth.github.io/)) autonomous [racing competition](https://icra2022-race.f1tenth.org/) at the International Conference on Robotics & Automation (ICRA) 2022. The F1TENTH platform is a 1/10th scale autonomous racecar; the competition involves both a time trial and head-to-head racing against an opponent, so the solution needed to go fast *and* handle adversarial situations. This was a team effort where I personally was in charge of devising and implementing new ideas to gain an edge over the competition.

<div class="row justify-content-center">
    <div class="col-md equal-height-col">
        {% include figure.liquid loading="eager" path="assets/img/f1tenth/thumbnail.jpg" title="The F1TENTH car." class="rounded z-depth-1" max-height="238" min-height="238" %}
    </div>
    <div class="col-md equal-height-col">
        {%include video.liquid loading="eager" path="assets/video/f1tenth/mpc_no_obstacles_cropped_horiz.mp4" title="MPC Working in Simulation." muted="1" loop="1" autoplay="1" class="rounded z-depth-1" max-height="238" min-height="238" %}
    </div>
</div>
<div class="caption">
    1) An F1TENTH race car, equipped with LiDAR and an NVIDIA Jetson computer. (Credit to PennToday for the image.) 2) The car in simulation using MPC to stay within the track's bounds. The receding horizon shows the ideal path as a line and the MPC-tweaked points. Color indicates the desired speed, with green being high and red being low.
</div>

The natural starting point was PID for steering, which does a remarkable amount of heavy lifting before you ever need anything fancier. For head-to-head racing, I implemented dynamically-created half-plane barriers to reason about the opposing car and decide when to overtake using a model-predictive control (MPC) scheme, seen below [here](https://youtu.be/qlxUssd7HhM). Unfortunately, the onboard NVIDIA Jetson wasn't powerful enough to handle the MPC controller I wrote at a high enough frequency, meaning it was unsuitable for hardware deployment.

<p align="center"><iframe width="728" height="410" src="https://www.youtube.com/embed/qlxUssd7HhM?si=L9W0SckO0Iosya62" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
<div class="caption">
    A video showing the MPC controller working with opponent avoidance in simulation.
</div>

I also attempted an Antilock Brake System (ABS) to avoid sliding while braking by releasing the brakes when slipping was detected, but it turned out to be slower than simply braking hard—sometimes the mechanically simple answer wins. Still, it was neat how it made the single-gear electronic car [sound like it was downshifting into a corner](https://www.youtube.com/watch?v=cSVZ8z5h6vM).

The most productive implementation was parameterizing the racing line corner-by-corner using continuous curvature spirals (to ensure smooth steering), encoding braking distances and turn entry/exit points based on the car's actual dynamics just like a driver honing a lap. This allowed for a great amount of tweaking and easy setup between tracks: all we had to do was define the length of a "straight" and the angle of the next turn. This was a triumph in translating real-world knowledge into engineering inputs.



