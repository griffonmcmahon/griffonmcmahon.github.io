---
layout: page
title: Hip-Energized Hopping on Jerboa
description: Work with Kod*lab
img: assets/img/jerboa/jerboa.JPG
importance: 2
category: Research
---

This is a project I completed while in <a href="https://kodlab.seas.upenn.edu/">Kod*lab</a> at UPenn, where we managed to stabilize movement for a tailed biped named <b>Jerboa</b> in the sagittal plane by using hip actuators to energize the system while using the tail to keep it steady. 

Unfortunately, the work remains unpublished due to scope creep, but I am quite proud of my work in tuning the controllers with the goal of increasing stability and growing the basin of attraction. At the very least, you can see it working in the video below:

<p align="center"><iframe width="728" height="410" src="https://www.youtube.com/embed/cNPpklhQrhM?si=r5RpU6puVKvkspUV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
<div class="caption">
    A video highlighting the work.
</div>

Previously for Jerboa, Kod*lab was using a tail-energized/hip-stabilized controller developed by Avik De of Ghost Robotics.
In the interest of developing faster and more energetic gaits, we desired a hip-actuated controller. 
At first, we examined how to potentially use a Virtual Pivot Point with the notion that having forces for the duration of the stance phase intersect above the center of mass would provide stability. However, trying to get that sort of controller to work while also moving the tail to shift the center of mass was difficult to deploy in simulation, let alone hardware. 
So we turned to essentially PID (a [Proportional-Integral Derivative controller](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller)): one controller for the tail to control the pitch, and another to control a unitless "energy."
(Side note: PID is one of my favorite control schemes ever because 8/10 times it works alone, and the other 2/10 times are probably using it in some form.)