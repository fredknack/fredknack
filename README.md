<p align="center">
  <img src="banner.png" width="100%">
</p>

<h1 align="center">Fred Knack</h1>

<p align="center">
Creative technologist building interactive systems with <b>Unity, web platforms, and embedded hardware</b>.
</p>

<p align="center">
Developer of <a href="https://siggme.com"><b>Siggme.com</b></a>
</p>

<p align="center">
Interactive installations, real-time systems, and social platforms used in corporate environments and live experiences.
</p>

<p align="center">
  <a href="#featured-systems"><b>Featured Systems</b></a> •
  <a href="#technologies"><b>Technologies</b></a> •
  <a href="#interactive-technology"><b>Interactive Technology</b></a> •
  <a href="#current-focus"><b>Current Focus</b></a>
</p>

<br>

Siggme is a platform designed to help people organize real-world gatherings through **clear social signals** — allowing hosts to gather interest before committing to dates or logistics.

<br>

---

## Featured Systems

### Siggme — Social Coordination Platform

Platform for organizing real-world gatherings through signal-based coordination.

Users propose activities, gather interest from subscribers, and schedule events once enough people commit.

**Tech:** JavaScript • Web Platform • Cloud Services

<br>

---

### Google Corporate Timeline Installation

<p align="center">
  <img src="inflectionwall.png" width="750">
</p>

Interactive timeline installation located in **Google headquarters**.

The system runs across **16 synchronized touchscreen displays powered by 8 PCs**, each controlling two displays.  
The experience was built in **Unity** with **Firebase-based synchronization** to keep all screens coordinated in real time.

#### System Architecture

```mermaid
graph TD
    A[16 Touchscreen Displays] --> B[8 Unity PCs]
    B --> C[(Firebase Sync Layer)]
    C --> B
