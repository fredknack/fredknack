# Project Archive

This archive documents selected interactive systems, installations, and platforms developed over the past several years.

Projects emphasize the integration of software, hardware, and cloud infrastructure across environments such as corporate headquarters, trade shows, public installations, and training platforms.

## Systems Included

- Liberty Mutual AR Training
- Liberty Mutual VR Training
- Meta Trade Show WhatsApp Demo
- Allura AR Paint Visualization
- Fathom Immersive Installation
- Netflix Cowboy Bebop Installation
- Wendy’s / Twitter Social Vending
- Google Corporate Timeline
- Kaiser Permanente Health Quiz Kiosk

---

# Liberty Mutual AR Training System

**System Snapshot**

| Category | Augmented Reality Training |
|----------|---------------------------|
| Engine | Unity |
| Languages | C#, Next.js |
| Cloud | Firebase |
| Tools | Blender |
| Platform | iPad |

Development of an augmented reality training application for insurance adjusters.  
3D replicas of residential environments were created in Blender and aligned with real-world spaces so that virtual damage scenarios could be explored through an iPad. The system allowed learners to inspect simulated flood damage behind appliances and structural components. Usage data was transmitted to Firebase and visualized through a Next.js dashboard for training analytics.

---

# Liberty Mutual VR Training

**System Snapshot**

| Category | Virtual Reality Training |
|----------|-------------------------|
| Engine | Unity |
| Languages | C# |
| Platform | Meta VR Headsets |
| Tools | Blender |

Development of immersive VR simulations of residential environments used for insurance training.  
Users explored virtual properties to identify structural and environmental damage that may or may not be covered by insurance policies. The simulations allowed trainees to practice evaluation scenarios within controlled virtual environments.

---

# Meta Trade Show WhatsApp Demonstration

**System Snapshot**

| Category | Interactive Trade Show Demo |
|----------|-----------------------------|
| Engine | Unity |
| Languages | Node.js, C#, Next.js |
| Platforms | Twilio, Railway |
| Cloud | Firebase |

Design and deployment of an interactive WhatsApp demonstration used at Meta trade shows.  
Visitors launched the experience by scanning a QR code that opened a WhatsApp workflow simulating business use cases and swag selection. Interaction data was stored in Firestore and visualized in real time on a Unity-powered display wall. Post-event analytics were accessible through a Next.js dashboard.

---

# Allura Augmented Reality Paint Visualization

**System Snapshot**

| Category | Augmented Reality Installation |
|----------|-------------------------------|
| Engine | Unity |
| Languages | C#, Arduino |
| Cloud | Firebase |
| Hardware | Arduino Button Console |
| Tools | Blender |

Development of an AR visualization system used at trade shows to demonstrate siding and paint options for residential buildings.  
Users placed printed building cards under a mobile device running a Unity AR application, which generated animated 3D building models. A physical console of 20 color-selection buttons connected to Arduino allowed users to change the building's paint color in real time through Firebase synchronization.

---

# Fathom Submarine Bridge Installation

**System Snapshot**

| Category | Immersive Public Art Installation |
|----------|-----------------------------------|
| Engine | Unity |
| Languages | C#, Arduino |
| Platforms | Firebase, ESP8266 |
| Displays | 6 LCD Screens |
| Inputs | 24 Physical Buttons |

Development of an interactive submarine bridge environment within the **Fathom** immersive art installation in Portland.  
The system featured a console of 24 physical buttons controlling synchronized video across six displays. All button interactions were tracked in Firebase, enabling real-time usage visualization and triggering remote lighting effects via ESP8266 microcontrollers. The installation recorded more than 250,000 user interactions during its two-year run.

---

# Netflix Cowboy Bebop Trade Show Installation

**System Snapshot**

| Category | Interactive Trade Show Installation |
|----------|-------------------------------------|
| Engine | Unity |
| Languages | C#, Arduino |
| Displays | 4 LCD Screens |
| Lighting | LED Walls |
| Hardware | Custom Vending Machine |

Development of an interactive promotional installation for the launch of Netflix’s *Cowboy Bebop*.  
Visitors inserted a coin into a custom vending machine that triggered synchronized video and LED lighting effects coordinated through Unity and Arduino. The sequence culminated in the dispensing of promotional prizes.

---

# Wendy’s / Twitter Social Vending Installation

**System Snapshot**

| Category | Interactive Marketing Installation |
|----------|-----------------------------------|
| Engine | Unity |
| Languages | C#, Arduino |
| Input | Twitter Hashtag System |
| Hardware | Custom Vending Machine |

Implementation of a social media-driven promotional installation developed with Wendy’s and Twitter.  
Users posted a specific hashtag to receive a code, which was entered into a Unity touchscreen interface. The application communicated with an Arduino controller to activate a vending machine that dispensed promotional items.

---

# Google Corporate Timeline Installation

**System Snapshot**

| Category | Corporate Interactive Installation |
|----------|-----------------------------------|
| Environment | Google Corporate HQ |
| Displays | 16 Touchscreens |
| Compute | 8 PCs |
| Engine | Unity |
| CMS | Angular |
| Synchronization | Firebase |
| Languages | C# |

Design and deployment of a large-scale interactive timeline installation located in Google headquarters.  
Sixteen touchscreen displays present historical milestones, videos, and achievements from across Google’s history. The system runs across eight synchronized PCs, with Firebase used to maintain state synchronization between nodes. Content management is handled through a custom Angular-based CMS.

---

# Kaiser Permanente Health Quiz Kiosk

**System Snapshot**

| Category | Interactive Retail Kiosk |
|----------|-------------------------|
| Engine | Unity |
| Languages | C#, Arduino |
| Hardware | Custom PCB Controller |
| Inputs | 8 Physical Buttons |
| Output | Coupon Printer |

Development of an interactive health quiz kiosk deployed in a retail mall environment.  
Users interacted with a Unity touchscreen quiz and completed physical button-sequence challenges when incorrect answers were given. A custom Arduino-based PCB controlled button lighting and input sequencing. Upon completion of the quiz, the kiosk printed promotional health coupons for participants.

---
