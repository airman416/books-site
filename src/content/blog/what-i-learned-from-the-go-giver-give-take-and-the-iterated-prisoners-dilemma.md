---
title: What I learned from The Go-Giver, Give & Take, and The Iterated
  Prisoner's Dilemma
date: 2026-06-23T08:40:00.000-04:00
published: true
author: Armaan Agrawal
tags:
  - Essays
topic: Essays
moreEssays:
  heading: More essays
---
There’s a way that you can earn more, create better relationships, and be a happier person. 

Sounds like a magic pill, but there is a simple secret out there that lets you implement this, and see results within a day.  

I’ve done it before, and all it takes is this: 

> give more & ask more.

Why do I write this article?

If it helps even one more person join the "giving community" then it's worth it.

Here’s how to do it.

## Step 1: Give without counting favors

### Self-select your network

High-trust networks outcompete low-trust network. They share information faster, collaborate more efficiently, and take better risks. By injecting uncounted favors into your environment, you upgrade your own network.

You benefit directly because you now live and work in a high-trust ecosystem. When you inevitably need help, the network will provide it, not because you hold a specific IOU from a specific person, but because the entire system is optimized to support its members.

It always comes back to you, like a circle. You provide a small favor to person X, Y, Z (e.g. introduce them to someone in your network, take a short call, donate to their cause, send them a lead, compliment them)

X and Y are also givers. They give to person A, B, C. 

Z is not a giver, they don’t pass it on. You sense that Z is not a giver, you naturally end up speaking to Z less.

B and C are givers. Turns out C has some information you really need, and that helps you land a huge client. 

X introduces you to C & you get the information you need.

![](/images/circle-of-giving.png)

This works best on a large scale. 

If you're a giver with everyone you interact with, then even if 30% of the people you interact with are not givers, you'll still end up better than if you didn't give at all. 

And you cut off those 30% of people (happens naturally) and you're better off. 

Also, then you're known as a giver. 

A reputation as a giver is the best one you could have. 

People will seek YOU out, not the other way around. 

Kinda like inbound vs. outbound. And sure, it's because they may want something from you. But usually, givers seek out other givers. 

---

Let’s look at this from the game theory angle:

### The Iterated Prisoner's Dilemma.

In the Prisoner's Dilemma, two individuals must decide whether to cooperate with each other or betray each other (defect). The catch is that while mutual cooperation yields a good outcome for both, a player can get an even better outcome by defecting if the other player cooperates. However, if both defect, they both suffer a poor outcome.

When this game is played only once, the mathematically logical choice is to defect. But when the game is played repeatedly over many rounds (an "iterated" game), strategies emerge that favor cooperation.

In the early 1980s, political scientist Robert Axelrod hosted a famous computer tournament. He invited game theorists to submit strategies (computer programs) to play the Iterated Prisoner's Dilemma against each other.

The surprising winner of the tournament was a simple strategy called Tit-for-Tat. It only has two rules:

Always cooperate on the very first round.

On every subsequent round, simply copy whatever your opponent did in the previous round.

Tit-for-Tat was highly successful because it was "nice" (it never started a fight), "provocable" (it punished defection immediately), and "forgiving" (it would return to cooperation as soon as the opponent did).

However, as researchers continued to study these models, they discovered a fatal flaw in Tit-for-Tat: it is completely vulnerable to "noise."

The Defection Spiral (The "Death Spiral")

In Axelrod's original tournament, the environment was perfect. Every move was executed flawlessly and communicated perfectly.

But the real world is noisy. In real-world interactions, people make mistakes, information is misunderstood, or a good-faith effort fails. In game theory, this is called "noise"—an accidental defection.

When two strict Tit-for-Tat players interact in a noisy environment, a single mistake triggers a catastrophe:

Round 1: Both Cooperate.

Round 2: Player A tries to Cooperate, but a misunderstanding occurs (noise). Player B perceives it as a Defection.

Round 3: Following its rule, Player B punishes Player A by Defecting. Player A, who knows they tried to cooperate in Round 2, feels betrayed and perceives Player B's action as an unprovoked Defection.

Round 4: Player A retaliates by Defecting. Player B retaliates for that defection.

