---
layout: page
title: Target Tracking in the Presence of Occlusions
description: Conformal prediction to ensure observational coverage by a quadrotor
img: assets/img/target_tracking/circle.gif
importance: 3
category: Research
related_publications: true
---

This target tracking project aimed to avoid losing a target in presence of occlusions chiefly using conformal prediction (CP). A good overview of CP can be found in {% cite angelopoulos2021gentle %}, but the technique in a nutshell is that, given a history of predictions and actual outcomes of a model—say, the predicted state of a target at the next time step and its <i>actual</i> state at that time step—you can use a frequentist approach to determine probabilistic bounds to a desired percentile that the target on such a prediction will remain within those bounds. That is, you look at how poorly the model performed in the past and use that to inform how poorly it will perform in the future). 

Of course, this technique does require having a decent model of the target's motion, which I accomplished by employing a Knowledge-based Ordinary Differential Equation/KNODE {% cite jiahao2022learning %}, which is a neural network approach that attempts to learn the first derivative of a system's behavior instead of the behavior itself.

Tracking it in the circle works, even with noise causing the perception (and thus the prediction) to jump around severely (I could have used a low-pass filter, but I deliberately wanted error here to show the technique working), but that alone isn't too difficult:
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/target_tracking/circle.gif" title="Target Tracking and Expanding the FOV" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0"></div>
</div>
<div class="caption">
    A quadrotor (blue) tracking the target (orange). It makes a prediction of where it should be (purple, not seen very well here) and tries to keep it within its field of view (blue circle). The black rectangle following the target is the bounding box created by Conformal Prediction.
</div>

If something were to block the drone from seeing the target, then the drone might follow the prediction. Unfortuantely, it's possible that the prediction might have some error, causing the drone to track the prediction and, in the process, lose the target. To this end, I used nonexchangeable conformal prediction {% cite barber2023conformal %} (arguably ODEs themselves are exchangeable, but that's a conversation for another time). Essentially, this is how it fits in:
<div class="row">
    <div class="col-sm-2 mt-3 mt-md-0"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/target_tracking/cp_approach.png" title="A simple flowchart for how conformal prediction fits into this system" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-2 mt-3 mt-md-0"></div>
</div>
<div class="caption">
    A flowchart showing how CP fits into the overall scheme.
</div>
Finally, we can simply use these bounds and ensure the drone can capture the whole area within its field of view. The drone does this by increasing its altitude, as seen in this video, where it loses the target but is able to expand its view such that it doesn't lose the target under the canopy of grey blocks:


<p align="center"><iframe width="800" height="410" src="https://www.youtube.com/embed/w-dYwaU-ZHM?playlist=w-dYwaU-ZHM&loop=1" title="Conformal Prediction to Avoid Losing a Target" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
<div class="caption">
    Notice how the drone increases altitude halfway through.
</div>



