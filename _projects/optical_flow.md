---
layout: page
title: Optical Flow to Improve Image Segmentation
description: Combining YOLO with optical flow for more robust object indexing
img: assets/img/opt_flow/afterOptFlow.jpg
importance: 3
category: Academic Projects
---

<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/opt_flow/afterOptFlow.jpg" title="An image showing a successful indexing of cars and pedestrians using YOLO and optical flow." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0"></div>
</div>
<div class="caption">
    A successful indexing of cars and pedestrians using YOLO and optical flow.
</div>

A team coursework project augmenting [You Only Look Once](https://en.wikipedia.org/wiki/You_Only_Look_Once) (YOLO) with optical flow to improve object tracking consistency between frames. YOLO detects objects well but can occasionally swap identities between them across frames—optical flow provides a cheap geometric prior on where each object should have moved, making the indexing more robust to the occasional missed detection.

It was a modest project, but it was one of my first at Penn and gave me a solid grounding in image processing, camera integration, and applied machine learning that informed later work.
