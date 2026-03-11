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
flowchart TB

subgraph Displays
direction LR

subgraph Pair1
D1[Display 1]
D2[Display 2]
end

subgraph Pair2
D3[Display 3]
D4[Display 4]
end

subgraph Pair3
D5[Display 5]
D6[Display 6]
end

subgraph Pair4
D7[Display 7]
D8[Display 8]
end

subgraph Pair5
D9[Display 9]
D10[Display 10]
end

subgraph Pair6
D11[Display 11]
D12[Display 12]
end

subgraph Pair7
D13[Display 13]
D14[Display 14]
end

subgraph Pair8
D15[Display 15]
D16[Display 16]
end

end

PC1[PC 1]
PC2[PC 2]
PC3[PC 3]
PC4[PC 4]
PC5[PC 5]
PC6[PC 6]
PC7[PC 7]
PC8[PC 8]

Firebase[(Firebase Cloud)]

D1 --> PC1
D2 --> PC1

D3 --> PC2
D4 --> PC2

D5 --> PC3
D6 --> PC3

D7 --> PC4
D8 --> PC4

D9 --> PC5
D10 --> PC5

D11 --> PC6
D12 --> PC6

D13 --> PC7
D14 --> PC7

D15 --> PC8
D16 --> PC8

PC1 --> Firebase
PC2 --> Firebase
PC3 --> Firebase
PC4 --> Firebase
PC5 --> Firebase
PC6 --> Firebase
PC7 --> Firebase
PC8 --> Firebase
```

**Tech:** Unity • C# • Firebase • Multi-display synchronization

<br>

---

### Meta Trade Show WhatsApp Demonstration

Interactive trade show experience used by **Meta** to demonstrate WhatsApp integrations.

The system uses **Node.js services connected to Firebase**, combined with **Unity visualization displays** that show live WhatsApp usage activity during demonstrations.

**Tech:** WhatsApp • Node.js • Firebase • Unity • Real-time messaging systems

<br>

---

## Technologies

![Unity](https://img.shields.io/badge/Unity-000000?logo=unity&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![Arduino](https://img.shields.io/badge/Arduino-00979D?logo=arduino&logoColor=white)
![RaspberryPi](https://img.shields.io/badge/Raspberry%20Pi-C51A4A?logo=raspberry-pi&logoColor=white)

<br>

---

## Interactive Technology

Many of my projects combine software and hardware to create **interactive environments used in exhibits, corporate spaces, and live experiences**.

Typical components include:

- Unity-driven applications  
- sensors and microcontrollers  
- LED systems and physical interfaces  
- Raspberry Pi and embedded devices  
- real-time cloud services  

<br>

---

## Current Focus

- Building **Siggme.com**  
- Interactive installations using Unity and sensors  
- Real-time hardware + cloud systems  

---
