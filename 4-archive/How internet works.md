
> When you type "youtube.com" and hit enter, what's your gut feeling about what happens first behind the scenes?

students may say: they go to server.

> what's the server? what's the difference bewet
> 
> and… your browser doesn't know where YouTube's server lives yet.
> Who do you think tells your browser "YouTube's server is located at [specific address]"?
> 
> we need something that knows _every_ address on the planet.

### DNS (Domain Name System)

we need DNS.
**DNS** is the *internet's phonebook*. 
It's a massive, distributed database that translates names → addresses.

**Step 1: Your browser asks DNS**
- Browser: "Hey DNS, where does 'youtube.com' live?"
- DNS server: "youtube.com is at **142.250.80.78**"

That number (142.250.80.78) is called an **IP address**—like a street address for computers.
#### What's the IP address?
It's like your home address, unique for each device

**Step 2: NOW your browser can go to the server**
- Browser connects to 142.250.80.78
- YouTube's server responds with the webpage

#### Quick Check

Imagine DNS servers all crashed worldwide right now. 
You try typing "facebook.com" in your browser.

What happens?
- A) Facebook's website is gone forever
- B) You get an error—browser can't find the address
- C) Everything will work normally

Facebook's servers are still running perfectly. 
Your browser just can't find the address to reach them.

#### If you knew IP address of Facebook, can you reach without DNS?

**But here's the clever part**: If you somehow _knew_ Facebook's IP address (like 157.240.22.35), you could type that directly into your browser and it would work!

---

Once your browser knows the IP address and wants to connect, the data has to travel from your laptop to YouTube's server (maybe thousands of miles away).

---

> Imagine you have two laptops in the same room 
> and you want them to talk to each other directly. 
> How would you physically connect them?

A cable—specifically an **Ethernet cable** (looks like a thick phone cable with a wider plug).

One end plugs into Computer A, other end into Computer B. Now they can send electrical signals to each other through copper wires.

> Now you have three computers. 
> If you only use cables between them, how would you connect all three so any computer can talk to any other?
> 
> Draw it in your mind—how many cables do you need?

**3 cables!** Each computer connects to every other computer.

> Now imagine 100 computers in an office. 
> If every computer needs a direct cable to every other computer, how messy does this get?
> 
> - How many cables would Computer #1 need plugged into it?
> - Would this even be practical?

**Exactly!** Each computer needs 99 cables plugged into it.
Total cables needed: almost 5,000 cables running everywhere like spaghetti.

---

### The Switch

Engineers invented a device called a **network switch**.

**New setup**:
- Each computer connects to the switch with ONE cable
- Switch has many ports (like a power strip has many outlets)
- Switch intelligently routes messages between computers
So 100 computers = 100 cables total (one per computer to the switch), not 5,000!

---

> Your office has a switch connecting 100 computers. 
> Another office across the city also has a switch with 100 computers.

What about one more switch to connect those two switches?

> When you use Bluetooth, what's the maximum distance it works? 
> Can you connect to Bluetooth headphones from across the street?

Bluetooth has a range limit—maybe 10 meters.

Ethernet cables have limits too:
- Standard Ethernet cable: maximum ~100 meters before signal gets too weak
- City distance: 10,000+ meters

> When you make a phone call to someone across the city, how does your voice travel to their phone?

though air?

> Imagine you're in a basement with thick concrete walls—no cell signal. 
> But you plug in a landline phone (old-style phone with a wire in the wall).

Through cables—specifically **telephone lines** that run underground throughout cities.

These cables were laid decades ago connecting every building. 
Phone companies own massive networks of cables already buried under streets.

> You know Ethernet cables carry internet data between computers. 
> But telephone cables were invented in the 1800s—way before internet existed.
> 
> What do you think telephone cables were originally designed to carry?

Both carry **electrical signals**—just different patterns:
- Telephone: signals representing voice vibrations
- Internet: signals representing 1s and 0s (binary data)
**Same physical medium (copper wire), different signal patterns.**

> If I told you there are three main cable types used for internet today:
> 
> 1. **Copper cables** (like phone lines—send electricity)
> 2. **Fiber optic cables** (send light pulses through glass)
> 3. **Coaxial cables** (thicker cables, used for TV)
>
> Which one do you think is fastest and why?
> (Think about: light vs electricity—which travels faster?)

Fiber optic is fastest.

But here's the twist: 
light and electricity **both travel at nearly the same speed through cables** (~200,000 km/s).

The real advantage of fiber optic: **light doesn't lose strength as fast as electrical signals do.**
- Copper Ethernet: signals die after ~100 meters
- Fiber optic: signals travel 40+ kilometers without weakening

That's why:
- Your home: Ethernet cables (short distances)
- Between cities: Fiber optic cables (long distances)

> Cities are often 100+ km apart. Countries are 1000+ km. Oceans are 10,000+ km.
> So, even fiber optic signals eventually die.
> 
> When your phone battery is at 10%, you plug it in to recharge it back to 100%.
> If a fiber optic signal weakens after 40 km, what do you think engineers place along the cable route to solve this problem?

They use devices called **repeaters** or **amplifiers**.

Every ~40-80 km along the cable, there's a device that:

1. **Receives** the weak signal
2. **Reads** what the signal says (the 1s and 0s)
3. **Sends out** a fresh, strong signal with the same data

Think of it like a relay race:
- Runner 1 runs 100m, passes baton to Runner 2
- Runner 2 (fresh energy) runs next 100m, passes to Runner 3
- Data travels 1000s of km this way

> For undersea cables crossing oceans (5000+ km), where do you think they place repeaters? 
> There are no buildings in the middle of the Atlantic Ocean…
> 
> Repeaters need two things to work:
> 1. The cable passes through them
> 2. Electrical power to operate
> 
> Where could the repeater get electricity from? 

**Undersea Repeaters Get Power From The Cable Itself**

The cable has **two jobs**:
1. Carry data signals (light pulses)
2. Carry electrical power

**How it works**:
- The cable contains both fiber optic strands (for data) AND copper wires (for electricity)
- Stations on shore send high-voltage electricity through the copper
- This electricity powers all the repeaters along the cable route
- Repeaters boost the light signals every ~50-100 km

So one cable does both: data + power supply for repeaters!

---
### ISPs

> Who do you think paid to:
> - Lay those undersea cables?
> - Install repeaters every 50 km?
> - Maintain them when they break?
> - Run fiber optic lines under every street in your city?

**Sometimes government, but mostly private companies!**

Companies like:
- AT&T, Verizon (USA)
- BT, Virgin (UK)
- Local telecom companies in each country

They spent **billions of dollars** building this infrastructure.

> Imagine you spent $10 million building a highway. 
> You own it, you maintain it.
> Would you let anyone use it for free, or would you charge a toll?

That's what ISPs (Internet Service Provieders) do.

They built the "highways" (fiber cables, switches, repeaters). 
You pay a monthly fee to use their network.

---

> Remember our two offices across the city? 
> Each office has a switch connecting their computers.
> 
> What device connects those two office switches together so they can communicate?

The ISP's cables and equipment.

> If one company (let's say AT&T) owned ALL the cables everywhere, what problem might that create for customers?

Monopoly = they control prices, no competition, poor service.

That's why most countries have multiple ISPs:
- They compete for customers (better prices, faster speeds)
- They interconnect their networks so you can reach the entire internet
- Government regulations prevent complete monopolies

---
