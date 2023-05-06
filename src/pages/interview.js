import React, { useState } from "react"
import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';
import '../rc-slider.scss'
import ColorChanger from "../components/color";
import { Link } from "gatsby";
import Sidebar from "../components/sidebar";

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const InterviewPage = () => {
  const [fontSize, setFontSize] = useState(30);
  return (
    <main style={pageStyles}>
      {/* <Sidebar></Sidebar> */}
      <div class="title">
        <div class="name text-padding">
          Joseph Heath
        </div>
        <div class="date text-padding">
          Conducted: Jan 06, 2015
        </div>
        <div class="summary text-padding">
          In which we discuss <Link to="#" className="">EA</Link>, Call of Duty, bethesda game studios, assassin's creed, watch dogs, wolfenstein, arkham origins, ken levine, cliff bleszinski, jennifer helpler, and neogaf..
        </div>
        <div class="text-slider">
          <div class="caption-text"><b>
            aA
            </b>
          </div>
          <Slider min={24} max={64} defaultValue={30} onChange={(e) => setFontSize(e)}/>
        </div>
        <div class="colors">
          <ColorChanger color1="#FFFFFF" color2="#000000"/>
          <ColorChanger color1="#000000" color2="#FFFFFF"/>
          <ColorChanger color1="#F8EFBA" color2="#2C3A47"/>
          <ColorChanger color1="#CAD3C8" color2="#182C61"/>
        </div>
      </div>
      <div class="body" >
        <div class="interview" >
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div className={"quote"}>
              <p>Well, sure, okay. So, my name is Joseph Heath. I'm currently a professor in the department of philosophy at the University of Toronto. I've actually been here now since 1995, which helps establish my age: I'm 50 years old. I was born in Saskatoon, Saskatchewan and my parents were sort of hippie back-to-the-landers. I actually grew up on a hobby farm outside of Saskatoon in a house that my parents were building as we lived in it.
              </p>
              <p>That, actually, is where the interest in counterculture came from -- was because I was raised, you know, they say the fish don't notice the water because it's what they're swimming in.</p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>[Laughs.]</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>
            So, all of this kind of '60s ambiance and all of those ideas was just second nature to me. That was the world I lived in growing up. So, in the 1980's I became a punk-rocker and was hugely involved in counterculture, and at the time as a punk-rocker thought that what we were doing was just the exact opposite of what our hippie parents had been doing. So, we thought we were really were rejecting all of that. It was only much later -- largely from studying philosophy, reading books, reading school stuff, reading critical theory -- that I started to discover that despite the fact with punk we were explicitly rebelling against what hippies have been doing, we actually shared 90 percent of the same worldview. So, we actually weren't doing anything all that different. We were actually sort of playing out the same script with just slightly different figures and also just thinking, "Oh, this time, with more effort. We're gonna basically try the same thing that they tried, but we're just gonna do it better."
              </p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>[Laughs.] Double-down.</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>

              That's right. Yeah. That's exactly it.
              </p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>Yeah. Yeah.</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>

            So, the subtitle of the book The Rebel Sell could have definitely been: "Why Everything I Used to Believe Turned out to be Wrong." Because it was at some point, coming to realize that there was a lot of theoretical assumptions underlying this whole countercultural idea, the idea of a cultural rebellion that was deeply problematic. And in a lot of ways it wasn't working any better for punks than it was for hippies. But also, there was elements of it that were in a kind of death spiral, right? Which is one of the problems with rebellion, that you have to always have a more extreme form of rebellion.
              </p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>Right.</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>
                It was kind of obvious we were reaching the limits of how extreme rebellion could be. [Laughs.] It just became a huge circle nuisance. So, the book was definitely -- then having gone through the whole process of graduate school, studying philosophy, reading so much of the work that inspired the thinking of people in the 1960's, then the book was an attempt to go through and say: What was salvageable, what was right, what was wrong in the ideas that were motivating my generation and my parent's generation?
              </p>


            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>Well, this doesn't have to be the central lens of this because where I'm usually at with this project, I'm two or three steps removed from this lens and focusing it elsewhere. But just for more context, what awareness of videogame culture and the videogame industry? When I say those words, what does that conjure up in your mind? </b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>
                Well, yeah, I, as well, sort of came of age just when videogames were becoming a big thing. And so, I've been a gamer since high school and still am one. I participate in videogame culture to the extent that I play online shooters and I kind of vaguely follow what's going on with kids these days. [Laughs.]
              </p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>Well, that's kind of a full-time job, though. [Laughs.]</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>So, I teach critical theory and I teach a lot on subculture and one of the things that happened is a lot of subculture -- there was a period of time where, like, when I was young: Subculture, punk subculture, happened in a physical location. Clubs and stuff like that. It was pretty underground simply because the culture was still pretty much preoccupied with selling stuff to baby boomers. So people weren't that really interested in what was going on in the underground scene, right? There was a period of time where subculture kind of just dissipated entirely because everything became transparent. Every scene could be found and so on because you could just go on YouTube and see what people were doing.
              </p>
              <p>Now it's kinda weird though because it's obvious that subculture has entirely moved onto the internet. Like, if you look at all those impulses that were being acted out in punk clubs or at Haight-Ashbury by the hippies and stuff like that? All those impulses now are being channeled into these internet communities, from the alt-right to the control-left and stuff. And so, what kids are up to these days has actually become again totally opaque to old people like me.</p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>Well, and as you mentioned, the punks and the hippies -- I'm guessing if you pay partial attention to this, but have you seen the label "punk" applied to games as a way to understand the culture?</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>Only sort of in passing. Once again, these things are sort of accessible to old people. I mean, I recently read Angela Nagle's book Kill All Normies, which I found extremely helpful at helping me to understand what people are up to. And also, the entire phenomenon of the rise of the countercultural right is something that I find really interesting. Yeah.</p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>Do you think it's overstated, the links between gamer culture and that? That's something I'm asked about all the time by people who are not as closely following it. I'm never quite sure what to tell them.</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>Well, so, one of the things that I found in Nagle's discussion and in a lot of the current stuff that indicated one of the arguments that Andrew [Potter] and I were making in The Rebel Sell, was that we were criticizing the countercultural idea. The thought that just transgressing norms has some kind of intrinsically political and progressive political valence to it.</p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">David</div>
            <div class="quote">
              <p><b>Right</b></p>
            </div>
          </div>
          <div className={"line font-size-" + fontSize}>
            <div class="name">
              Joseph
            </div>
            <div class="quote">
              <p>So, one of the big ideas of the 1960's that ultimately came from Freud was the thought that rules were intrinsically repressive. Like, what's wrong with our society is too many rules. So, when you broke a rule, no matter what the rule was, whether it was manners or something obviously repressive, both of those were politically radical and progressive. So, as we put it in the book, we said: "The hipster cooling his heels in a jazz club in the late '50s was seen as the most profound critic of modern society."</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default InterviewPage

export const Head = () => <title>Joseph Heath - Don't Die</title>
