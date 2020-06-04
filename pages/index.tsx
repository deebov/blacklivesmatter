import React from 'react';
import { motion } from 'framer-motion';
import Row from '../components/row';

export default function Home() {
  return (
    <div className="px-6 lg:px-0 container mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        transition={{ delay: 0.3, ease: 'easeInOut', duration: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center h-screen flex items-center justify-center w-full"
      >
        <h1 className="text-3xl lg:text-6xl font-bold text-gray-900">
          #BLACKLIVESMATTER
        </h1>
      </motion.div>

      <h1 className="text-4xl lg:text-6xl font-bold text-center py-32">
        #SAYTHEIRNAME
      </h1>

      <Row position="right" name="GEORGE FLOYD" img="/edited/george_floyd.png">
        George Floyd, a part-time bouncer in Minneapolis, was purchasing a pack
        of cigarettes at a grocery store when the clerk raised concern that the
        $20 US bill he was using was counterfeit. When Floyd refused to give up
        the cigarettes, the clerk called police. Not long after officers arrived
        to speak to Floyd, they put him in handcuffs. They seemed to struggle
        trying to put Floyd in the squad car. Cellphone footage captured when
        one of the officers, Derek Chauvin, kept his knee on Floyd's neck while
        on top of him on the ground for nearly nine minutes, while three other
        officers stood by. Floyd, who repeatedly said he couldn't breathe,
        became unresponsive and was pronounced dead in hospital an hour later.
      </Row>

      <Row name="BREONNA TAYLOR" img="/edited/breonna_taylor.png">
        Breonna Taylor was shot at least eight times after three officers
        entered her apartment in Louisville, Ky., to serve a search warrant in a
        drug investigation.
      </Row>
      <Row position="right" name="TAMIR RICE" img="/edited/tamir_rice.png">
        Twelve-year-old Tamir Rice was playing in a Cleveland park when a police
        cruiser pulled up. Within two seconds of getting out of his squad car,
        officer Timothy Loehmann shot the boy. Loehmann and another officer,
        Frank Garmback, had arrived in response to a 911 call in which someone
        told dispatchers a "juvenile" was "pulling a gun in and out of his pants
        and pointing it at people." The caller also expressed doubt that the gun
        was real. It was, in fact, a toy pellet gun. Rice died in hospital the
        next day.
      </Row>
      <Row name="ANTWON ROSE" img="/edited/antwon_rose.png">
        Antwon Rose, 17-year-old, was fatally shot in East Pittsburgh on June
        19, 2018 by East Pittsburgh Police Officer Michael Rosfeld. Rose was
        unarmed when shot and was transported to McKeesport Hospital where he
        was later declared deceased.
      </Row>
      <Row name="BOTHAM JEAN" img="/edited">
        On Sept. 6, 2018, Amber Guyger, an off-duty officer with the Dallas
        Police Department, walked into the apartment of Botham Jean and fatally
        shot him.
      </Row>
      <Row
        position="right"
        name="PHILANDO CASTILE"
        img="/edited/philando_castile.png"
      >
        Philando Castile, 32, was driving with his girlfriend, Diamond Reynolds,
        and her four-year-old daughter when their car was pulled over by police
        in a suburb of St. Paul, Minn. One officer, Jeronimo Yanez, came over to
        the driver's side to tell Castile his brake lights were out and asked
        for his driver's licence and insurance. The other officer stood a ways
        back. During their exchange, Castile informed Yanez that he was carrying
        a gun legally. Yanez appeared to panic as Castile reached for his wallet
        and the officer shot seven times, hitting Castile with five bullets.
        Castile died in hospital 20 minutes later.
      </Row>
      <Row name="ALTON STERLING" img="/edited/alton_sterling.png">
        Alton Sterling was selling DVDs outside of a convenience store in Baton
        Rouge, La. As he was packing up his things, Sterling was confronted by a
        police officer named Howie Lake. Soon after, another officer, Blane
        Salamoni, arrived and almost immediately pulled out his gun. Cellphone
        video shot by a bystander captured Sterling asking the officers why he
        was being detained, and before long they tried to cuff him. In the
        ensuing scuffle, someone can be heard screaming "He's got a gun!" and
        Salamoni fatally shot Sterling.
      </Row>
      <Row position="right" name="JAMAR CLARK" img="/edited/jamar_clark.png">
        Twenty-four-year-old Jamar Clark was shot in the North Side area of
        Minneapolis around midnight on Nov. 15, 2015, after being confronted by
        two police officers. Clark died after being shot in the head by Officer
        Dustin Schwarze. There are conflicting reports about what happened.
        During the encounter, the other officer, Mark Ringgenberg, allegedly
        told Schwarze that Clark had reached for his service gun. Some
        witnesses, however, suggested Clark had been handcuffed.
      </Row>
      <Row name="FREDDIE GRAY" img="/edited/freddie_gray.png">
        On April 12, 2015, Baltimore police officers arrested 25-year-old
        Freddie Gray for possession of a "switchblade" and took him into a
        police transport van — in handcuffs and leg shackles but with no
        seatbelt — and drove away. Within 45 minutes, Gray was found in the van
        unconscious and not breathing. His spinal cord was almost severed. He
        went into a coma and died a week later.
      </Row>
      <Row position="right" name="WALTER SCOTT" img="/edited/walter_scott.png">
        Walter Scott was driving his vehicle in North Charleston, S.C., when a
        police officer, Michael Slager, pulled him over for a broken taillight.
        A bystander captured the ensuing events on cellphone video. While Slager
        was talking to Scott in a vacant lot, Scott started to run away. Slager
        fired eight shots and hit Scott five times, killing him.
      </Row>
      <Row name="LAQUAN McDONALD" img="/edited/laquan_mcdonald.png">
        Chicago police officer Jason Van Dyke shot Laquan McDonald 16 times in
        the middle of a street around 10 p.m. Police said McDonald, who was 17,
        had been brandishing a knife and that the shooting was in self-defence.
        For more than a year, the city fought the release of dashcam footage of
        the event that could clarify the sequence of events. Thirteen months
        later, a judge permitted the public release of this footage, which shows
        that while McDonald was carrying a knife, he had been walking away from
        Van Dyke when the officer shot him 16 times in 15 seconds.
      </Row>
      <Row
        position="right"
        name="MICHAEL BROWN"
        img="/edited/michael_brown.png"
      >
        Michael Brown, 18, and a friend were walking in the middle of a street
        in Ferguson, Mo., a suburb of St. Louis, when police officer Darren
        Wilson drove by and asked them to use the sidewalk. What transpired next
        is still unclear, but Brown and Wilson scuffled while the officer was
        still inside his cruiser. Shots were fired from inside the vehicle.
        Brown then ran off. He was hit with six bullets in all and died at the
        scene.
      </Row>
      <Row name="ERIC GARNER" img="/edited/eric_garner.png">
        Eric Garner was walking through a neighbourhood in Staten Island, N.Y.,
        when two New York police officers confronted him. Police had had
        previous interactions with Garner, who was known for selling untaxed
        cigarettes on the street. This encounter quickly escalated, with
        multiple officers joining in to restrain Garner. During the struggle,
        officer Daniel Pantaleo put Garner in a chokehold. The hold, which is
        banned by the NYPD, is what ultimately killed him. A friend of Garner's
        captured what happened on his phone, and the video went viral. The
        footage immortalized Garner's dying words, "I can't breathe," which
        became a rallying cry for the Black Lives Matter movement.
      </Row>
      <Row position="right" name="BETTIE JONES" img="/edited/bettie_jones.png">
        Chicago police shot Bettie Jones in the neck "accidentally" while trying
        to help a neighbor deal with a domestic disturbance involving his son,
        Quintonio Legrier. The neighbor said he called police when his son tried
        to break his door down early in the morning, and that Jones was shot
        when she opened the door to direct officers when they arrived.
      </Row>
      <Row name="KEITH CHILDRESS" img="/edited/keith_childress.png">
        The U.S. Marshals were conducting surveillance on the man and requested
        help from Metro when he fled. When police caught up with him, they
        claimed he had an "unknown object" in his hand. Assuming it was a gun,
        they shot him dead. The object turned out to be a cellphone.
      </Row>
      <Row position="right" name="MICHAEL NOEL" img="/edited/michael_noel.png">
        Michael, 32, was having a psychological breakdown and his mother
        requested an order of protection. Police said that when they arrived,
        Noel resisted arrest and could not be subdued after two Taser
        deployments. Noel's aunt said he was then shot in the chest. Two
        witnesses have said Michael Noel was unarmed with one handcuff around
        one wrist when he was shot.
      </Row>
      <Row name="LAMONTEZ JONEZ" img="/edited/lamontez_jones.png">
        Police say Lamontez, 39, was "causing a disturbance" downtown and ran
        when police approached him. Police shot Lamontez multiple times,
        claiming he aimed a gun at them. Police later revealed that the gun was
        a toy.
      </Row>

      {/* FOOTER */}
      <div className="py-32">
        <div>
          <a
            href="https://github.com/deebov/blacklivesmatter"
            className="underline"
          >
            Edit this page
          </a>
        </div>
        <div className="mt-16">
          <div className="flex">
            <h2 className="font-bold">Sources</h2>
            <ul className="ml-8">
              <li>
                <a
                  className="hover:underline"
                  href="https://mappingpoliceviolence.org/unarmed"
                  title="Mapping Police Violence"
                >
                  Police killed more than 100 unarmed black people in 2015
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://cbc.ca/news/world/police-killings-recent-history-george-floyd-1.5593768"
                  title="Recent U.S. police killings of black people"
                >
                  Recent U.S. police killings of black people
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://en.wikipedia.org/wiki/Shooting_of_Antwon_Rose_Jr."
                  title="Shooting of Antwon Rose Jr."
                >
                  Shooting of Antwon Rose Jr.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex">
            <h2 className="font-bold">Credits</h2>
            <ul className="ml-8">
              <li>
                <a
                  className="hover:underline"
                  href="https://www.remove.bg/"
                  title="Remove.bg"
                >
                  Remove.bg
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://tailwindcss.com/"
                  title="TailwindCSS"
                >
                  TailwindCSS
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://vercel.com/"
                  title="Vercel"
                >
                  Vercel
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-16">
            Delevoped by{' '}
            <a className="mr-4 underline" href="https://twitter.com/deebovv">
              @deebovv
            </a>
            -
            <a href="mailto:deebov@yandex.com" className="ml-4 underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