<table style="border-collapse: collapse; font-family: 'abril-display', serif; font-size: 0.875rem;">
  <thead>
    <tr>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: left;"></th>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: center;">R1</th>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: center;">R2</th>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: center;">R3</th>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: center;">R4</th>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: center;">R5</th>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: center;">R6</th>
      <th style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; color: #6B7280; font-weight: 700; text-align: center;">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; font-weight: 700; color: #161717;">A</td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #06402B; color: #fff;">✓<br><span style="font-size: 0.7rem; opacity: 0.8;">+3</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #6B7280; color: #fff;">?<br><span style="font-size: 0.7rem; opacity: 0.8;">+5</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #06402B; color: #fff;">✓<br><span style="font-size: 0.7rem; opacity: 0.8;">+0</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #DC2626; color: #fff;">✕<br><span style="font-size: 0.7rem; opacity: 0.8;">+1</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #DC2626; color: #fff;">✕<br><span style="font-size: 0.7rem; opacity: 0.8;">+1</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #DC2626; color: #fff;">✕<br><span style="font-size: 0.7rem; opacity: 0.8;">+1</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; font-weight: 700; color: #161717;">11</td>
    </tr>
    <tr>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; font-weight: 700; color: #161717;">B</td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #06402B; color: #fff;">✓<br><span style="font-size: 0.7rem; opacity: 0.8;">+3</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #06402B; color: #fff;">✓<br><span style="font-size: 0.7rem; opacity: 0.8;">+0</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #DC2626; color: #fff;">✕<br><span style="font-size: 0.7rem; opacity: 0.8;">+5</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #DC2626; color: #fff;">✕<br><span style="font-size: 0.7rem; opacity: 0.8;">+1</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #DC2626; color: #fff;">✕<br><span style="font-size: 0.7rem; opacity: 0.8;">+1</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; background: #DC2626; color: #fff;">✕<br><span style="font-size: 0.7rem; opacity: 0.8;">+1</span></td>
      <td style="border: 1px solid #E5E7EB; padding: 0.75rem 1rem; text-align: center; font-weight: 700; color: #161717;">11</td>
    </tr>
  </tbody>
</table>
<p style="font-family: 'abril-display', serif; font-size: 0.75rem; color: #6B7280; margin-top: 0.75rem;">
  <span style="color: #06402B; font-weight: 700;">✓</span> Cooperate &nbsp;·&nbsp;
  <span style="color: #DC2626; font-weight: 700;">✕</span> Defect &nbsp;·&nbsp;
  <span style="color: #6B7280; font-weight: 700;">?</span> Accident (noise) &nbsp;·&nbsp;
  C/C = 3pts each · D/C = 5pts vs 0pts · D/D = 1pt each
</p>

Because strict Tit-for-Tat cannot correct mistakes, a single error plunges the relationship into an unending defection spiral (often called a "death spiral"). Both players will alternate defecting against each other endlessly, destroying all potential value in the relationship.

### The Mathematical Value of Forgiveness

To solve the vulnerability to noise, game theorists discovered that the most successful strategies require a mechanism for unprompted forgiveness.

One powerful variation is called Generous Tit-for-Tat. This strategy operates almost exactly like the original, with one crucial difference:

If the opponent defects, Generous Tit-for-Tat usually retaliates by defecting. However, a small percentage of the time (e.g., 10% to 20%), it will "forgive" the defection and cooperate anyway.

This built-in forgiveness—which in human terms translates to "giving without keeping score" or "letting it slide"—acts as a circuit breaker for the defection spiral.

By occasionally absorbing a perceived loss without retaliating, the generous strategy breaks the cycle of punishment and resets the relationship back to mutual cooperation. While the generous player risks being taken advantage of in a single round, the mathematical reality is that the long-term gains of restoring a cooperative relationship massively outweigh the short-term cost of the unreciprocated favor.

### Value Creation

It lets you create an environment where 1 + 1 > 2. In fact, MUCH greater than 2.

Adam Grant says it best in his book Give & Take:

> “You don’t have to be a “selfless giver” that never asks anything in return. Otherish givers are able to think in more complex ways and identify win-win solutions that both takers and selfless givers miss. Instead of just giving away value like selfless givers, otherish givers create value first. By the time they give slices of pie away, the entire pie is big enough that there's plenty left to claim for themselves: they can give more AND take more.”

A “selfless giver” is one that gives too much, to the wrong people, and gets walked over. 

An “otherish giver” sees an opportunity 

Favors rarely cost the exact same amount they are worth.

An introduction to a hiring manager might cost you five minutes of typing, but it could secure the other person a career-defining role. If you demand a favor of equal value in return before you make the introduction, that massive value is never created.

I asked Claude to describe a scenario.

Scenario: You're a senior dev. A junior colleague is stuck on a hard bug and asks for help.

---

Matcher:

Helps — but mentally logs it. "I spent an hour on this, so next time I need a code review or a favor, they owe me." If the junior has nothing to offer in return, the matcher drags their feet. The value exchanged = \~1 hour in, \~1 favor out. Pie stays the same size.

---

Otherish giver:

Sits down, fixes the bug, and while they're at it — documents the pattern, explains the underlying concept, and maybe loops in one other person who'd benefit. Now:

- Junior is permanently more capable (produces more)

- The fix is documented (saves the whole team later)

- Two people now see the senior as someone worth knowing and going to bat for

- Senior's reputation quietly rises

