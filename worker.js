export default {
  async fetch(request) {

    const url = new URL(request.url)

    const videos = {
      "iOS-Portfolio": "01192aa3a1fd33c84f3cd58b320bdc76",
      "interactive-basement-inspection": "96fd340f0a463f83d96879fd7329dff8",
      "damaged-home-fly-through": "a1b295a81efe095adff749f11e80f4df",
      "home-insurance-walk-through": "ab968c95c6dda3607a14003eb7fa10d9",
      "VR-Interaction-Unity-Tool": "30fbc9adb461b68edcf90e82a400fbef",
      "Fathom-Sub-Duck-Drive": "4fb26b66ebbe59c5fb8480b90c353240",
      "Projection-Mapping-Reel": "0d2b777a802c4e51dd62b0417695227f",
      "Twitter-Controlled-Vending-Machine": "6b8f58d6182a5d1bbc5eeca877165243",
      "Unity-FPS-Game": "3f0f66362026eaae935723d65e2b7f16",
      "Fathom-Sub_Installation": "1f42552c67af7a0dcbe82f00bc86eac9",
      "Unity-Touch-Art-Tool": "1b2f8665aaafcfd5558b57fc9241469b",
      "NYIT-Interactive-Touch-Video-Wall": "c8072bf100d98230596b3f482fe34fab",
      "Meta-Button-Quiz": "8d1f9834b5009433e39fec10a153f1cc",
      "Meta-Whatsapp-Chatbot": "610cebad42990f2c66a9a497ec5889fd",
      "VR-Kitchen": "1b1ac435aeaf74f6f4e93132dbba6be0",
      "Motion-Graphics-Sample": "53d82b859acec0ecb2fe0f46de96187c",
      "Kaiser-Kiosk-Interactive-Installation": "035c91da5976b3c70f16644e4041b32d",
      "Google-HQ-Installation": "c28156609fd0302709039dbb21c01cf5",
      "Trade-Show-AR": "ff6407c65d9cfd3a168cb684cb37bda5",
      "GP-AR-Tradeshow-Demo": "5dfa9559d9f42476de367dcdf4b3a991",
      "CowBoy-Bebop-Vending-Machine": "823f999ad633a95f40b4283913234f77",
    }

    const slug = url.pathname.replace("/", "")

    const videoId = videos[slug]

    if (!videoId) {
      return new Response("Video not found", { status: 404 })
    }

    const html = `
      <html>
        <body style="margin:0;background:black;">
          <iframe
            src="https://customer-e9d02k2c39c6uy7q.cloudflarestream.com/${videoId}/iframe"
            style="border:none;width:100%;height:100vh;"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </body>
      </html>
    `

    return new Response(html, {
      headers: { "content-type": "text/html" }
    })
  }
}