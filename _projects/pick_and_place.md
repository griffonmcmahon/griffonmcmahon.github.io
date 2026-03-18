---
layout: page
title: Competitive Robot Arm Pick and Place
description: Block stacking against an opponent using a simulated Lynx 5 robotic arm
img: assets/img/picknplace/Battlefield.PNG
importance: 2
category: Academic Projects
---


This was a team-based project involving a competitive pick-and-place task where two robotic [Lynx 5 arms](https://wiki.lynxmotion.com/info/wiki/lynxmotion/view/ses-v1/ses-v1-robots/ses-v1-arms/lynx5/) raced to stack blocks, including shared "dynamic" blocks on a turntable between them that were worth more points. Unfortunately COVID kept everything in simulation, though I later got to work with the hardware when I TA'd the course and helped students deploy on real [Franka Emika](https://franka.de/) Panda arms.

<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/picknplace/Battlefield.PNG" title="An image showing the setup for the competition." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0"></div>
</div>
<div class="caption">
    The setup for the competition showing two robot arms, the static blocks next to them, and the turntable with dynamic blocks between them.
</div>

The implementation covered the standard pipeline: forward and inverse kinematics to plan and execute arm trajectories. The wrinkle worth mentioning is that the shared center blocks were a competitive resource, so I designed the strategy to grab one while simultaneously clearing them away from my opponent. This worked mainly because we were in simulation and didn't have to care about safety or avoiding collisions. Still, it leveraged the simulated scenario in our favor to place highly in the end of semester tournament. We also beat the first-place team in a purely bragging-rights match.

When I TA'd the class later, I MC'd the two and a half hour long tournament, keeping students engaged while the same familiar 2 minute scenario played out in front of them repeatedly.