When the senior eventually needs something — a referral, a good word, someone to pick up slack — multiple people want to help. They never kept score because the pie grew large enough that it didn't matter.

---

Another example from Claude:

Scenario: You're job hunting. A friend asks you to review their resume.

---

Matcher:

You're busy, also applying to jobs. You think: "I'll help if they help me back." You give it a quick pass, fix a few typos, send it back. Mental note: they owe me a resume review.

If they land somewhere good — maybe you ask for a referral. Transactional. You got back roughly what you put in.

---

Otherish giver:

You review the resume, but you also notice their story isn't landing. You reframe their narrative, flag the weak spots, and send over a template that worked for you. Takes 45 extra minutes.

Then — because you're thinking about their outcome, not your ledger — you intro them to one person you know at a target company.

They get the job. They're now inside a company you might want to work at someday. They become a warm referral. Their hiring manager knows your name before you've ever applied. Their whole network is now slightly more available to you — not because they owe you, but because you genuinely moved their life forward and people remember that.

---

The matcher got one resume review back.

The otherish giver got an inside track at a new company, a warm referral, and a person who will actively advocate for them — from 45 extra minutes of real effort.

Same starting resource. Completely different return — because one person expanded the pie before taking a slice.

---

## Step 2: Ask

How can one keep giving and giving without asking for anything in return? 

You SHOULDN’T keep giving without receiving. You start small, test whether the person you're interacting with is a giver too, then ramp up the giving.

You should be willing to do something that will take you five minutes or less for anybody. 

### You need a clear ask. 

Tim Ferris says, 

> “Life punishes the vague wish and rewards the specific ask."

Don't make them do the work of figuring out what you need.

- Don’t immediately ask. Create value for them first. 

If it’s a cold email that can range from a truly personalized first line, to a usable feature, audit, notes, anything that provides them value.

**Objection: isn’t this just the same as doing everyone a bunch of favors and calling it in later?**

Yes, but the difference is authenticity. In this situation, you don’t give someone less just because you think they can’t help you in the future. 

You don’t do mental calculations before you help someone - but you also don’t kill yourself trying to help them (“5 minute favor”).

**Counter objection: Does this apply when I DO want something in return?**

Sure, we all need things. When I needed a job I reached out to Owner.com CTO and created a tool for him (https://owner.armaanagrawal.com/). I did it because I wanted to work at Owner.com.

At the same time, I’m glad that I made the tool, because it wasn’t fake. I do think the website is useful and that restaurants can use it (after cleaning up the UI a bit lol). Even though it didn’t lead to a job, I’m glad I made it.

Having an agenda isn’t the problem, but the difference is this: have you created enough value that the entire pie has gotten bigger, rather than stealing from someone else’s portion of the pie?

**Objection: how can I give when I am the one that’s struggling?**

From *Think Like a Monk* by Jay Shetty:

> “'Jay, I'm the one who needs help! I have so much to figure out before I can devote myself to helping others.' It's true. It's hard to think about selflessness when we are struggling. And yet that is exactly what I learned as a monk.”

Chicken and egg problem. You wanna give first or get first? 

If you wait till you get - you’re letting the universe take you along for a ride. 

If you give first, you exert just a little bit of control & invite a little bit more luck into your life. 

There's a Tibetan practice called Tonglen ("giving and taking.”) You breathe in others' suffering, breathe out relief to them. And you do it especially when you're struggling. 

The monks do it when they're sick, grieving, afraid. The point isn't to pretend you're fine, but to interrupt the reflex of turning inward when things get hard.

**Counter objection: But how does that matter? At the end of the day isn't it about me and what I get? I'm the one struggling.**

Now if you’re truly struggling (e.g. I can’t afford dinner today), this advice doesn’t apply to you. But chances are, you’re stressed about rent, anxious about career, worried about the future. 

That's real, but it's not the same thing. And somewhere between "I can't eat" and "I'm thriving" is a middle ground where people tell themselves they're in survival mode when they actually have margin & they're just scared—which is super real, and I can relate. 

Just give it a shot before you discard it.

---

I will end with the "Five Laws of Stratospheric Success" from Bob Burg and John David Mann's book The Go-Giver which provides a framework for shifting your focus from getting to giving (which in turn leads to greater fulfillment and profitability in both business and life).

The five laws are as follows:

**The Law of Value: Focus on providing more value than you receive in payment.**

**The Law of Compensation: Income is directly tied to the number of people served and the quality of service.**

**The Law of Influence: Build influence by prioritizing the interests of others.**

**The Law of Authenticity: Offer your genuine self as your most valuable asset.**

**The Law of Receptivity: To give effectively, one must also be open to receiving**

If this article helped you, start with this: give me a follow on X @armaanagrawal_ (I respond to all DMs) and share this article to someone that needs to really needs to read it!

.
